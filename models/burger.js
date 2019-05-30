// * Inside your `burger` directory, create a folder named `models`.

//   * In `models`, make a `burger.js` file.

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.


const orm = require("../config/orm")


const burgers = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.create("burgers", [
        "burgers_name", "devoured"
      ], [
        name, false
      ], cb);
    },
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.update("burgers", {
        devoured: true
      }, condition, cb);
    }
  };
  

module.exports = burgers