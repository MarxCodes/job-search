const Job = require('../models/Jobs');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const searchJobs = async (req,res) => {
  const { body : { city, job_title }} = req;

  let job = await Job.find({ $text: { $search: job_title }, city});
  return res.status(StatusCodes.OK).json(job);
};

module.exports = {
  searchJobs
}