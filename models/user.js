const mongoose = require("mongoose");
const foodSchema = require("./foods.js");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  pantry: [foodSchema],
});

module.exports = mongoose.model("User", userSchema);
