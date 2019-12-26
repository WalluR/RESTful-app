
module.exports = function(app, jwt,checkToken) {

const keys = require("../config/config.js");
const mongoose = require("mongoose");
const User = mongoose.model("users");

const testUser = {
  username: "admin",
  password : "admin",
  fullName : "Null",
  apartment : "Null"
}


  app.get("/booking", function(req, res) {
    res.send("Hello World, from express");
  });



  app.get("/mongo",function(req,res) {
    const small = new User({ username: testUser.username });
    small.save(function (err) {
    if (err) return handleError(err);

     });
  });



/// lisää tuohon checkToken niin authenitcation toimii.
  app.post("/booking",checkToken, (req, res) => {

    //jwt.verify(req.token, "secretkey", (err, authData) => {
      //if (err) {
        //res.sendStatus(403);
      //} else {
        const booking = req.body;
        // Output the book to the console for debugging
        console.log(booking);
        res.send(booking);
      //}
    //});
  });





};
