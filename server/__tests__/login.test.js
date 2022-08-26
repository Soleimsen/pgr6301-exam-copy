import request from "supertest";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());

describe("Login tests", () => {
  it("Login with google", async () => {
    const response = await request(app).get("/api/login").expect(200);
    expect(response.body).toEqual({
      config: {
        google: {
          client_id: process.env.GOOGLE_CLIENT_ID,
          response_type: "token",
          scope: "email profile openid",
          authorization_endpoint:
            "https://accounts.google.com/o/oauth2/v2/auth",
          userinfo_endpoint: "https://openidconnect.googleapis.com/v2/userinfo",
        },
        microsoft: {
          response_type: "code",
          response_mode: "fragment",
          client_id: process.env.MICROSOFT_CLIENT_ID,
          code_challenge_method: "S256",
          scope: "openid User.Read",
          authorization_endpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
          token_endpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/token",
          userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
        },
      },
      user: {},
    });
  });
});
