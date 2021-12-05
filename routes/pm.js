// Handles Product Manager resumes related routes
// Author: Randy Lirano

const express = require("express");
const router = express.Router();

// import module to interact with DB
const pmModuleDB = require("../db/pmResumesModuleDB.js");

// route to retrieve pm resumes of currently active user
router.get("/", async (req, res) => {
  // res.json({
  //   "resumes": [
  //   {"company":"ABC_0", "title":"Title_0"},
  //   {"company":"ABC_1", "title":"Title_1"},
  //   {"company":"ABC_2", "title":"Title_2"},
  //   ]
  // });
  let data = { message: "No issues!" };
  let statusCode = 200;
  // test credential
  let activeEmail = "mcraighall0@vimeo.com"

  let resumes = await pmModuleDB.getPMResumes(activeEmail);

  console.log("DB RETURNED", resumes)

  res.json(resumes);

  // try {
  //   await pmModuleDB.getPMResumes(activeUser);
  // } catch (error) {
  //   statusCode = 500;
  //   data.message = error.message;
  // }
});

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