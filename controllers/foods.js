const User = require("../models/user.js");

const getPantryPage = async (req, res) => {
  const userId = req.session.user._id;
  const currentUser = await User.findById(userId);
  const pantry = currentUser.pantry;
  res.render("foods/index.ejs", {
    pantry,
  });
  //   res.send(`User pantry page for ${req.session.user._id}`);
};

const renderFoodForm = (req, res) => {
  res.render("foods/new.ejs");
};

const createFood = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  currentUser.pantry.push(req.body);
  currentUser.save();
  res.redirect("/foods");
};

const deleteFood = async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  const pantry = currentUser.pantry;
  pantry.id(req.params.foodId).deleteOne();
  await currentUser.save();
  res.redirect("/foods");
};

module.exports = { getPantryPage, renderFoodForm, createFood, deleteFood };
