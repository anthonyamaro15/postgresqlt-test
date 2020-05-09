const express = require("express");
const userRoute = require("../users/userRoute");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json("hello from express");
});

server.use("/api/users", userRoute);

module.exports = server;
