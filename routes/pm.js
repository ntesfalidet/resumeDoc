// Handles Product Manager resumes related routes
// Author: Randy Lirano

const express = require("express");
const router = express.Router();

// import module to interact with DB
const pmModuleDB = require("../db/pmResumesModuleDB.js");

// route to create resume
router.post("/create", async (req, res) => {
  let data = { message: "No issues!" };
  let statusCode = 200;

  // define a resume array to store objects of resumes
  let body = req.body;

  try {
    await pmModuleDB.createPmResume(body);
  } catch (error) {
    statusCode = 500;
    data.message = error.message;
  }
  // send back response
  res.status(statusCode).send(JSON.stringify(data));
});



module.exports = router;