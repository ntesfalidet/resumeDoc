import React from "react";

const Resume = ({ resume }) => {
  console.log("---");
  console.log(resume);
  return (
    <div className="Resume p-2">
      <label>
        Resume ID: <output>{resume.pm_resume_id}</output>
      </label>
    </div>
  );
};

export default Resume;
