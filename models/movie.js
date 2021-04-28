//copied code from zybooks 11.8.7

// models/student.js
const db = require("../db");

const Movie = db.model("Movie", {
    name:      String,
    rating:       { type: Number, min: 0, max: 5 },
    releaseDate: { type: Date, default: Date.random}//,
    //interests: [ String ]
});

module.exports = Movie;