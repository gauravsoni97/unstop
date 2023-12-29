import React, { useState } from "react";
import "./Assessment.css";
import AssessmentOverview from "./AssessmentOverview/AssessmentOverview";
import MyAssessmentList from "./MyAssessmentList/MyAssessmentList";

const MyAssessment = () => {
  const [showOverview, setShowOverview] = useState(true);
  return (
    <div>
      {showOverview && <AssessmentOverview />}
      <br />
      <MyAssessmentList showOverview={showOverview} setShowOverview={() => setShowOverview(prevState => !prevState)}/>
    </div>
  );
};

export default MyAssessment;
