const Job = require('../models/Jobs');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const searchJobs = async (req,res) => {
  const { body : { city, job_title }} = req;

  let job = await Job.find({ $text: { $search: job_title }, city});
  return res.status(StatusCodes.OK).json(job);
};

const getAllJobs = async (req, res) => {
  // try {}
  // set job_title && city in own properties in request params obh
  // const jobs = await Job.find({job_title: req.params.job_title, city: req.params.city});
    // res.status(StatusCodes.OK).json({jobs});
    // const { params: { id: query } } = req; 
    const { body: {job_title: job_title} } = req;

    const jobs = await Job.find({job_title: job_title });
    // res.send({query})
    if(!jobs) {
      throw new NotFoundError('no job with these params found!');
      // res.send(err);
    }
    // res.send()
    return res.status(StatusCodes.OK).json({jobs});
}

const getJob = async (req,res) => {
  const { user: {userId}, params: {id: jobId} } = req;
  const job = await Job.findById({
    _id: jobId,
    createdBy: userId
  });

  if (!job) {
    throw new NotFoundError(`no job with ${jobId} found`);
  }
  // res.send('register job');
  res.status(StatusCodes.OK).json({job});
};

const updateJob = async (req,res) => {
  const { body: { company_name, 
                  city, 
                  job_description, 
                  job_title, 
                  job_type, 
                  salary_offered  },
          user: { userId  }, 
          params: { id: jobId } } = req;
  // const { body: { company},user: {userId}, params: {id: jobId} } = req;

  if(company_name === '' || city === '' || job_description === '' || job_title === '' || job_type === '' || salary_offered === '') {
  // if(company === '') {
    throw new BadRequestError('missing fields from job updating');
  }
  const job  = await Job.findByIdAndUpdate({_id: jobId, createdBy:userId}, req.body, {new: true, runValidators: true});

  if (!job) {
    throw new NotFoundError(`no job with ${jobId} found`);
  }
  // res.send('register job');
  res.status(StatusCodes.OK).json({job});
}

const getAllUserJobs = async (req,res) => {
  const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt');
  res.status(StatusCodes.OK).json({jobs, count: jobs.length});
};

const createJob = async (req,res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({job});
}


const deleteJob = async (req,res) => {
  const { user: {userId}, params: {id: jobId} } = req;

  const job = await Job.findByIdAndRemove({
    _id: jobId,
    createdBy: userId
  });

  if(!job) {
    throw new NotFoundError(`no job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({job})

  res.send('delete job');  
};





module.exports = {
  getJob: getJob,
  createJob: createJob,
  updateJob: updateJob,
  deleteJob: deleteJob,
  getAllJobs: getAllJobs,
  getAllUserJobs: getAllUserJobs,
  searchJobs: searchJobs
}