import React from "react";
import { Link } from "react-router-dom";

const ArticleLayout = ({
  article: { _id, author, date, headline, body, tags },
}) => {
  const dateFormat = new Date(date).toLocaleDateString();
  return (
    <>
      <div key={_id} className="articleLayout">
        <h1>{headline}</h1>
        <div className="dateName">
          <p>
            <i>Author: {author}</i>
          </p>
          <p className="date">Date written: {dateFormat}</p>
        </div>
        <div className="border">
          <div>
            <p className="articleBody">{body}</p>
            <p>Topic: {tags}</p>
            <Link className="articleBody" to={`/articles/${_id}`}>
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleLayout;
