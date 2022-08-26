import { Router } from "express";

const articles = [
  {
    headline: "Article 1",
  },
  {
    headline: "Article 2",
  },
];

export function ArticlesApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const articles = await mongoDatabase
      .collection("articles")
      .find()
      .sort()
      .map(({ _id, author, date, headline, body, sub, tags }) => ({
        _id,
        author,
        date,
        headline,
        body,
        sub,
        tags,
      }))
      .limit(25)
      .toArray();
    res.json(articles);
  });

  router.get("/:id", async (req, res) => {
    const article = await mongoDatabase.collection("articles").findOne({
      _id: req.params.id,
    });
    res.json(article);
  });
  router.get("/", async (req, res) => {
    const article = await mongoDatabase.collection("articles").find({
      tags: req.params.tags,
    });
    res.json(articleTags);
  });

  router.put("/:id", async (req, res) => {
    const article = req.body;
    await mongoDatabase
      .collection("articles")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: article });
    res.sendStatus(200);
  });

  router.post("/", (req, res) => {
    const { author, date, headline, body, sub, tags } = req.body;
    articles.push({ author, date, headline, body, sub, tags });
    mongoDatabase
      .collection("articles")
      .insertOne({ author, date, headline, body, sub, tags });
    res.sendStatus(201);
  });

  return router;
}
