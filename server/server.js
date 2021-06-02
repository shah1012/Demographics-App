const cors = require("cors");
const express = require("express");
const app = express();

const { Image, Login, Signup } = require("./controllers/index");

//parsers
app.use(express.json());
app.use(cors());

// controllers
app.get("/", (req, res) => {
  res.json("Connected to the server");
});

app.use("/api/image", Image);
app.use("/login", Login);
app.use("/register", Signup);

// listen
app.listen(3001, () => {
  console.log("Listening to Port 3001");
});
