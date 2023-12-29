import React, { useEffect, useState } from "react";
import "./Assessment.css";
import AssessmentOverview from "./AssessmentOverview/AssessmentOverview";
import MyAssessmentList from "./MyAssessmentList/MyAssessmentList";
import AddIcon from "@mui/icons-material/Add";

import { useMediaQuery } from "react-responsive";

const MyAssessment = () => {
  const [showOverview, setShowOverview] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });
  useEffect(() => {
    if (isTabletOrMobile) {
      setShowOverview(false);
    }
  }, []);

  return (
    <div>
      {isTabletOrMobile && (
        <span className="plusbtnModal">
          <AddIcon />
        </span>
      )}

      {showOverview && <AssessmentOverview />}
      <br />
      <MyAssessmentList
        showOverview={showOverview}
        setShowOverview={() => setShowOverview((prevState) => !prevState)}
      />
    </div>
  );
};

export default MyAssessment;
