const express = require("express");
const router = express.Router();

const imgDir =
  "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg";

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");

  res.json([
    { id: 1, drinkName: "CocaCola", img: imgDir, price: 20, volume: "0,5" },
    { id: 2, drinkName: "Pepsi", img: imgDir, price: 20, volume: "0,5" },
    { id: 3, drinkName: "Sprite", img: imgDir, price: 20, volume: "0,5" },
  ]);
});

module.exports = router;
