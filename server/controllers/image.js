const express = require("express");
const dotenv = require("dotenv");
const Clarifai = require("clarifai");

dotenv.config();
const route = express.Router();

const app = new Clarifai.App({
  apiKey: process.env.API_KEY,
});

route.post("/", async (req, res) => {
  app.models
    .predict(Clarifai.LOGO_MODEL, req.body.url)
    .then((data) => res.json(data.outputs[0]))
    .catch((err) => console.log(err));
});

module.exports = route;
