const express = require("express");
const { mongooseModel, joiUserSchema } = require("../models/UserSchema");
const bcrypt = require("bcrypt");

// router
const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const { error } = joiUserSchema.validate(req.body);
    const errors = [];

    if (error?.details) {
      error.details.forEach((message) => errors.push(message.message));
      res.status(400).send(errors);
      return;
    }

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new mongooseModel({
      name,
      email,
      password: hashedPassword,
    });

    const result = await user.save();
    res.json(result);
  } catch (err) {
    if (err?.keyPattern?.email) {
      return res.status(400).json("Email already exists");
    }
    console.log(err);
    res.status(502).send("couldn't make the user");
  }
});

module.exports = route;
