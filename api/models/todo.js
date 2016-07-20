var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var TodoSchema   = new Schema({
    name: {
        type: String,
        required: [true, 'You gotta have a name ya!?']
    },
    done: {
        type: Boolean,
        required: true
    },
    status: Schema.Types.Mixed,
    users: [String]
});

module.exports = mongoose.model('Todo', TodoSchema);
