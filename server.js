const express = require("express");
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req, res){
var n1 = Number(req.body.num1);
var n2 = Number(req.body.num2);

var total = n1 + n2 ;
res.send("the sumation of "+n1+" and "+n2+ " is "+total);
});
app.get("/Bmicalculator", function(req, res){
  res.sendFile(__dirname+"/Bmicalculator.html");
});
app.post("/Bmicalculator", function(req, res){
var n1 = parseFloat(req.body.height);
var n2 = parseFloat(req.body.weight);

var totalBMI = Math.floor(n2 / (n1 * n1));
res.send("the BMI is"+ totalBMI);
});
app.get("/contact", function(req, res){
  res.send("<h1>contact me at :lutfur.noman@gmail.com<h1/>");
});
app.listen(3000, function() {
  console.log("this is started");
});
