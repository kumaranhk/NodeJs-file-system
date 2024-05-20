import express from "express";
import { createFile, showFiles } from "./utils.js";

const server = express();

//Post request to create a file
server.post("/file", (req, res) => {
  createFile();
  res.send({ message: "File created successfully" });
});

//Get request to get all the files
server.get("/file", async (req, res) => {
  try {
    let files = await showFiles();
    res.send({ files: files });
  } catch (error) {
    res.status(500).send({ message: "Error reading files" });
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log("server listenning in the port ", PORT);
});
