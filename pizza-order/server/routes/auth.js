const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../cookies/generateToken");
const authMiddleware = require("../middleware/auth.middleware");

// /auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res
        .status(400)
        .json({ message: "Такой пользователь уже существует", 
        // isRegistrate: false 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });

    await user.save();
    // res.status(201).json({ message: "Регистрация успешна", isRegistrate: true });
    await generateToken(res, email, rememberMe);

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
    await generateToken(res, email, rememberMe);
    res.send('Set Cookie');
    
  } catch (e) {
    res.status(500).json({ message: "Ошибка, капец!" });
  }
});
// /auth/logout
router.post("/logout", async (req, res) => {
  const s = 28;
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }
      
    await generateToken(res, email);
    res.send('Set Cookie');
    
  } catch (e) {
    res.status(500).json({ message: "Ошибка, капец!" });
  }
});

module.exports = router;
