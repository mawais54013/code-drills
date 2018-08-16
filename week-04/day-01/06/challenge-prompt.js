// Activity 6

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  var text = "";
  // -------------------- Your Code Here --------------------
  $("#chat-submit").on("click", function(event) {
    event.preventDefault();
  
    text = $("#chat-input").val().trim();
    
    $("#chat-input").val(" ");
    database.ref().push({
      text: text,
    });
 
  });
  
  database.ref().on("child_added", function(childSnapshot)
  {
    var chatItem = childSnapshot.val().text;

    $("#chat-display").append(chatItem);
    $("#chat-display").append("<br>");
  });
 

  // --------------------- End Code Area --------------------

})

