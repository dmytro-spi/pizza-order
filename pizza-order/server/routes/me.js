const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.middleware');

const router = express.Router();



router.post('/', 
// auth, 
async (req, res, next) => {
  try {
    
    const token = req.body.token;
    // console.log(document.cookie)
    // const s = JSON.stringify(token);
    const decoded =  jwt.verify(token , process.env.JWT_SECRET);
    
    const userId = decoded.userId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(500).json({ message: "Ошибка, пользователь не найден" });
    }

    const {id, email, cart} = user;
    const userData = {userId:id, login:email, cart, message:"Вы авторизированы"}
    res.json(userData)
  } catch (e) {
    res.status(500).json({ message: "Ошибка, капец" });
  }
  
});

module.exports = router;
