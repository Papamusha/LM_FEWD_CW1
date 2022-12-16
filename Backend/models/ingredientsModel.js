const nedb = require("nedb");

class Ingredient {
  constructor(ingredientFilePath) {
    console.log(ingredientFilePath);
    if (ingredientFilePath) {
      this.ingredient = new nedb(ingredientFilePath);
      console.log("ingredient connected to " + ingredientFilePath);
      ingredientFilePath;
    } else {
      this.ingredient = new nedb();
    }
  }
  init() {
    this.ingredient.insert({
      id: "1",
      name: "egg",
    });
    this.ingredient.insert({
        id: "2",
        name: "sunflower oil",
      });
    this.ingredient.insert({
        id: "3",
        name: "fish",
      });
    this.ingredient.insert({
        id: "4",
        name: "meat",
      });
    this.ingredient.insert({
        id: "5",
        name: "potato",
      });
    this.ingredient.insert({
        id: "6",
        name: "tomato puree",
      });
      this.ingredient.insert({
        id: "7",
        name: "cheese",
      });
      this.ingredient.insert({
        id: "8",
        name: "milk",
      });
      this.ingredient.insert({
        id: "9",
        name: "white bread",
      });
      this.ingredient.insert({
        id: "10",
        name: "butter",
      });
      this.ingredient.insert({
        id: "11",
        name: "salt",
      });
      this.ingredient.insert({
        id: "12",
        name: "pepper",
      });
      this.ingredient.insert({
        id: "13",
        name: "tea",
      });
      this.ingredient.insert({
        id: "14",
        name: "water",
      });
      this.ingredient.insert({
        id: "15",
        name: "rocket",
      });
      this.ingredient.insert({
        id: "16",
        name: "spinach",
      });
      this.ingredient.insert({
        id: "17",
        name: "carrot",
      });
      this.ingredient.insert({
        id: "18",
        name: "onion",
      });
      this.ingredient.insert({
        id: "19",
        name: "cucumber",
      });
      this.ingredient.insert({
        id: "20",
        name: "dressing",
      });
      this.ingredient.insert({
        id: "21",
        name: "coffee",
      });
      this.ingredient.insert({
        id: "22",
        name: "vanilla extract",
      });
      this.ingredient.insert({
        id: "23",
        name: "flour",
      });
      this.ingredient.insert({
        id: "24",
        name: "caster sugar",
      });
      this.ingredient.insert({
        id: "25",
        name: "cocoa powder",
      });
      this.ingredient.insert({
        id: "26",
        name: "baking powder",
      });
      this.ingredient.insert({
        id: "27",
        name: "bicarbonate of soda",
      });
      this.ingredient.insert({
        id: "28",
        name: "cinnamon",
      });
      this.ingredient.insert({
        id: "29",
        name: "cornflour",
      });
      this.ingredient.insert({
        id: "30",
        name: "apple",
      });
      this.ingredient.insert({
        id: "31",
        name: "lemon",
      });
      this.ingredient.insert({
        id: "32",
        name: "lemon zest",
      });
      this.ingredient.insert({
        id: "33",
        name: "beer batter",
      });
      this.ingredient.insert({
        id: "34",
        name: "hot chocolate mix",
      });
      this.ingredient.insert({
        id: "35",
        name: "double cream",
      });
      this.ingredient.insert({
        id: "36",
        name: "single cream",
      });
      this.ingredient.insert({
        id: "37",
        name: "biscuit crust",
      });
      this.ingredient.insert({
        id: "38",
        name: "garlic sauce",
      });
      this.ingredient.insert({
        id: "39",
        name: "garlic",
      });
      this.ingredient.insert({
        id: "40",
        name: "olive oil",
      });
      this.ingredient.insert({
        id: "41",
        name: "beef mince",
      });
      this.ingredient.insert({
        id: "42",
        name: "prosciutto",
      });
      this.ingredient.insert({
        id: "43",
        name: "beef stock",
      });
      this.ingredient.insert({
        id: "44",
        name: "nutmeg",
      });
      this.ingredient.insert({
        id: "45",
        name: "raisins",
      });
      this.ingredient.insert({
        id: "46",
        name: "walnut",
      });
      this.ingredient.insert({
        id: "47",
        name: "mixed spice",
      });
      this.ingredient.insert({
        id: "48",
        name: "brown sugar",
      });
  }

  remove() {
    this.ingredient.remove({ id:id }, callback);
  }
  
  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.ingredient.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }
}
module.exports = Ingredient;
