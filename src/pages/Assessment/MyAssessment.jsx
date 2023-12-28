import React from "react";
import "./Assessment.css";
import AssessmentImg from "../../assets/assessment/view_agenda.svg";
import AssessmentImg2 from "../../assets/assessment/group.svg";
import AssessmentImg3 from "../../assets/assessment/captive_portal.svg";
import AssessmentImg4 from "../../assets/assessment/link.svg";

const MyAssessment = () => {
  const assessmentItems = [
    {
      title: "Total Assessment",
      img: AssessmentImg,
      background: "#EBE8FD",
      counts: [{ mainCount: 34, countAbout: null }],
    },
    {
      title: "Candidates",
      img: AssessmentImg2,
      background: "#EBE8FD",
      counts: [
        { mainCount: "11,145", greenCount: 89, countAbout: "Total Candidate" },
        { mainCount: "114", greenCount: 89, countAbout: "Who Attamped" },
      ],
    },
    {
      title: "Candidates Source",
      img: AssessmentImg3,
      background: "#FCE8EF",
      counts: [
        { mainCount: "11,000", greenCount: 89, countAbout: "E-mail" },
        { mainCount: "145", greenCount: 89, countAbout: "Social Share" },
        { mainCount: "145", greenCount: 89, countAbout: "Unique Link" },
      ],
    },
    {
      title: "Total Purpose",
      img: AssessmentImg4,
      background: "#E5F1FC",
      counts: [{ mainCount: 11, countAbout: null }],
    },
  ];

  return (
    <div>
      <section className="assessment_sections">
        <h2 className="assessment_heading">Assessments Overview</h2>

        <div className="assessment_box">
          {assessmentItems.map((item, index) => (
            <div key={index} className="assessment_item">
              <h3 className="assessment_item_heading">{item.title}</h3>

              <div className="item_count flex-aic flexgap1">
                <div
                  className="imgIcon"
                  style={{ background: item.background }}
                >
                  <img src={item.img} alt="AssessmentImg" />
                </div>

                {item.counts.map((countItem, countIndex) => (
                  <div
                    key={countIndex}
                    className={`countNumber ${
                      countIndex !== 0 ? "customborderLeft" : ""
                    }`}
                  >
                    <div className="flex-aic ">
                      <span className="countnum_main">
                        {countItem.mainCount}
                      </span>
                      <span className="countnum_green">
                        {countItem.countAbout != null && "+"}
                        {countItem.greenCount}
                      </span>
                    </div>
                    <p className="count_about">{countItem.countAbout}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyAssessment;
