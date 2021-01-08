var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 


var UserSchema = new Schema({
    email: {type: String, required:true, unique:true}, 
    first_name: {type: String, required: true, unique:false},
    last_name: {type:String, required: true, unique: false},
    password: {type:String, required: false, unique: false},
    createdAt: Date,
    dob: Date,
    street_address: String,
    country: String,
    city: String,
    ward: String,
    district: String,
    joined_at: {type:Date, required: true, default: new Date()}
}); 



module.exports = mongoose.model("User", UserSchema); 