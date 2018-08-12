// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================
 var sorted = false;
    console.log(arr);
 while (!sorted) {
   sorted = true;

   for (var i = 0; i < arr.length; i++) {

     if (arr[i] < arr[i + 1]) {
       sorted = false;
       var temp = arr[i];
       arr[i] = arr[i + 1];
       arr[i + 1] = temp;
     }
   }
 }

 return arr;

// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
// testArray = bubbleSort(testArray);
console.log(testArray);

document.querySelector("#start").innerText = testArray.join(", ");

// Get a reference to the go button in the DOM, add a click event listener to it
var goBtn = document.querySelector("#go");

goBtn.addEventListener("click", function() {
  // Get the sorted array, insert its contents into the #result div
  var sortedArr = bubbleSort(testArray);
  document.querySelector("#result").innerText = sortedArr.join(", ");
});