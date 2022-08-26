import React from "react";
import { fetchJSON } from "./Hooks/FetchJSON";
import { postJSON } from "./Hooks/PostJSON";

export const ArticlesApiContext = React.createContext({
  async fetchLogin() {
    return await fetchJSON("/api/login");
  },
  async registerLogin(provider, login) {
    return await postJSON(`/api/login/${provider}`, login);
  },
  async endSession() {
    const res = await fetch("/api/login", { method: "DELETE" });
    if (!res.ok) {
      throw new Error(`Failed to post ${res.status}: ${res.statusText}`);
    }
  },
});
