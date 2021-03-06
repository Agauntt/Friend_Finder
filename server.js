var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express(); 

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parlse applicaiton body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =====================================================
require("./app/routing/htmlRoutes")(app);

// require("./app/routing/apiRoutes")(app);
// =====================================================


// Starts the server to begin listening
// =====================================================
app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT);
})

