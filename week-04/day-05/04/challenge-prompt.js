// Activity 4


// In this activity, we're creating a function that generates
// the first few elements of the fibonacci sequence

// -------------------------------------------------------
//                 Generate Fibonacci Sequence
// -------------------------------------------------------
function fibonacci(num) {
  // -------------------- Your Code Here --------------------
var arr = [];
  var a = 0, b = 1, f = 1;
  arr.push(a);
  arr.push(b);
  for(var i = 3; i <= num; i++) {
      f = a + b;
      a = b;
      b = f;
      arr.push(f);
  }
return arr;

 

  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `fibonacci` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(fibonacci(num));

  });
})