const express = require("express");
const db = reaquire("../data/config-db");

const route = express.Router();

route.post("/", (req, res) => {
  db("users")
    .insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
