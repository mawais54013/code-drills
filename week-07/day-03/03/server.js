// 1. Configure Server
var express = require("express");
//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple"
var p = "cat";
var app = express();
var PORT = 3050;

function pigLatin(str) {
  // 2. ================= YOUR WORK HERE ==================
  var normalArr = str.split(" "); 
  var pigArr = []; 
  newWord = ""; 
  // for (var word in normalArr)
  for(var i = 0; i<normalArr.length;i++)
  {
  	newWord = normalArr[i].substring(1) + normalArr[i].substring(0, 1) + "ea"; 
  	pigArr.push(newWord); 
  }
  console.log(pigArr.join(seperator = " ")); 
}

  // ===================================================



// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  
// app.get("/")





  // ===================================================


// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function()
{
  console.log("App listening on PORT " + PORT)
  pigLatin(input);
});