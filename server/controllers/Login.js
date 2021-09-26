const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// router
const route = express.Router();

// schemas
const { mongooseModel } = require("../models/UserSchema");

// request
route.post("/", (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  try {
    if (userEmail && userPassword) {
      mongooseModel.findOne(
        {
          email: userEmail,
        },
        (err, data) => {
          if (err) {
            res.status(400).json(err);
          }

          if (data) {
            const isValid = bcrypt.compareSync(userPassword, data.password);

            if (isValid) {
              if (!process.env["JWT_SIGN"])
                return res.status(400).send("Unable to make token");

              const payload = {
                username: data.name,
                email: data.email,
                id: data._id,
              };

              // making the token

              console.log(payload);

              const token = jwt.sign(payload, process.env["JWT_SIGN"], {
                expiresIn: "1h",
              });

              res.json({ token });
            } else {
              res.status(400).json("Wrong Credentials");
            }
          } else {
            res.status(400).json("Wrong Credentials");
          }
        }
      );
    } else {
      res.status(400).json("Wrong Credentials");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Error");
  }
});

module.exports = route;
