// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useRef, useState } from "react";
import "../stylesheets/pm-dashboard.css";
import { useNavigate } from "react-router-dom";

// Author: Randy Lirano

const CreateResumeForm = (props) => {
  /*
  Main form to contain questions for creating resume.

  input:
  The currently active email
  */

  const [userEmail] = useState(props.login_email);
};

export default CreateResumeForm;