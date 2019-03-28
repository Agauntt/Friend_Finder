var friends = require('../data/friends');
var path = require('path')

module.exports = function(app) {

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
    });

    app.get("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/data/friends.js"));
    })
}

