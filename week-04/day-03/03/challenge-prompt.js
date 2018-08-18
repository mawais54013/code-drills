console.log("////////////////////////////// QUESTION 3.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "averageNumbers".

  Given an array of numbers, "averageNumbers" returns their average. 
  
  *Bonus If given an empty array, it should return 0*

*/

function averageNumbers(nums) {
  // your code here

  var add = 0;

  for(var i = 0; i<nums.length; i++)
  {
    add = nums[i] + add;
    var div  = add/nums[i];
  }
  return div;

  // code ends here
}

var input = [1, 2, 3, 4, 5];

var output = averageNumbers(input);
console.log(output); // --> 3 

console.log("////////////////////////////// QUESTION 3.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "keysCounter".

Given an object, "keysCounter" returns how many properties the given object has.

*/
function keysCounter(obj) {
  // your code here


  var x = Object.keys(obj).length;
   return x;

  // code ends here
}

var obj = {
  a: 1,
  b: 2,
  c: 3
};

var output = keysCounter(obj);
console.log(output); // ---> 3


