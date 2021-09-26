const express = require("express");
const route = express.Router();

require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");
const mobilenet = require("@tensorflow-models/mobilenet");
const formidable = require("formidable");
const imageData = require("get-image-data");

const identifyImage = (url) => {
  return new Promise((resolve, reject) => {
    imageData(url, async (err, image) => {
      if (err) {
        reject(err);
      } else {
        const channelCount = 3;
        const pixelCount = image.width * image.height;
        const vals = new Int32Array(pixelCount * channelCount);

        let pixels = image.data;

        for (let i = 0; i < pixelCount; i++) {
          for (let k = 0; k < channelCount; k++) {
            vals[i * channelCount + k] = pixels[i * 4 + k];
          }
        }

        const outputShape = [image.height, image.width, channelCount];

        const input = tf.tensor3d(vals, outputShape, "int32");

        const model = await mobilenet.load();

        let temp = await model.classify(input);

        resolve(temp);
      }
    });
  });
};

route.post("/", async (req, res) => {
  const { url } = req.body;

  identifyImage(url)
    .then((imageClassification) => {
      res.json(imageClassification);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send("Something went wrong while fetching image from URL.");
    });
});

module.exports = route;
