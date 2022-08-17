const express = require('express');
const router = express.Router();

const {  getFavourites, addToFavourites, deleteFavourite } = require('../controllers/actions');


  router.route('/').get(getFavourites).post(addToFavourites).delete(deleteFavourite)
  
  // router.route('/:id').post(addToFavourites)
  // router.route('/:id').patch(updateJob).get(getJob).delete(deleteJob);

  module.exports = router;