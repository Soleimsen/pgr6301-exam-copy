import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEditArticle } from "../Components/useArticle";
import { UseLoading } from "../Hooks/UseLoading";
import { fetchJSON } from "../Hooks/FetchJSON";
import { putJSON } from "../Hooks/putJSON";

const EditArticle = ({ user, article }) => {
  const { _id } = useParams();
  const editArticle = useEditArticle(_id);
  const userId = user.azure.sub;
  console.log(userId);

  const { loading, error, data } = UseLoading(async () =>
    fetchJSON(`/api/articles/`)
  );
  console.log(data);
  const [headline, setHeadline] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const author = "Magnus Soleim";
    const date = "3.5.11";
    const sub = "434342343242332";
    const editedArticle = {
      author,
      date,
      sub,
      headline,
      body,
      tags,
    };
    putJSON(`api/articles/${_id}`, editedArticle);
  }
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
              if (article.sub === userId) {
                const dateFormat = new Date(article.date).toLocaleDateString();
                return (
                  <>
                    <div className="mainContentContainer">
                      <form
                        className="newArticleContainer"
                        onSubmit={handleSubmit}
                      >
                        <h1>Edit Article</h1>
                        <div className="margin">
                          Author:
                          <label> {user.azure.name}</label>
                        </div>
                        <div className="margin">
                          Headline:
                          <input
                            defaultValue={article.headline}
                            onChange={(e) => setHeadline(e.target.value)}
                          />
                        </div>
                        <div>Body:</div>
                        <div className="margin">
                          <textarea
                            className="textarea"
                            defaultValue={article.body}
                            onChange={(e) => setBody(e.target.value)}
                          />
                        </div>
                        <div className="margin">
                          <select
                            defaultValue={article.tags}
                            name="tag"
                            id="tag"
                            onChange={(e) => setTags(e.target.value)}
                            selected="s"
                          >
                            <option value="s" disabled>
                              Select a tag
                            </option>
                            <option value="F1">F1</option>
                            <option value="Elon Musk">Elon Musk</option>
                            <option value="Technology">Technology</option>
                            <option value="Cars">Cars</option>
                          </select>
                        </div>
                        <div className="margin">Date: {dateFormat}</div>
                        <button className="margin">Submit</button>
                      </form>
                    </div>
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

export default EditArticle;
