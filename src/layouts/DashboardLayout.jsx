import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainDrawer from "./MainDrawer";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";
import ToggleIcon from "../components/UI/ToggleIcon";

function DashboardLayout(props) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });

  const handleMobileDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* --------- Mobile view toggle icons----------- */}
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
            <ToggleIcon />
          </span>
        )
      ) : null}

      {/* -------------  Left Side bar drawer ------------ */}

      {!isTabletOrMobile || mobileDrawerOpen ? <MainDrawer /> : null}

      {/* -------------  Children on right side content of all pages ------------ */}
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
