const express = require('express');
const router = express.Router();
// const { authenticateUser } = require('../middleware/authentication');
const { rej } = require('../controllers/auf'); 
console.log(rej);
router.post('/', rej);

module.exports = router;