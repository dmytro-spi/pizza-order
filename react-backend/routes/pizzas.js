const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");

  res.json([
    {id: 1, pizzaName: "Paperoni", img: "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg", price: 120, composition: ["томатный соус", "сыр Моцарелла", "базилик"]},
    {id: 2, pizzaName: "Margarita", img: "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg", price: 120, composition: ["томатный соус", "сыр Моцарелла", "базилик"]},
    {id: 3, pizzaName: "Diablo", img: "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg", price: 120, composition: ["томатный соус", "сыр Моцарелла", "базилик"]}
]);
});

module.exports = router;
