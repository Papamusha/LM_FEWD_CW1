const nedb = require("nedb");

class Shopping {
  constructor(shoppingFilePath) {
    console.log(shoppingFilePath);
    if (shoppingFilePath) {
      this.shopping = new nedb(shoppingFilePath);
      console.log("shopping connected to " + shoppingFilePath);
      shoppingFilePath;
    } else {
      this.shopping = new nedb();
    }
  }

  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.shopping.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }

  addEntry(shopping, id) {
    var entry = {
        shopping: shopping,
        id: id,
    };
    return new Promise((resolve, reject) => {
      this.shopping.insert(entry, function (err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }
}
module.exports = Shopping;