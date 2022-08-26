import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ArticleSingle from "./Components/ArticlesFull/ArticleSingle";
import Sidebar from "./Components/Sidebar";
import { UseLoading } from "./Hooks/UseLoading";
import { ArticlesApiContext } from "./LoginContext";
import Articles from "./Pages/Articles";
import EditArticle from "./Pages/EditArticle";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NewArticle from "./Pages/NewArticle";
import NoPage from "./Pages/NoPage";
import Profile from "./Pages/Profile";

function UserActions({ user }) {
  let userinfo;
  if (user.google) {
    userinfo = user.google;
  }
  if (user.azure) {
    userinfo = user.azure;
  }
  if (!user || Object.keys(user).length === 0) {
    return (
      <>
        <Link className="loginBtn" to={"/login"}>
          Login
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="loggedInHeader">
        <Link className="profileHeaderText" to={"/profile"}>
          {userinfo?.name ? `Profile for ${userinfo.name}` : "Profile"}
        </Link>

        <Link className="loginBtn" to={"/login/endsession"}>
          Log out
        </Link>
      </div>
    </>
  );
}

const App = () => {
  const { fetchLogin } = useContext(ArticlesApiContext);
  const { data, error, loading, reload } = UseLoading(fetchLogin);

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }
  if (loading) {
    return <div>Please wait...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <header>
          <div>
            <Link className="logo" to={"/"}>
              Verdens Undergang
            </Link>
            {data.user.azure && (
              <Link className="header-article" to={"/articles/new"}>
                New Article
              </Link>
            )}
          </div>
          <div>
            <UserActions user={data?.user} />
          </div>
        </header>
        <main>
          <div className="main-container">
            <Sidebar />

            <div className="mainContentContainer">
              <Routes>
                <Route path="/" element={<Home user={data?.user} />} />
                <Route
                  path={"/profile"}
                  element={<Profile user={data?.user} />}
                />
                <Route
                  path={"/login/*"}
                  element={<Login config={data.config} reload={reload} />}
                />
                <Route path="/articles" element={<Articles />} />
                <Route
                  path="/articles/:_id"
                  element={<ArticleSingle user={data?.user} />}
                />
                <Route
                  path="/articles/new"
                  element={<NewArticle user={data?.user} />}
                />
                <Route
                  path="/articles/edit/:_id"
                  element={
                    <EditArticle user={data?.user} article={data?.article} />
                  }
                />
                <Route path="/*" element={<NoPage />} />
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
