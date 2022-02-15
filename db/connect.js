
 const mongoose = require('mongoose');
 
 const connectDB = (url) => { 
  //  return mongoose.connect(url, {
  //    useNewUrlParser: true,
  //    useCreateIndex: true,
  //    useFindAndModify: false,
  //    useUnifiedTopology: true
  //  })
  // var collection = client.db("Jobbing").collection("Job Data");

  return mongoose.connect(url);
 }

 module.exports = connectDB; 