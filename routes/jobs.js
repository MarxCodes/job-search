const express = require('express');
const router = express.Router();

const {  getJob,
  createJob,
  updateJob,
  deleteJob,
  getAllUserJobs } = require('../controllers/jobs');


  router.route('/').get(getAllUserJobs).post(createJob);

  router.route('/:id').patch(updateJob).get(getJob).delete(deleteJob);

  module.exports = router;