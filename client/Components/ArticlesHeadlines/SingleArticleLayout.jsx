import React from "react";
import { Link } from "react-router-dom";

const SingleArticleLayout = ({
  article: { _id, author, date, headline, body },
}) => {
  const dateFormat = new Date(date).toLocaleDateString();
  return (
    <>
      <Link className="articleLayout" key={_id} to={`/articles/${_id}`}>
        <div className="border">
          <h1>{headline}</h1>
          <div className="dateName">
            <p>
              <i>Author: {author}</i>
            </p>
            <p className="date">Date written: {dateFormat}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleArticleLayout;
