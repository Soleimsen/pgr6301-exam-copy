import React from "react";

const SingleArticleLayoutReader = ({
  user,
  article: { _id, author, date, headline, body },
}) => {
  const dateFormat = new Date(date).toLocaleDateString();
  return (
    <>
      <div className="articleLayout" key={_id} to={`/articles/${_id}`}>
        <div className="border">
          <h1>{headline}</h1>
          <div className="dateName">
            <p>
              <i>Author: {author}</i>
            </p>
            <p className="date">Date written: {dateFormat}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticleLayoutReader;
