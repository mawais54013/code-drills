var request = require("request");
var input = process.argv[2];

function getWet(input1)
{
    var query = "http://api.openweathermap.org/data/2.5/forecast?zip="+input1+",us&APPID=ba80deee5b579c96b85d0b92ea9902a8"
    // &APPID=ba80deee5b579c96b85d0b92ea9902a8"

    request(query, function(err,response,body)
    {
        if(err) throw err;
        for(var i = 0; i<5; i++)
        {
        console.log((JSON.parse(body).list[i].dt_txt),(JSON.parse(body).list[i].main.temp));
        }
    })
}
getWet(input);