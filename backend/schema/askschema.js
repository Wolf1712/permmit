const mongoose=require('mongoose');
const {Schema}=mongoose;

const askSchema = new Schema({
// name :{
    // type : mongoose.Schema.Types.ObjectId,
//     ref : 'student'
// },
name :{
    type : String,
    required : true
},
section :{
    type : String,
    required : true
},
year:{
    type : String,
    required : true
},
caption:{
    type: String,
    required: true

},
message:{
    type: String,
    required: true
},
time:{
    type: String,
    required: true
},
date:{
        type: Date,
        default: Date.now
    }

})
const ask =mongoose.model('ask',askSchema);
module.exports = ask;