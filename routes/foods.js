const express = require("express");
const controllers = require("../controllers/foods.js");

const router = express.Router();

// foods index page (GET)
router.get("/", controllers.getPantryPage);
// render food form page (GET)
router.get("/new", controllers.renderNewFoodForm);
// create food post request (POST)
router.post("/", controllers.createFood);
// show food page (GET)
// edit food form page (GET)
router.get("/:foodId/edit", controllers.renderEditFoodForm);
// update food PUT request
router.put("/:foodId", controllers.updateFood);
// delete food DELETE request
router.delete("/:foodId", controllers.deleteFood);
module.exports = router;
