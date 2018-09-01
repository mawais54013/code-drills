var input = parseFloat(process.argv[2]);

function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
    for(var i = 0; i<n; i++)
    {
        console.log(i);
    }

    if(input%3 === 0)
    {
        console.log("fizz");
    }
    if(input%5 === 0)
    {
        console.log("buzz");
    }
    if(input%3 === 0 && input%5 ===0)
    {
        console.log("fizzbuzz");
    }
// ==========================================================
  
}

fizzBuzz(
    input/*Pass an argument from the command line*/);

