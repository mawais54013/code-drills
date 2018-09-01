// ======== You are given NOTHING to start with 😱 ========
var input = process.argv[2];

var fs = require("fs");

fs.readFile("quotes.txt", "utf8", function(error,data)
{
    if (error) {
        return console.log(error);
      }
    console.log(data);
    var names = [];
    var quotes = null;
    for(var i = 0; i<data.length; i++)
    {
        if(data[i].indexOf('-'))
        {
            data[i].split('-')
            names.push(data[i]);
        }
    }
    console.log("tester");
    console.log(names);
});