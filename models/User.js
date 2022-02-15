const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: [true, 'provide name'],
  //   minlength: 2,
  //   maxlength: 50
  // },
  email :{
    type: String,
    required: [true, 'provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'please provide email'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
  },
  favourites: {
    type: Array,
    required: [false]
  }
});
 
UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.getName = function() {
  return this.name;
};

UserSchema.methods.createJWT = function() {
  return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
}

UserSchema.methods.comparePassword = async function(clientPassword) {
  const isMatch = await bcrypt.compare(clientPassword, this.password);

  return isMatch;
}

UserSchema.methods.addToFavourites = async function() {

}

module.exports = mongoose.model('User', UserSchema); 