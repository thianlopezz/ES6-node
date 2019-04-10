import "@babel/polyfill";

import path from "path";

import express from "express";
import bodyParser from "body-parser";
import open from "open";

import api from "./routes/api";

const app = express();

app.set("port", process.env.APP_PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.join(__dirname, "../client")));

app.use("/api", api);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "index.html"));
});

app.listen(app.get("port"), async (req, res) => {
  console.log("Magic happens on port: ", app.get("port"));
  console.log("We are on: ", process.env.NODE_ENV || "DEVELOPMENT");

  await open("http://localhost:" + app.get("port") + "/api");
  await open("http://localhost:" + app.get("port"));
});
