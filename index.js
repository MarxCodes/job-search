require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const xss = require('xss-clean');

const authenticateUser = require('./middleware/authentication');

const authRouter = require('./routes/auth');
const jobRouter = require('./routes/job');
const jobsRouter = require('./routes/jobs');
const actionsRouter = require('./routes/actions');
const aufRouter = require('./routes/auf');
const searchJobsRouter = require('./routes/searchJobs');
//error handler 
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const Job = require('./models/Jobs');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('./errors');


app.use(express.json());
app.set('trust proxy', 1);
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));
app.use(helmet());
app.use(cors());
app.use(xss());

const connectDB = require('./db/connect');
//router 

app.get('/', (req,res) => {
  res.send('jobs api');
});



// app.post('/auf', async (req,res)  => {
  //   res.send('route activated')
  // })
  app.use(errorHandlerMiddleware);
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/jobs', searchJobsRouter);
  // app.use('/api/v1/jobs', jobRouter);
  app.use('/api/v1/user/actions', authenticateUser, actionsRouter);
  app.use('/api/v1/user/jobs', authenticateUser, jobsRouter);
  
  app.use(notFoundMiddleware);
  app.use('/auf', aufRouter);
  
// app.use('/api/v1/search', searchRouter);
// app.use('/api/v1/searchCity', searchCityRouter);
// app.use('/api/v1/searchLing', searchLing);

// app.use('/jobs', ())

const port = process.env.PORT || 3000;

const start = async (req,res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log('server listening'));
  }
  catch (err){
    console.log(err,'not from here?');
  }
};

start();