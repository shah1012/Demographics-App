import express from "express";
const app = express();
// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//controllers
import { handleFetch } from "./controllers/image.js";

const port = process.env.PORT || 3001;

// routes

app.get("/", (req, res) => {
  res.json({
    name: "hello",
  });
});

app.get("/imageurl", (req, res) => {
  handleFetch(req, res);
});

app.listen(port);
