const express = require('express');
const router = express.Router();

const { searchJob, searchJobs } = require('../controllers/search');

router.route('/').get(searchJob);
router.route('/:quarams').post(searchJobs);
module.exports = router;