// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";
import NavBarOther from "../components/NavBarOther";
// eslint-disable-next-line no-unused-vars
import PmDashboardContentBox from "../components/PmDashboardContentBox";
import PmResumeList from "../components/PmResumeList.js";
import "../stylesheets/pm-dashboard.css";

// Author: Randy Lirano

const PmDashboard = () => {
  const location = useLocation();
  const login_email = location.state.login_email;

  // return (
  //   <div className="container">
  //     <div className="row">
  //       <NavBarOther login_email={login_email} />
  //       {/*<PmDashboardContentBox login_email={login_email} />*/}
  //     </div>
  //   </div>
  // );

  return (
    <div className="PmDashboardPage">
      <NavBarOther login_email={login_email} />

      <h1> PM Dashboard Test</h1>

      <PmResumeList/>

    </div>
  );
};

export default PmDashboard;
