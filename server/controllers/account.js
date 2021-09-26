const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

const route = express.Router();

route.get("/me", auth, (req, res) => {
  try {
    const { email, id, username } = req.body["jwt_payload"];
    res.send({ email: email, username: username, id: id });
  } catch (err) {
    res.send(err);
  }
});

module.exports = route;
