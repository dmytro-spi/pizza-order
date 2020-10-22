const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// fetch to /product/pizzas
router.get("/pizzas/:id?", async (req, res, next) =>  {
  try {
    const id = req.params.id;
    if (id) {
      const pizzaProfile = await Product.findById(id);
      const s = 56;
      return res.status(200).json(pizzaProfile);
    }
    const pizzas = await Product.find({product: "pizza"});
    res.json(pizzas);
  } catch (error) {
    res.status(401).json({ message: "Ошибка получения пиццы" });
  }
   
});

// fetch to /product/drinks
router.get("/drinks/:id?", async (req, res, next) =>  {
  try {
    if (req.params.id) {
      const drinkProfile = await Product.findById(id);
      return res.status(200).json(drinkProfile);
    }
    const drinks = await Product.find({product: "drink"});
    res.json(drinks);
  } catch (error) {
    console.log("Ошибка получения напитков");
    res.status(401).json({ message: "Ошибка получения напитков" });
  }
   
});

module.exports = router;