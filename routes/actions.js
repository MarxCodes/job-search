const express = require('express');
const router = express.Router();

const {  getFavourites, addToFavourites } = require('../controllers/actions');


  router.route('/').get(getFavourites)
  router.route('/:id').patch(addToFavourites)
  // router.route('/:id').patch(updateJob).get(getJob).delete(deleteJob);

  module.exports = router;