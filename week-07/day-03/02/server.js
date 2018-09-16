// 1. Configure Server
var express = require("express");
//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"];

var app = express();
var PORT = 3050;

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  
  var check;

  for(var i = 0; i<3; i++)
  {
    check = arr[i].slice(0,2);
  }
  console.log(check);
  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  






  // ===================================================


// Listener
// ===========================================================

app.listen(PORT, function()
{
  console.log("App listening on PORT " + PORT)
  getNumVisits(input);
});