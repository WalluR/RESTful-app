module.exports = function(app,jwt){
  const user = {
    user: 'admin'
  }

  app.post("/mongo",function(req,res) {
    const small = new User({ username: testUser.username });
    small.save(function (err) {
    if (err) return handleError(err);

     });
  });



  app.post('/login', (req, res) => {

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
      res.json({
        token
      });
    });
  });

}
