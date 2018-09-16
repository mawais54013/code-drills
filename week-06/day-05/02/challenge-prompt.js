// Merging Sorted Arrays



// The `mergeSorted` function takes in two sorted arrays and returns a new 
// sorted array containing all the elements of the two argument arrays
function mergeSorted(arr1, arr2) {
  // -------------------- Your Code Here --------------------

  var arr = arr1.concat(arr2); 
  arr.sort(function(a, b){return a - b})
 return arr;






  // --------------------- End Code Area --------------------
}

// Export the `mergedSorted` 
module.exports = mergeSorted;
