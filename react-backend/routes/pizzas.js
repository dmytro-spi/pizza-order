const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");
   
  res.json([
    {id: 1, pizzaName: "Paperoni", img: "https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-peperoni.jpg", price: 150, composition: ["Колбаса пепперони", "сыр моцарелла", "томатный соус"]},
    {id: 2, pizzaName: "Margarita", img: "https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-margarita.jpg", price: 120, composition: ["томатный соус", "сыр Моцарелла", "помидор"]},
    {id: 3, pizzaName: "4 Сыра", img: "https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-4-syra.jpg", price: 180, composition: ["Сыр моцарелла", "сыр дор блю", "сыр чеддер", "сыр пармезан", "сливочный соус"]},
    {id: 4, pizzaName: "Морская", img: "https://holyfood.com.ua/wp-content/uploads/2019/08/darimorya.jpg", price: 200, composition: ["соус томатный", "сыр «Моцарелла»", "кальмары", "осьминоги", "мидии", "креветки", "рапан", "помидор"]},
    {id: 5, pizzaName: "Деревенская", img: "https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-derevenskaya.jpg", price: 140, composition: ["Лук", "шампиньоны", "свинина", "бекон", "сыр моцарелла", "помидорный соус"]},
    {id: 6, pizzaName: "Гавайская", img: "https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-havaiskaya.jpg", price: 140, composition: ["Ветчина", "ананас консервированный", "сыр моцарелла", "помидорный соус"]}
]);
});

module.exports = router;
