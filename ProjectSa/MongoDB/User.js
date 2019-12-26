const mongoose = require('mongoose');
//const Schema = mongoose.Schema sama asia
const {Schema} = mongoose;


// määritetään attribuutit
const userSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  password : {
    type: String,
    required: true
  },
  fullName : {
    type: String,
    required: true
  },
  apartment : {
    type: String,
    required: true
  },
  isAdmin : {
    type: Boolean,
    required: true
  }
});

// tekee uuden collektion
mongoose.model('users',userSchema);
