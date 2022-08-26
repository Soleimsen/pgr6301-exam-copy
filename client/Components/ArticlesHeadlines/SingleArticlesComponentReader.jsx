import React from "react";
import { UseLoading } from "../../Hooks/UseLoading";
import { fetchJSON } from "../../Hooks/FetchJSON";
import SingleArticleLayoutReader from "./SingleArticleLayoutReader";

const SingleArticlesComponentReader = () => {
  const { loading, error, data } = UseLoading(async () =>
    fetchJSON("/api/articles")
  );

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }
  return (
    <>
      <div className="articlesContainer">
        <h1>Articles</h1>
        <ul className="article">
          {data
            .slice()
            .reverse()
            .map((article) => (
              <SingleArticleLayoutReader key={article._id} article={article} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default SingleArticlesComponentReader;
