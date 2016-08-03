var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  passphrase: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hash: String
});

// http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt

UserSchema.pre('save', (next)=> {
    const user = this;

    // only hash the passphrase if it has been modified (or is new)
    if (!user.isModified('passphrase')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the passphrase using our new salt
        bcrypt.hash(user.passphrase, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext passphrase with the hashed one
            user.passphrase = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassphrase = function(candidatepassphrase, cb) {
    bcrypt.compare(candidatepassphrase, this.passphrase, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
