const mongoose = require('mongoose');

// const JobSchema = new mongoose.Schema({
//   company: {
//     type: String,
//     required: [true, 'please provide company name'],
//     maxlength: 50
//   },
//     createdBy: {
//     type: mongoose.Types.ObjectId,
//     ref: 'User',
//     required: [true, 'please provide a user']
//   }

// }, {timestamps: true});


const JobSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: [true, 'please provide company name'],
    maxlength: 50
  },
  city: {
    type: String,
    required: [true, 'please provide city name'],
    maxlength: 50
  },
  job_description: {
    type: String,
    required: [true, 'please provide job descriptio'],
  },
  job_title: {
    type: String,
    required: [true, 'please provide job title'],
    maxlength: 50
  },
  job_type: {
    type: String,
    required: [true, 'please provide employment type'],
    maxlength: 50
  },
  salary_offered: {
    type: String,
    required: [true, 'please provide salary'],
    maxlength: 50
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'please provide a user']
  },



}, {timestamps: true});

// JobSchema.methods.addToFavourites = function() {
//   return this.name;
// };


module.exports = mongoose.model('Job', JobSchema, 'jobs');