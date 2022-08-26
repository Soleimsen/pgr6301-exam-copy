import React from "react";
import SingleArticlesComponent from "../Components/ArticlesHeadlines/SingleArticlesComponent";
import SingleArticlesComponentReader from "../Components/ArticlesHeadlines/SingleArticlesComponentReader";

const Home = ({ user }) => {
  if (user.google || user.azure) {
    return (
      <>
        <div className="mainContentContainer">
          {user.azure && <SingleArticlesComponent />}
          {user.google && <SingleArticlesComponent />}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mainContentContainer">
          <SingleArticlesComponentReader />
        </div>
      </>
    );
  }
};

export default Home;
