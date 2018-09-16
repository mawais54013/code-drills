var express = require("express");
var app = express();
var PORT = 3000;

var input = "chicken";
function evenLetters(str) {
    // Define a string that contains all the letters of the alphabet
    // We will be using this later to determine the output
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var response;
    
    // Initialize an empty string for the output
    
    
    // Initialize an empty object that keeps track of the characters we've seen so far.
    // Characters we don't want displayed will have a value of true within this object
  
    // console.log(str);
    // Iterate through the argument string
    for (var i = 0; i < str.length; i++) 
    {
        // console.log(str[i]);
    }
    for(var x = 0; x<letters.length; x++)
      {
        if(str[i] == letters[x])
        {
            letters.replace(letters[x],"/");
            console.log(letters);
            response = letters;
        }
      }
        console.log(response);
}

app.listen(PORT, function()
{
  console.log("App listening on PORT " + PORT)
  evenLetters(input);
});