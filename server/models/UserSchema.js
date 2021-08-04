const mongoose = require("mongoose");
const joi = require("joi");

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 3,
  },

  email: {
    required: true,
    type: String,
    unique: true,
  },

  password: {
    require: true,
    type: String,
    minlength: 5,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const joiUserSchema = joi.object({
  name: joi.string().required().min(3),
  email: joi
    .string()
    .email({ minDomainSegments: 1, tlds: { allow: ["com", "net"] } }),
  password: joi
    .string()
    .required()
    .min(5)
    .regex(/.*[A-Z].*/),
  isAdmin: joi.boolean(),
});

const mongooseModel = mongoose.model("Users", userSchema);

module.exports = {
  mongooseModel,
  joiUserSchema,
};
