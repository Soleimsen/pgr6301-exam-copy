import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticlesApiContext } from "../LoginContext";

const LoginCallback = ({ reload, config }) => {
  const { provider } = useParams();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { registerLogin } = useContext(ArticlesApiContext);
  useEffect(() => {
    const funksjon = async () => {
      const { access_token, error, error_description, state, code } =
        Object.fromEntries(
          new URLSearchParams(window.location.hash.substring(1))
        );

      const expected_state = window.sessionStorage.getItem("expected_state");
      if (!state || expected_state !== state) {
        setError("Unexpected state");
        return;
      }

      if (error || error_description) {
        setError(`Error: ${error} (${error_description})`);
        return;
      }

      if (code) {
        const { client_id, token_endpoint } = config[provider];
        const code_verifier = window.sessionStorage.getItem("code_verifier");
        const payload = {
          grant_type: "authorization_code",
          code,
          client_id,
          code_verifier,
          redirect_uri: `${window.location.origin}/login/${provider}/callback`,
        };
        const res = await fetch(token_endpoint, {
          method: "POST",
          body: new URLSearchParams(payload),
        });
        if (!res.ok) {
          setError(`Failed to fetch token ${res.status}: ${await res.text()}`);
          return;
        }
        const { access_token } = await res.json();
        await registerLogin(provider, { access_token });
        reload();
        navigate("/");
        return;
      }

      if (!access_token) {
        setError("Missing access_token");
        return;
      }

      await registerLogin(provider, { access_token });
      reload();
      navigate("/");
    };
    funksjon();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  return <h1>Please wait...</h1>;
};

export default LoginCallback;
