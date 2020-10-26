const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

export default router => {
  // /auth/register
  router.post("/register", async (req, res) => {
    try {
      const { email, password, rememberMe } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(406)
          .json({ message: "User exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.create({ email, password: hashedPassword });

      await generateToken(res, email, rememberMe);
      res.send();
    } catch (e) {
      res.status(500).json({ message: "Registration error", error: e });
    }
  });

  // /auth/login
  router.post("/login", async (req, res) => {
    try {
      const { email, password, rememberMe } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        // мы никогда не говорим что именно не верно: логин или пароль
        return res.status(400).json({ message: "Authorization error" });
      }

      await generateToken(res, email, rememberMe);
      res.send();
    } catch (err) {
      res.status(500).json({ message: "Internal error", err });
    }
  });
  // /auth/logout
  router.post("/logout", async (req, res) => {
    const s = 28;
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      await generateToken(res, email);
      res.json({ message: 'Logged out' });
    } catch (e) {
      res.status(500).json({ message: "Internal error" });
    }
  });

  return router;
};
