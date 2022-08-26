import ReactDOM from "react-dom";
import * as React from "react";
import Home from "../Pages/Home";
import Articles from "../Pages/Articles";
import NoPage from "../Pages/NoPage";
import EditArticle from "../Pages/EditArticle";
import NewArticle from "../Pages/NewArticle";
import { MemoryRouter } from "react-router-dom";
import { Simulate } from "react-dom/test-utils";
import App from "../App";
import LoginCallback from "../Pages/LoginCallback";
import Sidebar from "../Components/Sidebar";
import ArticleLayout from "../Components/ArticlesFull/ArticleLayout";
import ArticlesComponent from "../Components/ArticlesFull/ArticlesComponent";
import ArticleSingle from "../Components/ArticlesFull/ArticleSingle";
import SingleArticleLayout from "../Components/ArticlesHeadlines/SingleArticleLayout";
import SingleArticlesComponent from "../Components/ArticlesHeadlines/SingleArticlesComponent";
import SingleArticlesComponentReader from "../Components/ArticlesHeadlines/SingleArticlesComponentReader";
import LoginBtn from "../Components/Login/LoginBtn";
import StartLogin from "../Components/Login/StartLogin";
import ArticleLayoutSingle from "../Components/ArticlesFull/ArticleLayoutSingle";

describe("Pages render without crashing", () => {
  it("Articles", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<Articles />, domElement);

    expect(domElement.innerHTML).toMatchSnapshot();
  });

  it("NoPage", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<NoPage />, domElement);

    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("app", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<App />, domElement);

    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("LoginCallback", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <LoginCallback />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});

describe("Components without crashing", () => {
  it("sidebar", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<Sidebar />, domElement);

    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("article component ", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<ArticlesComponent />, domElement);

    expect(domElement.innerHTML).toMatchSnapshot();
  });

  it("article single", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ArticleSingle />
      </MemoryRouter>,
      domElement
    );

    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("SingleArticlesComponent", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <SingleArticlesComponent />
      </MemoryRouter>,
      domElement
    );

    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("SingleArticlesComponentReader", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <SingleArticlesComponentReader />
      </MemoryRouter>,
      domElement
    );

    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("LoginBtn", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <LoginBtn />
      </MemoryRouter>,
      domElement
    );

    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("Start login", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <StartLogin />
      </MemoryRouter>,
      domElement
    );

    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
