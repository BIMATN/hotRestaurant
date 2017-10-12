var express = require("express");
var bp = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var tables = [];
var waitlist = [];

app.get("/api/tables", function(req,res){
	console.log("someone went to the JSON api Table page");
	res.json(tables);
});

app.get("/api/waitlist", function(req,res){
	console.log("someone went to the JSON api waitlist page");
	res.json(waitlist);
});

app.get("/", function(req,res){
	console.log("someone went to the home page");
	res.sendFile(path.join(__dirname, "hotRestaurant.html"));
});

app.get("/tables", function(req,res){
	console.log("someone went to the home page");
	res.sendFile(path.join(__dirname, "hotRestaurantViewTables.html"));
});

app.get("/reservations", function(req,res){
	console.log("someone went to the home page");
	res.sendFile(path.join(__dirname, "hotRestaurantMakeRes.html"));
});

// Create New Reservations - takes in JSON input
app.post("/newRes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  tables.push(newReservation);

  // We then display the JSON to the users
  res.json(newReservation);
  console.log(tables);
});