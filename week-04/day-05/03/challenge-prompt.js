// Activity 3


// In this activity, we're creating a function that finds the
// factors of a number the user gives.

// -------------------------------------------------------
//                   Find Factor Function
// -------------------------------------------------------
function factor(num) {
  // -------------------- Your Code Here --------------------

  var
  n_factors = [],
  i;
 
    for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
      if (num % i === 0)
      {
      n_factors.push(i);
      if (num / i !== i)
        n_factors.push(num / i);
      }
    n_factors.sort(function(a, b){return a - b;});  // numeric sort
    return n_factors;

  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `factorial` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(factor(num));

  });
})