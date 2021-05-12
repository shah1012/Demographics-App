import Clarifai from "clarifai";

import dotenv from "dotenv";
dotenv.config();

const app = new Clarifai.App({
  apiKey: process.env.MODEL_KEY,
});

export const handleFetch = (req, res) => {
  app.models
    .predict(Clarifai.DEMOGRAPHICS_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Unable to work with api"));
};
