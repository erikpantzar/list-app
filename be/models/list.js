var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;

var ListSchema = new mongoose.Schema({
	name: { type: String, required: true },
	// the users who can access the list
	accessBy: { type: Array, required: true },
	// Array of todoItems [{item: "disches", state: -1 }]
	todoItems: { type: Mixed }
	// FREEEEEDOOOOOOM.JS //
});


// TODO
// when user creates list
// add their id to accessBy  ... HEHE
module.exports = mongoose.model('List', ListSchema);