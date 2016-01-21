var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	mail: {type: String, required: true }, 
	name: { type: String },
	password: { type: String, require: true }
});


module.exports = mongoose.model('user', UserSchema);