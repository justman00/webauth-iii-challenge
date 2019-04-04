const express = require("express");
const authRouter = require("../auth/auth-router");
const authMiddleware = require("./auth-middleware");
const usersRouter = require("../users/users-router");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api", authMiddleware, usersRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

module.exports = server;
