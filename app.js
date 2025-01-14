const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users");
const pmResumesRouter = require("./routes/pm");
const sweRouter = require("./routes/swe");

const app = express();

const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "frontend/build")));

// app.use('/', indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/pm", pmResumesRouter);
app.use("/api/swe", sweRouter);

module.exports = app;
