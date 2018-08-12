$(document).submit(function () {
    // dont forget to prevent default
    event.preventDefault();
    // grab the show information from the form on the page
    var searchInformation = $("#showSearch");


    // console.log the input
    console.log(searchInformation);

    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=" + searchInformation + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log the response 
        console.log(response);
        // create a forloop and append the first 3 responses to the page
            for(var i = 0; i < response.length; i++)
            {
            // console.log the image and then append it to the page.            
            
                var disimage = $("<img>");
                disimage.attr=("src", response[0].show.image);
                $("#shows").prepend(disimage);
                console.log(disimage)
            // console.log the name of the show and append it to the page


            // console.log the genres of the show and append it to the page


            // console.log the summary of the show and append it to the page
            }

    });

})
