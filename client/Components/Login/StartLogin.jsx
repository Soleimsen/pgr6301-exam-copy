import React from "react";
import LoginBtn from "./LoginBtn";

const StartLogin = ({ config }) => {
  return (
    <div className="mainContentContainer loginContainer">
      <h1 className="loginTitle">Login</h1>
      <div className="loginDivider">
        <LoginBtn
          label={"Login with Google"}
          config={config}
          provider={"google"}
        />
        <LoginBtn
          label={"Login with Microsoft"}
          config={config}
          provider={"azure"}
        />
      </div>
    </div>
  );
};

export default StartLogin;
