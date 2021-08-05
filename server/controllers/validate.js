const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
require("dotenv").config();

const route = express.Router();

route.get("/", auth, (req, res) => {
  const payload = req.body["jwt_payload"];
  const jwtSign = process.env["JWT_SIGN"];

  if (!jwtSign) return res.status(409).send("error making token");

  const newJwtPayload = {
    username: payload.username,
    email: payload.email,
    id: payload._id,
  };

  const token = jwt.sign(newJwtPayload, jwtSign, { expiresIn: "1h" });

  res.send(token);
});

module.exports = route;
