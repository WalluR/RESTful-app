module.exports = function(app,jwt){

  const mongoose = require("mongoose");
  const User = mongoose.model("users");


/// JSON lista käyttäjistä
  app.get("/users",function(req,res) {
    console.log(req.body);
    User.find({}, function (err, users) {
    return res.end(JSON.stringify(users))
  });
  });

  app.get("/users/:id",function(req,res) {
  });

  app.post("/users",function(req,res) {
    let data = req.body;
    console.log(data);
    const newUser = new User({ username: data.username,
       password:data.password,
       fullName: data.fullName,
       apartment: data.apartment,
       isAdmin: data.isAdmin
       });
    newUser.save(function (err) {
    if (err) return handleError(err);

     });
     res.send("New user was created");

  });

  app.put("/users/:id",function(req,res) {
    const small = new User({ username: testUser.username });
    small.save(function (err) {
    if (err) return handleError(err);

     });
  });

  app.delete("/users/:id",function(req,res) {
    const small = new User({ username: testUser.username });
    small.save(function (err) {
    if (err) return handleError(err);

     });
  });


}
