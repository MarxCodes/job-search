const express = require('express');
const router = express.Router();

const { searchCity } = require('../controllers/search');

router.route('/').get(searchCity);

module.exports = router;