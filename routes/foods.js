const express = require("express");
const controllers = require("../controllers/foods.js");

const router = express.Router();

// foods index page (GET)
router.get("/", controllers.getPantryPage);
// render food form page (GET)
router.get("/new", controllers.renderFoodForm);
// create food post request (POST)
router.post("/", controllers.createFood);
// show food page (GET)
// edit food form page (GET)
// update food PUT request
// delete food DELETE request
router.delete("/:foodId", controllers.deleteFood);
module.exports = router;
