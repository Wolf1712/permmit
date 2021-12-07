const mongoose=require('mongoose');
const {Schema}=mongoose;

const studentSchema = new Schema({
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
email:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true
}

})
const student =mongoose.model('student',studentSchema);
module.exports = student;