import React, { useState } from "react";
import "./MyAssessmentList.css";
import AddIcon from "@mui/icons-material/Add";
import search from "../../../assets/assessment/search.svg";
import analytics from "../../../assets/assessment/bar_chart.svg";
import filter from "../../../assets/assessment/filter_list_alt.svg";
import AssessmentCard from "../../../components/AssessmentCard/AssessmentCard";
import CreateAssessment from "../../../components/Modal/CreateAssessment";
import { useMediaQuery } from "react-responsive";

const MyAssessmentList = ({ showOverview, setShowOverview }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });

  return (
    <>
      <CreateAssessment
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />

      <section className="assessment_sections">
        {!isTabletOrMobile ? (
          <h2 className="assessment_heading">My Assessment</h2>
        ) : (
          <div className="flex-aic">
            <h2 className="assessment_heading">My Assessment</h2>
            <div style={{ marginLeft: "auto" }} className="flex-aic flexgap1">
              <span>
                <img src={search} alt="" />
              </span>
              <span>
                <img src={filter} alt="" />
              </span>
              <span
                onClick={setShowOverview}
                className={showOverview ? "activeOverview flex-aicjcc" : ""}
              >
                <img src={analytics} alt="" />
              </span>
            </div>
          </div>
        )}

        <div className="cardsListParent">
          <div
            className="createNewAssessmentCard flex-aicjcc"
            onClick={handleOpen}
          >
            <div className="uploadAssessmentCard flex-aicjcc">
              <div className="plusbtn">
                <AddIcon />
              </div>
              <h3 className="newAssessment_Heading">New Assessment</h3>
              <p className="newAssessment_Para">
                From here you can add questions of multiple types like MCQs,
                subjective (text or paragraph)!
              </p>
            </div>
          </div>
          <AssessmentCard />
          <AssessmentCard />
          <AssessmentCard />
          <AssessmentCard />
          <AssessmentCard />
        </div>
      </section>
    </>
  );
};

export default MyAssessmentList;
