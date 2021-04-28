//copied from zybooks 11.8.7

// db.js
const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);
//mongoose.connect("mongodb://localhost/mydb",
mongoose.connect("mongodb+srv://movie:movie@cluster0.ofmu9.mongodb.net/myDB?retryWrites=true&w=majority", 
   { useNewUrlParser: true });
module.exports = mongoose;