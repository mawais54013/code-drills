// Day 01
// Activity 01
var firstName = $("#inputName");
var lastName = $("#inputLName");
var occup = $("#inputOccu");
var city = $("#inputCity");
var state = $("#inputState");
var inputN = [];
var inputL = [];
var occupa = [];
var place = [];
// wait for the DOM to finish loading (document.ready)
$(document).ready(function(){

{

  // Create a click listener for the submit button
    $("#submit1").on("click", function()
  { 
    
    // stop the default behavior of the submit button
    
    event.preventDefault();

    // pull the values off the user input form and store them in seperate variables
      var firstName = $("#inputName").val();
      $("#inputName").val(firstName);
      inputN.push(firstName);
      $("#text1").append(inputN);
      inputN = [];
      console.log(inputN);
      firstName = $("#inputName").val("");
    // clear the form after we're done storing the values
      
      var lastName = $("#inputLName").val();
      $("#inputLName").val(lastName);
      inputL.push(lastName);
      $("#text1").append(inputL);
      inputL = [];
      lastName = $("#inputLName").val("");

      var occup = $("#inputOccu").val();
      $("#inputOccu").val(occup);
      occupa.push(occup);
      $("#text2").append(occupa);
      occupa = [];
      occup = $("#inputOccu").val("");

      var city = $("#inputCity").val();
      var state = $("#inputState").val();
      $("#inputCity").val(city);
      $("#inputState").val(state);
      place.push(city);
      place.push(state);
      $("#text3").append(place);
      place = [];
      city = $("#inputCity").val("");
      state = $("#inputState").val("");
    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the div
 

    // empty the display area and display the divs we just created in the display area
  })
}
})
