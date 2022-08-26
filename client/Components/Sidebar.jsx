import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ArticlesApiContext } from "../LoginContext";
import { UseLoading } from "../Hooks/UseLoading";
const Sidebar = () => {
  const [topic, setTopic] = useState("");
  const { fetchLogin } = useContext(ArticlesApiContext);
  const { data } = UseLoading(fetchLogin);

  return (
    <div className="sidebar">
      <div></div>
      <h1>Sidebar</h1>
      {data?.user.google && (
        <ul>
          <Link className="menuItem" to="/articles">
            All Articles
          </Link>
        </ul>
      )}
      {data?.user.azure && (
        <>
          <ul>
            <Link className="menuItem" to="/articles">
              All Articles
            </Link>
          </ul>
          <ul>
            <Link className="menuItem" to="/articles/new">
              Write a new article
            </Link>
          </ul>
        </>
      )}

      <div className="topicSearch">
        <p className="menuItem marginBetween">Topics: </p>
        <select
          className="menuItem"
          name="Tags"
          id=""
          onChange={(e) => setTopic(e.target.value)}
          defaultValue={"1"}
        >
          <option value="1" disabled>
            Select Topic
          </option>
          <option value="F1">F1</option>
          <option value="Elon Musk">Elon Musk</option>
          <option value="Technology">Technology</option>
          <option value="Cars">Cars</option>
        </select>
        <div>
          <button className="topicBtn">Search topic</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
