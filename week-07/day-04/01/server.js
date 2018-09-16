// SERVE UP INDEX AND ADD.HTML IN THIS FILE AT THE PORT OF YOUR CHOICE.
var path = require("path");

var PORT = 4070;

app.use(express.static("public"));

app.get("/", function(req,res)
{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res)
{
    res.sendFile(path.join(__dirname, "/public/add.html"));
});


app.listen(PORT, function()
{
    console.log("App listening on PORT " + PORT);
});