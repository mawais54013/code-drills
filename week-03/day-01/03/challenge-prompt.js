// Day 01
// Acitivity 03
var audio = new Audio("green-arrow.mp3");

console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
    var Q1 = setTimeout(function()
{
    alert("Question 1");
},5000);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
var Q2 = setTimeout(function()
{
    alert("Question 2");
}, 1000*15);


// Remove the timer you just made for Question 2
clearTimeout(Q2);


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
var Q3 = setTimeout(function (){
    alert("Question 3 Part 1");
},1000*15);


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
var Q31 = setTimeout(function (){
    alert("Question 3 part 2");
}, 1000*16);


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(Q3);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
var Q5 = setTimeout(function ()
{
    audio.play("https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90");
    console.log("Question 5 Complete")
},1100)

