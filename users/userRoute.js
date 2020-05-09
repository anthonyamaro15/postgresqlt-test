const express = require("express");
const db = require("../data/config-db");

const route = express.Router();

route.get("/", (req, res) => {
  db("users2").then((users) => {
    res.status(200).json(users);
  });
});

route.post("/", (req, res) => {
  db("users2")
    .insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
