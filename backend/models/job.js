var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true, default: ""},
    description: {type: String, required: true, default: ""},
    hourly: {type: Boolean, required: true, default: false},
    pay_amount:  {type: Number, required: true, default: 0},
    pay_currency: {type: String, required: true, default: "VND"},
    start_time: {type:Date, required: false},
    end_time: {type:Date, required: false},
    tags: [String],
    created_at: {type:Date, required: true, default: new Date()}
})


module.exports = mongoose.model("Job", JobSchema); 