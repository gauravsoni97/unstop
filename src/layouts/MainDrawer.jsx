import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "react-responsive";

function MainDrawer(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });

  const drawerWidth = isTabletOrMobile ? "210px" : 150;

  useEffect(() => {}, [path]);

  const drawer = (
    <div
      style={{
        padding: !isTabletOrMobile ? "1rem" : "0.5rem",
        position: "absolute",
        paddingTop: isTabletOrMobile ? "3.5rem" : 0,
        top: 0,
        left: 0,
        height: "100vh",
        width: isTabletOrMobile ? "210px" : 150,
        background: "white",
        zIndex: isTabletOrMobile ? 3 : 1,
      }}
    >
      <Sidebar />
    </div>
  );

  return (
    <nav
      style={{
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "white",
        color: "black",
        "&::WebkitScrollbar": {
          display: "none",
        },
      }}
      aria-label="mailbox folders"
    >
      {drawer}
    </nav>
  );
}

export default MainDrawer;
