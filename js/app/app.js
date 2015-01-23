// Generated by CoffeeScript 1.8.0
(function() {
  var app, cool, express, util, _;

  util = require("./utils");

  express = require("express");

  app = express();

  cool = require("cool-ascii-faces");

  _ = require("underscore");

  app.get("/", function(request, response) {
    response.send(cool());
  });

  app.get("/coffee", function(request, response) {
    var a, array, nested;
    array = [];
    a = null;
    nested = [
      {
        name: 1
      }, [
        {
          age: 23
        }, [
          {
            area: "america"
          }
        ]
      ]
    ];
    _.each(nested, function(entry) {
      array.push(entry);
      a = util.getRevenue(5);
    });
    response.send("welcome to coffee script/ js deploy on heroku" + a);
  });

  app.set("port", process.env.PORT || 5001);

  app.use(express["static"](__dirname + "/public"));

  app.listen(app.get("port"), function() {
    return console.log("Node app is running at :" + app.get("port"));
  });

  return;

}).call(this);

//# sourceMappingURL=app.js.map
