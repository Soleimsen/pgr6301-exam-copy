import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ArticlesApiContext } from "../LoginContext";
import LoginCallback from "./LoginCallback";
import StartLogin from "../Components/Login/StartLogin";

export const EndSession = ({ reload }) => {
  const navigate = useNavigate();
  const { endSession } = useContext(ArticlesApiContext);
  useEffect(() => {
    async function funksjon() {
      await endSession();
      reload();
      navigate("/");
    }
    funksjon();
  });
  return <h1>Please wait...</h1>;
};

const Login = ({ config, reload }) => {
  return (
    <Routes>
      <Route path={"/"} element={<StartLogin config={config} />} />
      <Route
        path={"/:provider/callback"}
        element={<LoginCallback config={config} reload={reload} />}
      />
      <Route path={"/endsession"} element={<EndSession reload={reload} />} />
      <Route path={"*"} element={<StartLogin config={config} />} />
    </Routes>
  );
};

export default Login;
