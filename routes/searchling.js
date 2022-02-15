const express = require('express');
const router = express.Router();

const {  searchJobs, dummy } = require('../controllers/search');

router.route('/').get(dummy);
// router.route('/:quarams').post(searchJobs);
module.exports = router;