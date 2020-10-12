require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");

const meRouter = require("./routes/me");
const pizzasRouter = require("./routes/pizzas");
const drinksRouter = require("./routes/drinks");
const pizzaData = require("./db/pizza");
const authRouter = require("./routes/auth");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true
//   })
// );

// app.use("/users", usersRouter);
app.use("/pizzas", pizzasRouter);
app.use("/auth", authRouter);
app.use("/me", meRouter);
app.get("/pizzas/:id", (req, res) => {
  let id = req.params.id;
  let pizzaById = pizzaData.getpizzaById(id);
  res.json(pizzaById);
});
app.use("/drinks", drinksRouter);

async function start() {
  try {
    await mongoose.connect(process.env.MONGOAPIKEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("work");
  } catch (e) {
    console.log("Server Error");
  }
}

start();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
