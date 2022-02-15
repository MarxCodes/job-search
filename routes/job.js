const express = require('express');
const router = express.Router();

const { getAllJobs, searchJobs } = require('../controllers/jobs');

// router.route('/:id').get(getAllJobs);
// router.route('/').post(getAllJobs);
router.route('/').post(searchJobs);



module.exports = router;