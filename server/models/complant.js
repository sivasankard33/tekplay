const mongoose = require('mongoose');
const Schema = mongoose.Schema

const complaint = new Schema({
    heading :String,
    complante:String,
    date:String,
    status:String
})

module.exports = mongoose.model('user',complaint,'usercomplaints');