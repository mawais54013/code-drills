// Activity 2


// In this activity, we're creating a function that finds the
// factorial of a number the user gives.

// -------------------------------------------------------
//                   Factorial Function
// -------------------------------------------------------
function factorial(num) {
  // -------------------- Your Code Here --------------------
  if(num < 0 )
  {
    return -1;
  }
  else if(num == 0)
  {
    return 1;
  }
  else 
  {
    return( num * factorial(num - 1))
  }


  
  
  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `factorial` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(factorial(num));

  });
})