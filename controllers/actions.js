const User = require('../models/User');
const Job = require('../models/Jobs');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');
const { ObjectId } = require('mongodb');

// const getUser = async (req,res) => {
//   const { user}
// }
//get user id from 
 const getFavourites = async (req,res) => {
  const { user: { userId }} = req;
  let arr = [];
  const abuser = await User.findById(ObjectId(userId));
  
  // await user/.find({ObjectId(i)})
  //iterate through user.Favourites. 
  // user.find({ _id: ObjectId(fav)});
  const { favourites } = abuser;
  // let mapped = favourites.map(i => i = i);
  for (i of favourites) {
    // arr.push(`ObjectId(${i})`);
    // arr.push(ObjectId(i));
    if(i )
    arr.push(i);
  }
  // const job = await Job.find(arr)
  // const job = await Job.find({ '_id': arr });
  // const job = await Job.find({ '_id': { "$in" : {...arr} }});
  const records = await Job.find({ _id: { $in: arr } })
  if(!abuser) {
    throw new NotFoundError("couldn't find user");
  }

  return res.status(StatusCodes.OK).json(records)
};

const addToFavourites = async (req,res) => {
  // const { user: { userId }, params: { id: jobId} } = req;
  const { user: { userId }, body: { id: jobId} } = req;

  console.log(jobId);
  const user = await User.findByIdAndUpdate({
    _id: userId
  }, {
    $push: { favourites : jobId}
  });

  if(!user) {
    throw new NotFoundError(`no user with ${userId} found`);
  }

  res.status(StatusCodes.OK).json({user});
};

const deleteFavourite = async (req,res) => {
  const { user: { userId}, body: { id: jobId } } = req;

  const user = await User.findByIdAndUpdate({
    _id: userId
  }, {
    $pull: { favourites: jobId}
  });

  if(!user) {
    throw new NotFoundError('no user found');
  }

  if(!jobId) {
    throw new NotFoundError('no job found');
  };

  res.status(StatusCodes.OK).json({user});
}

module.exports = {
  getFavourites,
  addToFavourites,
  deleteFavourite
};