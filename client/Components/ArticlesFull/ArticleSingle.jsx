import React from "react";
import { UseLoading } from "../../Hooks/UseLoading";
import { fetchJSON } from "../../Hooks/FetchJSON";
import { useParams } from "react-router-dom";
import { useArticle } from "../useArticle";
import ArticleLayoutSingle from "./ArticleLayoutSingle";
import { Link } from "react-router-dom";

const ArticleSingle = ({ user }) => {
  const { _id } = useParams();
  const article = useArticle(_id);
  console.log(_id);

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
      <div className="mainContentContainer">
        <div className="articlesContainer">
          <ul className="article">
            {data.map((article) => {
              if (article._id === _id) {
                return (
                  <>
                    <ArticleLayoutSingle
                      key={article._id}
                      article={article}
                      user={user}
                    />
                  </>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticleSingle;
