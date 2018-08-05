// declare a variable named ourArray and assign an empty array to it

var ourArray =[];
// we can `push` values into an array with the push method. Documentation can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// Let's push the number 1 into ourArray

ourArray.push(1);
// push the string "hello" into ourArray

ourArray.push("hello");
// push the boolean false into ourArray

ourArray.push(false);
// push the number 84 into ourArray

ourArray.push(84);
// push the string "world" into our Array

ourArray.push("world");
// console log ourArray


console.log(ourArray);
// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 1--------------------------");

// declare a variable named oneToTen and assign it an array containing the numbers from 1 to 10

var oneToTen = [1,2,3,4,5,6,7,8,9,10];
// console log the element at index 4

console.log(oneToTen[4]);
// console log the element at index 7
console.log(oneToTen[7]);



// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 2--------------------------");

// We've declared this array for you
var numArray = [2, 65, 3, 7, 39, 22, 11, 94, 299, 9, 20, 21, 51, 37];
// iterate through numArray and create an individual console log for every number greater than 50
console.log(numArray[1]);
console.log(numArray[7]);
console.log(numArray[12]);


// iterate through numArray and create an alert that tells us 
// the index of all the occurances of the number 11

console.log(numArray.indexOf(11));

// iterate through numArray and console log the sum of all the numbers
var total = 0;
for(var i = 0; i<numArray.length; i++)
{
  total = total + numArray[i];
  
}
console.log(total);

// iterate through numArray and console log the sum of all the numbers greater than 50

var sum = 0;
for(var i = 0; i<numArray.length; i++)
{
  if(numArray[i] > 50)
  sum += numArray[i];
  
}
console.log(sum);

// iterate through numArray and console log the sum of all the even numbers
var even = 0;
for(var i = 0; i<numArray.length; i++)
{
  if(numArray[i]%2 == 0)
  {
    even += numArray[i];
  }
}
console.log(even);


// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 3--------------------------");

// We've declared this array for you
var fruits = [
  "Apple", "Orange", "Banana", "Pomelo", "Apple", "Kiwi", "Peach", "Banana", "Grape", "Tomato", 
  "Kiwi", "Apple", "Watermelon", "Lemon", "Pomelo", "Apple", "Banana", "Peach", "Apricot", "Grape"];
// iterate through fruits and console log the number of times "Apple" appears in the array

var times = 0;
var add = [];
for(var i = 0; i<fruits.length; i++)
{
  if(fruits[i] === "Apple")
  {
    times ++;
    add.push(fruits);
  }
}
console.log(times);

// iterate through fruits and console log the number of times "Peach" appears in the array
var time = 0;
for (var t = 0; t<fruits.length; t++)
{
  if(fruits[t] === "Peach")
  {
    time++;
  }
}
console.log(time);

// iterate through fruits and console log the number of fruits that start with "P" in the array
var sum = 0;
for( var r = 0; r<fruits.length; r++)
{
  if(fruits[r][0] === "P")
  {
    sum++;
  }
}
console.log(sum);


// create a new empty array named uniqueFruits
var uniqueFruits = [];

// iterate through fruits and populate uniqueFruits with only unique values from fruits
// you should a shorter array without repeated values

for(var i = 0; i<fruits.length; i++)
{
  if((fruits[i][0] === "T") || (fruits[i][0] === "L") || (fruits[i][0] === "W") || (fruits[i][0] === "O") || (fruits[i][2] === "r")) 
  {
    uniqueFruits.push(fruits[i]);
  }
}

// console log out your uniqueFruits array

console.log(uniqueFruits);

// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 4--------------------------");

// CHALLENGE (Optional!)
// In this challenge we're going to be working with nested arrays. 
// You can store any type of data within an array- even other arrays!
var twoDimArray = [
  [54, 6, 7, 46, 78],
  [43, 9, 6, 65, 65],
  [32, 1, 44, 1, 23],
  [55, 12, 2, 34, 2],
  [2, 12, 44, 2, 12]];
// another seperator for your convenience
console.log("     first array      ");
// iterate through the first array inside twoDimArray and console log all the numbers less than 25
var sums = [];

for(var i = 0; i < twoDimArray.length; i++)
{
  if(twoDimArray[0][i] < 25)
  { 
    console.log(twoDimArray)
    sums.push(twoDimArray[0][i]);
  
  }
}
console.log(sums);



// another seperator for your convenience
console.log("     second array      ");
// iterate through the second array inside twoDimArray and console log all the numbers less than 25
var sum1 = [];
for( var i = 0; i<twoDimArray.length; i++)
{
  if(twoDimArray[1][i] < 25)
  {
    sum1.push(twoDimArray[1][i]);
  }
}
console.log(sum1);


// another seperator for your convenience
console.log("     third array      ");
// iterate through the third array inside twoDimArray and console log all the numbers less than 25
var sum2 = [];
for(var i = 0; i<twoDimArray.length; i++)
{
  if(twoDimArray[2][i] < 25)
  {
    sum2.push(twoDimArray[2][i]);
  }
}
console.log(sum2);

// another seperator for your convenience
console.log("     fourth array      ");
// iterate through the fourth array inside twoDimArray and console log all the numbers less than 25
var sum3 = [];
for(var r = 0; r < twoDimArray.length; r++)
{
  if(twoDimArray[3][r] < 25)
  {
    sum3.push(twoDimArray[3][r]);
  }
}
console.log(sum3);


// another seperator for your convenience
console.log("     fifth array      ");
// iterate through the fifth array inside twoDimArray and console log all the numbers less than 25
var sum4 = [];
for(var r = 0; r < twoDimArray.length; r++)
{
  if(twoDimArray[4][r] < 25)
  {
    sum4.push(twoDimArray[4][r]);
  }
}
console.log(sum4);


// another seperator for your convenience
console.log("     odd numbers      ");
// iterate through twoDimArray and the arrays inside of it and console log all the odd numbers
var odd = [];
for(var i = 0; i < twoDimArray.length; i++)
{
  if((((twoDimArray[0][i] % 2) != 0)))
  {
    odd.push(twoDimArray[0][i]);

  }
  else if((((twoDimArray[1][i] % 2) != 0)))
  {
    odd.push(twoDimArray[1][i]);

  }
  else if((((twoDimArray[2][i] % 2) != 0)))
  {
    odd.push(twoDimArray[2][i]);

  }
  else if((((twoDimArray[3][i] % 2) != 0)))
  {
    odd.push(twoDimArray[3][i]);

  }
  else if((((twoDimArray[4][i] % 2) != 0)))
  {
    odd.push(twoDimArray[4][i]);

  }
}
console.log(odd);

// another seperator for your convenience
console.log("     sum of multiples of 3      ");
var three = [];
var threeSum = 0;
for(var i = 0; i < twoDimArray.length; i++)
{
  if((((twoDimArray[0][i] % 3) == 0)))
  {
    three.push(twoDimArray[0][i]);
    threeSum = threeSum + twoDimArray[0][i];
  }
  if((((twoDimArray[1][i] % 3) == 0)))
  {
    three.push(twoDimArray[1][i]);
    threeSum = threeSum + twoDimArray[0][i];
  }
  if((((twoDimArray[2][i] % 3) == 0)))
  {
    three.push(twoDimArray[2][i]);
    threeSum = threeSum + twoDimArray[0][i];
  }
  if((((twoDimArray[3][i] % 3) == 0)))
  {
    three.push(twoDimArray[3][i]);
    threeSum = threeSum + twoDimArray[0][i];
  }
  if((((twoDimArray[4][i] % 3) == 0)))
  {
    three.push(twoDimArray[4][i]);
    threeSum = threeSum + twoDimArray[0][i];
  }
}
console.log(three);
console.log(threeSum);
// iterate through twoDimArray and the arrays inside of it and 
// console log the sum of all the numbers that are a multiple of 3



