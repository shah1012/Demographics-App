const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const jwtSign = process.env["JWT_SIGN"];

  const token = req.headers["jwt_token"];

  if (!token) return res.status(404).send("No token found");

  if (!jwtSign) return res.status(404).send("No sign");

  try {
    if (typeof token === "object") return;
    const payload = jwt.verify(token, jwtSign);

    if (!payload) res.status(400).send("Invalid Token");
    req.body["jwt_payload"] = payload;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
