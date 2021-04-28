//copied from zybooks 11.8.7

// db.js
//WARNING
//I could not get npm install mongoose --save to run with this application, so at this point I can not get it to run npm start either
//I tried adding the dependency by hand in package.json, and it worked, but only temporarily
const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);
//mongoose.connect("mongodb://localhost/mydb",
mongoose.connect("mongodb+srv://movie:movie@cluster0.ofmu9.mongodb.net/myDB?retryWrites=true&w=majority", 
   { useNewUrlParser: true });
module.exports = mongoose;