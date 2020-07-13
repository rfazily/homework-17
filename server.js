require('dotenv').config()

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGOLAB_URI="mongodb://heroku_54q1wghn:4vtl6m8hfphm25v9714q8eb780@ds253368.mlab.com:53368/heroku_54q1wghn"
, { useNewUrlParser: true });

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;