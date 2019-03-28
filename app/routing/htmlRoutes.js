// Dependancies 
var path = require("path");

// Routes
// ================================================================
module.exports = function(app) {

// index route loads home.html    
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// survey route load the survey.htnl page
// where the user fills out and submits the survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

};
