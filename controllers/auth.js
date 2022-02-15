const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');


const { BadRequestError, UnauthenticatedError } = require('../errors');



const register = async (req,res)  => {
 
  const user  = await User.create({...req.body});
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({user: {id: user._id }, token});
}

const login = async (req,res) => {
  // res.send('login user'); 

  const { email, password} = req.body;

  if(!email || !password) {
    throw new BadRequestError('please provide email n password for login');
  }

  const user = await User.findOne({email});

  if(!user) {
     throw new UnauthenticatedError('no user found');
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if(!isPasswordCorrect) {
    throw new UnauthenticatedError('wonky passwords');
 }

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({user: {id: user._id }, token});
}


module.exports = {
  register,
  login
}