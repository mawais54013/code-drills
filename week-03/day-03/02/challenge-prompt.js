$(document).submit(function () {
    // prevent default
    event.preventDefault();

    var dogSearch;
    // grab the value of the users search and store it in dogSearch
        dogSearch = document.getElementById("dogSearch").value;
        console.log(dogSearch);


    // We are defining the query URL here. By concatinating strings together, we're able to change our query based upon user input
    var queryURL = "https://dog.ceo/api/breed/" + dogSearch  + "/images/random";
    console.log(queryURL);
    // this forloop iterates 10 times
    for (var i = 0; i < 10; i++) {
        // this is how we are using an api call in the front end
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log the response 
            console.log(response);
            
            // append the image within the response to the page 
            $(response).append("<img src =" + response.message + "/>");
        });
    }
})