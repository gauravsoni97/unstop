import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MyAssessment from "./MyAssessment";
import mob from "../../assets/assessment/mobile_screen_share.svg";
import comp from "../../assets/assessment/laptop_mac.svg";
import { useMediaQuery } from "react-responsive";

const Assessment = () => {
  const [value, setValue] = useState("1");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="whiteRoundCard">
      {!isTabletOrMobile ? (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span
                style={{
                  borderRight: "1px solid #eeeeee",
                  padding: "0 1rem",
                  color: "#1C4980",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  lineHeight: "140%",
                }}
              >
                Assessment
              </span>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  className={value === 1 ? "tabName" : " "}
                  style={{ fontWeight: "600" }}
                  label="My Assessments"
                  value="1"
                />
                <Tab
                  className={value === 2 ? "tabName" : " "}
                  style={{ fontWeight: "600" }}
                  label="Unstop Assessments"
                  value="2"
                />
              </TabList>
              <span style={{ marginLeft: "auto" }}>
                <img src={mob} alt="" />
              </span>
            </Box>
            <TabPanel value="1">
              <MyAssessment />
            </TabPanel>
            <TabPanel value="2">Unstop Assessments</TabPanel>
          </TabContext>
        </Box>
      ) : (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <div className="flex-aicjcsb" style={{marginLeft:"2.5rem" , marginTop:'.5rem'}}>
            <span
              style={{
                padding: "0 1rem",
                color: "#1C4980",
                fontSize: "1.25rem",
                fontWeight: "600",
                lineHeight: "140%",
              }}
            >
              Assessment
            </span>
            <span style={{ marginLeft: "auto" }}>
              <img src={comp} alt="" />
            </span>
          </div>
          <br />

          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  className={value === 1 ? "tabName" : " "}
                  style={{ fontWeight: "600" }}
                  label="My Assessments"
                  value="1"
                />
                <Tab
                  className={value === 2 ? "tabName" : " "}
                  style={{ fontWeight: "600" }}
                  label="Unstop Assessments"
                  value="2"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <MyAssessment />
            </TabPanel>
            <TabPanel value="2">Unstop Assessments</TabPanel>
          </TabContext>
        </Box>
      )}
    </div>
  );
};

export default Assessment;
