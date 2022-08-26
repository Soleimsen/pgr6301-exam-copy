import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { MongoClient } from "mongodb";
import { ArticlesApi } from "./articlesApi.js";
import { LoginApi } from "./loginApi.js";
import { WebSocketServer } from "ws";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
  console.log("Connected to mongodb");
  app.use(
    "/api/articles",
    ArticlesApi(mongoClient.db(process.env.MONGODB_DATABASE || "news_articles"))
  );
});

app.use("/api/login", LoginApi());

const wsServer = new WebSocketServer({ noServer: true });
wsServer.on("connect", (socket) => {
  setTimeout(() => {
    socket.send(JSON.stringify({ author: "Server", message: "Hello there" }));
  }, 1000);
});

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running http://localhost:" + (process.env.PORT || 3000)
  );
  server.on("upgrade", (req, socket, head) => {
    wsServer.handleUpgrade(req, socket, head, (socket) => {
      wsServer.emit("connect", socket, req);
    });
  });
});
