const mongoose = require('mongoose');
//const Schema = mongoose.Schema sama asia
const {Schema} = mongoose;


// määritetään attribuutit
const booking = new Schema ({
  sauna: {
    type: Number,
    required: true
  },
  date : {
    type: Date,
    required: true
  },
  reservation : {
    type: Schema.Types.ObjectId,
    ref: 'users', required: true
  }

});

// tekee uuden collektion
mongoose.model('booking',userSchema);
