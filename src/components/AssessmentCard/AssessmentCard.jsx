import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import joblogo from "../../assets/assessment/joblogo.svg";
import calendar from "../../assets/assessment/calendar_today.svg";
import linkbtn from "../../assets/assessment/linkbtn.svg";
import { Avatar } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";

const AssessmentCard = () => {
  return (
    <div className="AssessmentCardParent">
      <div className="AssessmentCardParent_TopSection">
        <div className="top_icon_more flex-aicjcsb">
          <div className="top_Card_Icon">
            <img src={joblogo} alt="" />
          </div>
          <span>
            <MoreVertIcon />
          </span>
        </div>
        <h3 className="card_title">Math Assessment</h3>
        <div className="jobAbout flex-aic">
          <span className="jobAboutTxt">Job</span>
          <span className="divider_jobAboutTxt">|</span>
          <span className="flex-aic caltextparent">
            <img src={calendar} alt="" />{" "}
            <span className="calText"> 20 Apr 2023</span>
          </span>
        </div>
      </div>
      <div className="AssessmentCardParent_BottomSection flex-aicjcsb">
        <div className="leftTimer flex-aic">
          <div className="duration">
            <span className="durationNum">00</span>
            <span>Duration</span>
          </div>
          <div className="questions">
            <span className="questionsnum">00</span>
            <span>Questions</span>
          </div>
        </div>
        <div className="RightShare flex-aic">
          <button className="linkbtn">
            <img src={linkbtn} alt="" />
            Share
          </button>

          <AvatarGroup max={3}>
            <Avatar
              sx={{
                width: 26,
                height: 26,
                marginRight: "-.8rem",
                fontSize: ".8rem",
                bgcolor: "#ff6b9f",
                padding: ".3rem",
              }}
            >
              LP
            </Avatar>
            <Avatar
              sx={{
                width: 26,
                height: 26,
                marginRight: "-.8rem",
                fontSize: ".8rem",
                bgcolor: "#5299ff",
                padding: ".3rem",
              }}
            >
              LP
            </Avatar>
            <Avatar
              sx={{
                width: 26,
                height: 26,
                marginRight: "-.8rem",
                fontSize: ".8rem",
                bgcolor: "#7457ff",
                padding: ".3rem",
              }}
            >
              LP
            </Avatar>
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
