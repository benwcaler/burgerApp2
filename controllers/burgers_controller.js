var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (resp) {
      res.render("index", { burgers: resp })
    });
  });

  app.post("/api/burgers", function (req, res) {
    db.Burger.create({
      burger_name: req.body.name
    }).then(function (resp) {
      res.json(resp);
    });
  });

  app.put("/api/burgers", function (req, res) {
    console.log(req.body)
    db.Burger.update({
      devoured: req.body.devoured
    }, {
        where: {
          burger_name: req.body.name
        }
      }).then(function (resp) {
        res.status(200).end();
      });
  });

}