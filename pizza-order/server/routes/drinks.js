const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");

  res.json([
    { id: 1, drinkName: "CocaCola", img: "https://img3.zakaz.ua/upload.version_1.0.5dc6fc3e19afe3b7fd26255af0e26d88.350x350.jpeg", price: 20, volume: "0,5" },
    { id: 2, drinkName: "Pepsi", img: "https://img3.zakaz.ua/upload.version_1.0.5dc6fc3e19afe3b7fd26255af0e26d88.350x350.jpeg", price: 20, volume: "0,5" },
    { id: 3, drinkName: "Sprite", img: "https://img3.zakaz.ua/upload.version_1.0.5dc6fc3e19afe3b7fd26255af0e26d88.350x350.jpeg", price: 20, volume: "0,5" },
  ]);
});

module.exports = router;
