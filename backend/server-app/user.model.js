var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    userid: { type: String },
    userpass: { type: String },
    fullname: { type: String },
    picname: { type: String },
}, { 
    collection: 'user' 
});

module.exports = mongoose.model('User',User);