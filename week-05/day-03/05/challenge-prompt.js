


/////////////////////////////5.1///////////////////////////////////////////

// console log "Hello World"

// ---------- code starts here ----------


console.log("Hello world");


// ---------- code ends here ---------- 

/////////////////////////////5.2///////////////////////////////////////////

// next console log the command line arguments when this file is run in node

// ---------- code starts here ---------- 
var com1 = process.argv[2];
console.log(com1);






// ---------- code ends here ---------- 

/////////////////////////////5.3///////////////////////////////////////////

// Console log the first and second command line argument that the user gives this file
// if there is no input it should come back undefined

// ---------- code starts here ---------- 

var com2 = process.argv[3];
console.log(com1);
console.log(com2);




// ---------- code ends here ---------- 

/////////////////////////////5.4///////////////////////////////////////////

// If the first command line argument given to this file is "minion" 
// and the second argument is "army", console log "I have found Gru"
// If the first command line argument given to this file is "minion" 
// and the second argument is not "army", console log "Still looking for Gru"
// For any other command line arguments, console log "Minion RAGE!"

// ---------- code starts here ---------- 

if(com1 === "minion" && com2 === "army")
{
    console.log("I have found Gru");
}
else if(com1 === "minion" && com2 != "army")
{
    console.log("Still looking for Gru");
}
else 
{
    console.log("Minion Rage");
}





// ---------- code ends here ---------- 
