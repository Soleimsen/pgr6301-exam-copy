import request from "supertest";
import express from "express";
import { MongoClient } from "mongodb";
import { ArticlesApi } from "../articlesApi";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("news_articles_test");
  await database.collection("articles_test").deleteMany({});
  app.use("/api/articles", ArticlesApi(database));
});
afterAll(async () => {
  mongoClient.close();
});

describe("articles api", () => {
  it("add article", async () => {
    const author = "Mega Man ";
    const headline = "My Test Article";
    await request(app)
      .post("/api/articles")
      .send({ author, headline })
      .expect(201);
    expect(
      (
        await request(app)
          .get("/api/articles")
          .query({ author: author })
          .expect(200)
      ).body.map(({ author }) => author)
    ).toContain(author);
  });
});
