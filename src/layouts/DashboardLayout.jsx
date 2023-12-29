import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import { drawerWidth } from "../constant";
import MainDrawer from "./MainDrawer";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";
function DashboardLayout(props) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });

  const handleMobileDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isTabletOrMobile ? (
        mobileDrawerOpen ? (
          <>
            <span className="toggleMobtext flex-aicjcsb">
              <span>Menu</span>
              <span onClick={handleMobileDrawerToggle}>
                <CloseIcon fontSize=".8" style={{ cursor: "pointer" }} />
              </span>
            </span>
          </>
        ) : (
          <span className="toggleMob" onClick={handleMobileDrawerToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_0_956)">
                <path
                  d="M18.75 22.5H3.75V20H18.75V22.5ZM26.25 7.5V10H3.75V7.5H26.25ZM18.75 16.25H3.75V13.75H18.75V16.25Z"
                  fill="#1C4980"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_956">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="matrix(-1 0 0 1 30 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        )
      ) : null}

      {!isTabletOrMobile || mobileDrawerOpen ? <MainDrawer /> : null}
      <main
        style={{
          width: "100%",
          overflow: "hidden",
          padding: !isTabletOrMobile ? ".3rem 1rem" : "0",
          maxHeight: "100vh",
          overflowY: "auto",
          position: isTabletOrMobile ? "absolute" : "relative",
        }}
      >
        {props.children}
      </main>
    </Box>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
