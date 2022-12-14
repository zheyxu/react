const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../config/.env"),
});
const mongoose = require("mongoose");
mongoose
  .connect(process.env.LOCAL_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

// Models
const Todo = require("../models/Todo");

module.exports = { Todo };
