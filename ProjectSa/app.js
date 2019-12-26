const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./config/config.js');
const jwt = require('jsonwebtoken');
const functions = require('./functions/functions.js');
const app = express();
const port = 3000;
///lokaali mongoDB asetuksent
const local = 'mongodb://127.0.0.1:27017/project';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//yhdistetään db mongoose
mongoose.connect(local).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});

///luo käyttäjän palveluun.
require('./MongoDB/User.js');
//require('./MongoDB/BookingDB.js');


///kaikki routit hoidetaan eri kansioiden avulla. yms GET, POST
require('./Routing/login.js')(app,jwt);
require('./Routing/server.js')(app,jwt,functions.checkToken);
require('./Routing/admin.js')(app,jwt);



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
