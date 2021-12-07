const mongoose=require('mongoose');
const {Schema}=mongoose;

const acceptedSchema = new Schema({
id:{
  type: String,
required: true
},
time:{
    type: String,
    required: true
},
status:{
  type:String,
  default : false
},
date:{
        type: Date,
        default: Date.now
    }

})
const accepted =mongoose.model('accepted',acceptedSchema);
module.exports = accepted;