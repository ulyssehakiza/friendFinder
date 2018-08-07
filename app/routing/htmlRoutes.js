//Dependencies
var path = require("path");

//ROUTING

module.exports = function (app) {
    //default GET route that leads to home.html - displays home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    
};