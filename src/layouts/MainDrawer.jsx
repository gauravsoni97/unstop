// MainDrawer.js
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
import Sidebar from "./Sidebar";
import { drawerWidth } from "../constant";

function MainDrawer(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {}, [path]);

  const drawer = (
    <div style={{ height: "100vh", padding: "1rem", position: "relative" }}>
    <Sidebar/>
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
