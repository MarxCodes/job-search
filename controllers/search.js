const { MongoClient } = require('mongodb');
const Job = require('../models/Jobs');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const dummy = async(req, res, next) => {
  res.send(req.body);
  console.log('dummy done good!')
}
const searchJobs = async (req,res, next) => {
  
  console.log('the query?', req);
  const { params : { job_title, city }} = req;
  console.log('calling')
  if(!params) {
    return res.send(200).json('no params');
  }

  try {
    const job = await Job.aggregate().search({
      "compound": {
        "must": [
          {
            "text": { 
              "path": "job_title",
              "query": job_title,
              "fuzzy": {
                "maxEdits": 1,
                "maxExpansions": 100
              }
            }
          },
          {
            "text": { 
              "path": "city",
              "query": city,
              "fuzzy": {
                "maxEdits": 1,
                "maxExpansions": 100
              }
            }
          }
        ]
      }
    });
    res.json(job);
  }
  catch(err) {
    res.status(500).send({msg: e.msg})
  }
}

const searchJob = async (req,res) => {
  // var collection = client.db("Jobs").collection("Job_data");
  // const { query: {term} } = req;
  console.log(req.query);
  try {
    const job = await Job.aggregate([
      {
        "$search": {
          "autocomplete": {
            "query" : `${req.query.term}`,
            "path": "job_title",
            "fuzzy": {
              "maxEdits": 2,
              'prefixLength': 2
            }
          }
        }
      }
    ])
    res.json(job);

  } catch(e){
    res.status(500).send({msg: e.message})
  }

}
const searchCity = async (req,res) => {
  try {
    const job = await Job.aggregate([
      {
        "$search": {
          "index": "city",
          "autocomplete": {
            "query" : `${req.query.term}`,
            "path": "city",
            "fuzzy": {
              "maxEdits": 2,
              'prefixLength': 2
            }
          }
        }
      }
    ])
    res.json(job);

  } catch(e){
    res.status(500).send({msg: e.message})
  }

}
module.exports = {searchJob, searchCity, searchJobs, dummy};