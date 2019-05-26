const express = require("express");
const {authenticate}= require("../middleware/authenticate");

const UserController = require("../controllers/userController");

//Routes for User
const UserRoutes = function(app) {
  const router = express.Router();
  router.route("/register").post(UserController.register);
  router.route("/login").post(UserController.login);
  router.route("/logout").delete(UserController.logout);
  return router;
};
module.exports = UserRoutes;
