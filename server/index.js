var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var apiRoutes = express.Router();

// middleware
apiRoutes.use(function(req, res, next) {
  console.log("Something's going on.");
  next();
});

apiRoutes.get("/", function(req, res) {
  res.json({ message: "API ready!!" });
});

apiRoutes.get("/hello", function(req, res) {
  res.send({ express: "Hello From Express" });
});

apiRoutes.post("/post-something", function(req, res, next) {});

apiRoutes.get("/get-something", function(req, res, next) {});

apiRoutes.put("/put-something/:id", function(req, res, next) {});

apiRoutes.delete("/delet-something/:id", function(req, res, next) {});

app.use("/api", apiRoutes);

app.listen(port);
console.log("API is listening on port:" + " " + port);
