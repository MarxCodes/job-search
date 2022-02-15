const express = require('express');
const router = express.Router();

const {searchJobs } = require('../controllers/searchJob');

router.post('/', searchJobs);

module.exports = router;