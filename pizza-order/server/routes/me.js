const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.middleware');

const router = express.Router();



router.get('/', async (req, res) => {
  try {
    
    const user = await User.findOne({email: req.user.email});
    if (!user) {
      res.status(500).json({ message: "Ошибка, пользователь не найден" });
    }

    const {id, email, cart} = user;
    const userData = {userId:id, login: email, cart, message:"Вы авторизированы"}
    res.json(userData)
  } catch (e) {
    res.status(500).json({ message: "Ошибка, капец" });
  }
  
});

module.exports = router;
