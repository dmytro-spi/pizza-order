const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const generateToken = require("../cookies/generateToken");
const Product = require("../models/Product");


// /auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res
        .status(400)
        .json({ message: "Такой пользователь уже существует", isRegistrate: false });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "Регистрация успешна", isRegistrate: true });
  } catch (e) {
    
    res.status(500).json({ message: "Ошибка регистрации", isRegistrate: false });
  }
});

// /auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }
      
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Неверный пароль" });
    }
    // generateToken(res, email);
    const expires = rememberMe ? "14d" : "12h";

    const token = jwt.sign(
      {userId: user.id},
      process.env.JWT_SECRET,
      {expiresIn: expires}
    )  

    res.json({token, 
      userId: user.id, 
      login: user.email, 
      cart: user.cart,
      message:"Успех!"})


  } catch (e) {
    res.status(500).json({ message: "Ошибка, капец!" });
  }
});

module.exports = router;
