const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

require("dotenv").config();

// routes
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api/users");

// connecting app to mongodb
mongoose.connect(
  "mongodb://localhost/expertrons",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    console.log("Connected to mongoDB", err ? false : true);
  }
);

// initializing express in App
const app = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// session
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

// routes
app.use("/", indexRouter);
app.use("/api/v1/users", apiRouter);

// error handler

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, err });
});

module.exports = app;
