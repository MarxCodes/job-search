const mongoose = require('mongoose');

const AbuserSchema = new mongoose.Schema({
  abuse: {
    type: String,
    required: [true, 'please provide abuse'],
    maxlength: 50
  }


}, {timestamps: true});

module.exports = mongoose.model('Abuse', AbuserSchema, 'Job Data');