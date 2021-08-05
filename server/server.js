const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { Image, Login, Signup, Validate } = require("./controllers/index");

// mongodb
mongoose
  .connect("mongodb://localhost/LogoDetector", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Connected to mongodb...");
  })
  .catch((err) => {
    "Couldn't connect to mongodb", err;
  });

//parsers
app.use(express.json());
app.use(cors());

// controllers
app.get("/", (req, res) => {
  res.json("Connected to the server");
});

app.use("/api/image", Image);
app.use("/api/login", Login);
app.use("/api/signup", Signup);
app.use("/api/validate", Validate);

// listen
app.listen(3001, () => {
  console.log("Listening to Port 3001");
});
