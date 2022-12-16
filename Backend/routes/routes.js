const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/", controller.listMenu);
router.get("/food", controller.listMenu);
router.get("/ingredients", controller.listIngredients)
router.post('/addOrder', controller.addOrder);
router.post('/addshopping', controller.addShopping);
router.get("/menunew", controller.newMenu);
router.get("/shoppingnew", controller.newIngredients);

//new creates dupes in menu.db and ingredients.db, unsure why, delete one of the dupes when you run /new.

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

module.exports = router;