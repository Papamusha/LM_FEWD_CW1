const menuDAO = require("../models/menuModel");
const menu = new menuDAO({ filename: "menu.db", autoload: true });
const orderDAO = require("../models/ordersModel");
const order = new orderDAO({ filename: "orders.db", autoload: true });
const ingredientDAO = require("../models/ingredientsModel");
const ingredients = new ingredientDAO({ filename: "ingredients.db", autoload: true });
const shoppingDAO = require("../models/shoppingListModel");
const shopping = new shoppingDAO({ filename: "shopping.db", autoload: true });

// for .newMenu and .newIngredients, wipe the database manually first, as remove doesn't work the way i want it to. needs fixed, low priority.

exports.newMenu = function (req, res) {
  menu.init();
  res.redirect("/");
};

exports.newIngredients = function (req, res) {
  ingredients.init();
  res.redirect("/");
};

exports.listMenu = function (req, res) {
  menu.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.listIngredients = function (req, res) {
  ingredients.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.listOrders = function (req, res) {
order.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.listShopping = function (req, res) {
  shopping.getAllEntries()
      .then((list) => {
        res.json(list);
        console.log(list);
      })
      .catch((err) => {
        console.log("promise rejected", err);
      });
  };

  exports.addOrder = function (req, res) {
    console.log("req body to add to database : ", req.body);
    order.addEntry(req.body).catch((err) => {
      console.log("promise rejected", err);
    });
    res.redirect("/");
  };

  exports.addShopping = function (req, res) {
  console.log("req body to add to database : ", req.body);
  shopping.addEntry(req.body).catch((err) => {
    console.log("promise rejected", err);
  });
  res.redirect("/");
};