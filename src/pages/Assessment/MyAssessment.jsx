import React from "react";
import "./Assessment.css";

import AssessmentImg from "../../assets/assessment/view_agenda.svg";

const MyAssessment = () => {
  return (
    <div>
      <section className="assessment_sections">
        <h2 className="assessment_heading">Assessments Overview</h2>

        <div className="assessment_box flex-aicjcsb">
          <div className="assessment_item">
            <h3 className="assessment_item_heading">Total Assessment</h3>

            <div className="item_count flex-aic flexgap1">
              <div className="imgIcon" style={{ background: "#EBE8FD" }}>
                <img src={AssessmentImg} alt="AssessmentImg" />
              </div>
              <div className="countNumber">
                <div className="flex-aic">
                  <span className="countnum_main">34</span>
                  <span className="countnum_green">+34</span>
                </div>
                <p className="count_about"> Total Candidate</p>
              </div>
            </div>
          </div>
          <div className="assessment_item">
            <h3 className="assessment_item_heading">Candidates</h3>

            <div className="item_count flex-aic flexgap1">
              <div className="imgIcon" style={{ background: "#EBE8FD" }}>
                <img src={AssessmentImg} alt="AssessmentImg" />
              </div>
              <div className="countNumber">
                <div className="flex-aic">
                  <span className="countnum_main">34</span>
                  <span className="countnum_green">+34</span>
                </div>
                <p className="count_about"> Total Candidate</p>
              </div>
              <div className="countNumber">
                <div className="flex-aic">
                  <span className="countnum_main">34</span>
                  <span className="countnum_green">+34</span>
                </div>
                <p className="count_about"> Total Candidate</p>
              </div>
            </div>
          </div>
          <div className="assessment_item">
            <h3 className="assessment_item_heading">Candidates Source</h3>

            <div className="item_count flex-aic flexgap1">
              <div className="imgIcon" style={{ background: "#EBE8FD" }}>
                <img src={AssessmentImg} alt="AssessmentImg" />
              </div>
              <div className="countNumber">
                <div className="flex-aic">
                  <span className="countnum_main">34</span>
                  <span className="countnum_green">+34</span>
                </div>
                <p className="count_about"> Total Candidate</p>
              </div>
              <div className="countNumber">
                <div className="flex-aic">
                  <span className="countnum_main">34</span>
                  <span className="countnum_green">+34</span>
                </div>
                <p className="count_about"> Total Candidate</p>
              </div>
              <div className="countNumber">
                <div className="flex-aic">
                  <span className="countnum_main">34</span>
                  <span className="countnum_green">+34</span>
                </div>
                <p className="count_about"> Total Candidate</p>
              </div>
            </div>
          </div>
          <div className="assessment_item">
            <h3 className="assessment_item_heading">Total Purpose</h3>

            <div className="item_count flex-aic flexgap1">
              <div className="imgIcon" style={{ background: "#EBE8FD" }}>
                <img src={AssessmentImg} alt="AssessmentImg" />
              </div>
              <div className="countNumber">
                <div className="flex-aic">
                  <span className="countnum_main">34</span>
                  <span className="countnum_green">+34</span>
                </div>
                <p className="count_about"> Total Candidate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAssessment;
