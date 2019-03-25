var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express(); 

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parlse applicaiton body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT);
})

