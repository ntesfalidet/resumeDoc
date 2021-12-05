import React, { useEffect, useState } from "react";
import Resume from "./Resume.js";

const PmResumeList = () => {
  const [pmResumes, setPmResumes] = useState([]);

  // function to retrieve pm resumes
  async function reloadData() {
    const res = await fetch("api/pm/");
    console.log("BACKEND RETURN", res);

    // if (!res.ok) {
    //   throw new Error("error loading resumes");
    // }

    const _resumes = await res.json();

    console.log("Got Resumes", _resumes);

    setPmResumes(_resumes);
  }

  useEffect(() => {
    reloadData();
  }, []);


  const renderResumes = () => pmResumes.map(p => <Resume resume={p}></Resume>);
  

  return (
    <div className="PmResumeList">
      <h2>User PM Resumes</h2>

      {renderResumes()}
    </div>
  );
};

export default PmResumeList;
