// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements


function bubbleSortTwo(arr) {
    // ================= code goes here ===========================
    var toSort = arr.length;
    do{
        var swapBoolean = false;
        for(var i=1; i < toSort; i++)
        {
            if(arr[i] > arr[i-1])
            {
                var valSwap = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = valSwap;
                swapBoolean = true;
            }
        }
        toSort--;
    } while(swapBoolean);
    return arr;
    
    // ============================================================
}


var age = [34, 23, 3, 76, 20, 84, 18, 9];
// var newAge = bubbleSortTwo(age);
// console.log(newAge)

document.querySelector("#start").innerText = age.join(", ");

// Get a reference to the go button in the DOM, add a click event listener to it
var goBtn = document.querySelector("#go");

goBtn.addEventListener("click", function() {
  // Get the sorted array, insert its contents into the #result div
  var sortedArr = bubbleSortTwo(age);
  document.querySelector("#result").innerText = sortedArr.join(", ");
});