// Generated by CoffeeScript 1.8.0
(function() {
  var app, cool, express, util, _;

  require("better-require");

  express = require("express");

  app = express();

  cool = require("cool-ascii-faces");

  _ = require("underscore");

  util = require("./utils");

  app.get("/", function(request, response) {
    response.send(cool());
  });

  app.get("/hello", function(request, response) {
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
    response.send("hellosdfsdfdsf" + a);
  });

  app.set("port", 5000);

  app.use(express["static"](__dirname + "/public"));

  app.listen(app.get("port"), function() {
    return console.log("Node app is running at localhost:" + app.get("port"));
  });

  return;

}).call(this);

//# sourceMappingURL=app.js.map
