import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchJSON } from "../Hooks/FetchJSON";

const NewArticle = ({ user }) => {
  const [headline, setHeadline] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [sub, setSub] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      headline === "" ||
      body === "" ||
      date === "" ||
      author === "" ||
      sub === "" ||
      tag === ""
    ) {
      alert("Please fill in all fields");
    } else {
      await fetchJSON("/api/articles", {
        method: "post",
        json: { headline, body, date, author, sub, tags },
      });
      navigate("/");
    }
  }
  if (!user.azure) {
    return (
      <div>
        <h1>You must be logged in as an editor to create an article</h1>
      </div>
    );
  }

  if (user.azure) {
    useEffect(() => {
      setAuthor(user.azure.name);
      setSub(user.azure.sub);
    }, []);

    return (
      <>
        <div className="mainContentContainer">
          <form onSubmit={handleSubmit} className="newArticleContainer">
            <h1>Add Article</h1>
            <div className="margin">
              Author:
              <label> {user.azure.name}</label>
            </div>
            <div className="margin">
              Headline:
              <input
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
            </div>
            <div>Body:</div>
            <div className="margin">
              <textarea
                className="textarea"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="margin">
              <select
                name="tag"
                id="tag"
                onChange={(e) => setTags(e.target.value)}
              >
                <option value="s" selected disabled>
                  Select a tag
                </option>
                <option value="F1">F1</option>
                <option value="Elon Musk">Elon Musk</option>
                <option value="Technology">Technology</option>
                <option value="Cars">Cars</option>
              </select>
            </div>
            <div className="margin">
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="margin">Submit</button>
          </form>
        </div>
      </>
    );
  }
};

export default NewArticle;
