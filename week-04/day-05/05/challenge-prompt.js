// Activity 5


// In this activity, we're creating a function that counts the
// number of consonants in a string


// -------------------------------------------------------
//                       Count Consonants
// -------------------------------------------------------
function countCons(str) {
  // -------------------- Your Code Here --------------------

var count = 0;
var str1 = str.toLowerCase();

var a = "a";
var e = "e";
var i = "i";
var o = "o";
var u = "u";
for(var i = 0; i<str1.length; i++)
{
  if((str1[i] == e) || (str1[i] == a) || (str1[i] == i) || (str1[i] == o) || (str1[i] == u))
  {
    console.log("match");
  }
  else 
  {
    count++;
  }
  if(str1[i] === " ")
  {
    count--;
  }
}
return count;




  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `countCons` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(countCons(num));

  });
})