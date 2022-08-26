import { randomString } from "../../Numbers/randomString";
import { sha256 } from "../../Numbers/sha256";
import React from "react";

const LoginBtn = ({ config, label, provider }) => {
  const handleLogin = async () => {
    const {
      authorization_endpoint,
      response_type,
      scope,
      client_id,
      code_challenge_method,
    } = config[provider];
    const state = randomString(50);
    window.sessionStorage.setItem("expected_state", state);

    const parameters = {
      response_type,
      response_mode: "fragment",
      client_id,
      state,
      scope,
      redirect_uri: `${window.location.origin}/login/${provider}/callback`,
    };
    if (code_challenge_method) {
      const code_verifier = randomString(50);
      window.sessionStorage.setItem("code_verifier", code_verifier);
      parameters.code_challenge_method = code_challenge_method;
      parameters.code_challenge = await sha256(code_verifier);
    }

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(parameters);
  };

  return (
    <div>
      <button className="actualLoginBtn" onClick={handleLogin}>
        {label}
      </button>
    </div>
  );
};

export default LoginBtn;
