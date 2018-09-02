// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
var Card = function(number)
{
    this.number = number;
    // console.log(number);
    this.print = function()
    {
        console.log(number);
    }
}
// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------

var Deck = function(input1)
{
    this.input1 = input1;
    this.draw = function()
    {
        console.log(input1);
    }
    this.print = function()
    {
        console.log(input1);
    }
}

// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------

module.exports.Card = Card;
module.exports.Deck = Deck;


// --------------------- End Code Area --------------------
