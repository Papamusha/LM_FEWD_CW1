const nedb = require("nedb");

class Menu {
  constructor(menuFilePath) {
    console.log(menuFilePath);
    if (menuFilePath) {
      this.menu = new nedb(menuFilePath);
      console.log("menu connected to " + menuFilePath);
      menuFilePath;
    } else {
      this.menu = new nedb();
    }
  }
  init() {
    this.menu.insert({
      id: "1",
      name: "carrot rootoot cake",
      ingredients: "egg, sunflower oil, carrots, raisins, walnut, flour, mixed spice, bicarbonate of soda, salt, brown sugar.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "2.50",
      category: "cake",
      available: "no",
    });
    this.menu.insert({
      id: "2",
      name: "sandwiches",
      ingredients: "white bread",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "2.50",
      category: "snack",
      available: "no",
    });
    this.menu.insert({
      id: "3",
      name: "salad",
      ingredients: "rocket, spinach, carrot, onion, cucumber, dressing. options vary depending on availability.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "3.50",
      category: "side",
      available: "yes",
    });
    this.menu.insert({
      id: "4",
      name: "hot chocolate",
      ingredients: "milk, hot chocolate mix.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "2.00",
      category: "drinks",
      available: "yes",
    });
    this.menu.insert({
      id: "5",
      name: "chocolate cake",
      ingredients: "eggs, sunflower oil, vanilla extract, water, flour, caster sugar, cocoa powder, baking powder, bicarbonate of soda, milk.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "2.50",
      category: "cake",
      available: "yes",
    });
    this.menu.insert({
      id: "6",
      name: "soup",
      ingredients: "water, oil, other ingredients dependent on availability.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "2.00",
      category: "snack",
      available: "yes",
    });
    this.menu.insert({
      id: "7",
      name: "pizza",
      ingredients: "bread, tomato puree, cheese, milk.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "5.00",
      category: "main",
      available: "yes",
    });
    this.menu.insert({
      id: "8",
      name: "baked potato",
      ingredients: "potato, butter, salt, pepper.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "4.50",
      category: "main",
      available: "yes",
    });
    this.menu.insert({
      id: "9",
      name: "apple pie",
      ingredients: "caster sugar, cinnamon, cornflour, apples, flour, lemon, butter, egg.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "3.50",
      category: "pudding",
      available: "yes",
    });
    this.menu.insert({
      id: "10",
      name: "cheesecake",
      ingredients: "biscuit crust, cheese, caster sugar, double cream, butter.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "3.00",
      category: "pudding",
      available: "yes",
    });
    this.menu.insert({
      id: "11",
      name: "fish and chips",

      ingredients: "fish, potato, salt, paper, lemon zest, beer batter",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "6.50",
      category: "main",
      available: "yes",
    });
    this.menu.insert({
      id: "12",
      name: "lasagne",
      ingredients: "olive oil, beef mince, prosciutto, tomato puree, beef stock, nutmeg, flour, egg, salt, cheese.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "6.50",
      category: "main",
      available: "yes",
    });
    this.menu.insert({
      id: "13",
      name: "ice cream",
      ingredients: "eggs, caster sugar, cornflour, double cream, milk.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "2.50",
      category: "pudding",
      available: "yes",
    });
    this.menu.insert({
      id: "14",
      name: "coffee",
      ingredients: "coffee, water, milk (optional).",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "1.50",
      category: "drinks",
      available: "yes",
    });
    this.menu.insert({
      id: "15",
      name: "tea",

      ingredients: "tea, water, milk (optional).",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "1",
      category: "drinks",
      available: "yes",
    });
    this.menu.insert({
      id: "16",
      name: "pasta",
      ingredients: "flour, egg, salt, tomato puree, garlic sauce.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "5.50",
      category: "main",
      available: "yes",
    });
    this.menu.insert({
      id: "17",
      name: "chips",
      ingredients: "potato, salt, pepper.",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "3",
      category: "side",
      available: "yes",
    });
    this.menu.insert({
      id: "18",
      name: "sparkling mineral water",
      ingredients: "water. what else did you think i was going to put in it?",
      recipeStep1: "Step 1: Cast voodoo magic on the ingredients, this will incite the ancient sun god Ra to gift you with his energy, burning your ingredients. Your recipe has now been ruined your ingredients.",
      recipeStep2: "Step 2: You will now die via the Lorem ipsum placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "1.5",
      category: "drinks",
      available: "yes",
    });
  }

  remove() {
    this.menu.remove({ id:id }, callback);
  }
  
  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.menu.find({}, function (err, entries) {
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
module.exports = Menu;
