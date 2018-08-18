console.log("////////////////////////////// QUESTION 4.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "evenWordLengthOnly".

Given an array of strings, "evenWordLengthOnly" returns an array containing only the elements of the given array whose length is an even number.

*/
function evenWordLengthOnly(words) {
  // your code here
  var arr = [];
  var long = 4;
  var word = null;
  for(var i = 0; i<words.length; i++)
  {
    if(long >= words[i].length)
    {
      long = words[i].length;
      word = words[i];
      arr.push(word);
    }
  }
  return arr;





  // code ends here
}
var output = evenWordLengthOnly(['word', 'words', 'food', 'foods']);
console.log(output); // --> ['word', 'food']

console.log("////////////////////////////// QUESTION 4.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "countWords".

  Given a string, "countWords" returns an object where each key is a word in that string and the value of the key is how many times that word appears in the string. 

Notes:
* If given an empty string, it should return an empty object.
*/
function countWords(str) {
  // your code here

  var arr = str.split(" ");
        
  arr=arr.sort();
  console.log(arr);
  var count=0;
  var current=null;
  // var num = 0;
   for(var i = 0; i<arr.length; i++){
  // console.log(arr[i]!==current)
   if(arr[i]!==current){
    if (count >0) {
         document.write(current + ': ' + count + " ");
      }
      current = arr[i];
      count = 1;
   }else count ++;
  //  console.log(count)

  }
  document.write(current + ': ' + count + " ");

    // code ends here
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}