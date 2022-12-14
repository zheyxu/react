const cors = require("cors");
const { router } = require("../routers/todo.router");
const express = require("express");

exports.setApp = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(router);
};
