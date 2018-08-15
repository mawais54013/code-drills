// Activity 3


// This functions returns the number of differences between two strings of
// equal length
function hamming(str1, str2) {

  // -------------------- Your Code Here --------------------

    var num = 0;
    var string1 = str1.split("");
    var string2 = str2.split("");

    if(str1.length != str2.length)
    {
      console.log("Please pass two strings of equal length to this function");
    }
    else 
    {
    for(var i = 0; i<string1.length; i++)
    {
      
      for(var r = 0; r<string2.length; r++)
      {
        // if(!(str1[i].indexOf(str2[r])))
        if(!(string1[i].indexOf(string2[r])))
        {
          num++;
          // console.log("equal")
        }
    
      }      
    }
    console.log(num);
  }
  
  

  // --------------------- End Code Area --------------------

}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
console.log("The following should be 5 ");
console.log(hamming("chicken","charity"));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
console.log("The following should be 8");
console.log(hamming("48ndqw13","6543fedw"));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
console.log("The following should be \"Please pass two strings of equal length to this function\"");
console.log(hamming("dfvs1","dcdw"));