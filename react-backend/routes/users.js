const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");

  res.json([
    {
      id: 1,
      username: "Pizza1",
    },
    {
      id: 2,
      username: "Pizza2",
    },
  ]);
});

module.exports = router;
