import express from "express";
import { createFile, showFiles } from "./utils.js";

const server = express();

server.post("/file", (req, res) => {
  createFile();
  res.send({ message: "File created successfully" });
});

server.get("/file", async (req, res) => {
  try {
    let files = await showFiles();
    res.send({ files: files });
  } catch (error) {
    res.status(500).send({ message: "Error reading files" });
  }
});

const port = 8000;
server.listen(port, () => {
  console.log("server listenning in ", port);
});
