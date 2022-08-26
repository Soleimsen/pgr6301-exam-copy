import React from "react";
import { Link } from "react-router-dom";

const ArticleLayoutSingle = ({
  user,
  article: { _id, author, date, headline, body, tags, sub },
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
            {
              /*sub === user.azure.sub && (*/
              <Link to={`/articles/edit/${_id}`}>
                Edit Article(bare klikk om du er logget inn med AD. rakk ikke
                fikse)
              </Link>
              /*)*/
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleLayoutSingle;
