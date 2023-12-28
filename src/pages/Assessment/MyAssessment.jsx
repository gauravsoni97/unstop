import React from "react";
import "./Assessment.css";
import AssessmentOverview from "./AssessmentOverview/AssessmentOverview";
import MyAssessmentList from "./MyAssessmentList/MyAssessmentList";

const MyAssessment = () => {
  return (
    <div>
      <AssessmentOverview />
      <br />
      <MyAssessmentList />
    </div>
  );
};

export default MyAssessment;
