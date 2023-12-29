import React, { useState } from "react";
import "./MyAssessmentList.css";
import AddIcon from '@mui/icons-material/Add';
import AssessmentCard from "../../../components/AssessmentCard/AssessmentCard";
import CreateAssessment from "../../../components/Modal/CreateAssessment";
const MyAssessmentList = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <CreateAssessment open={open} handleOpen={handleOpen} handleClose={handleClose} />

    <section className="assessment_sections">
      <h2 className="assessment_heading">My Assessment</h2>

      <div className="cardsListParent">
        <div className="createNewAssessmentCard flex-aicjcc" onClick={handleOpen}>
          <div className="uploadAssessmentCard flex-aicjcc">
            <div className="plusbtn">
              <AddIcon/>
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
