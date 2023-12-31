import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { AdminMenuList } from "../AdminMenuList";
import { MenuList } from "../MenuList";
import { useMediaQuery } from "react-responsive";

const SidebarItem = ({ isTabletOrMobile, menuItem, isActive, onClick }) => (
  <ListItem
    onClick={onClick}
    sx={{
      cursor: "pointer",
      color: isActive ? "#0073E6" : "#E5F1FC",
      border: isActive ? "1px solid #0073E6" : "transparent",
      backgroundColor: isActive ? "#E5F1FC" : "transparent",
      "&:hover": {
        backgroundColor: "#E5F1FC",
      },
      padding: "10px 20px",
    }}
    button
    style={{
      borderRadius: ".5rem",
      marginBottom: ".3rem",
      display: "flex",
      flexDirection: isTabletOrMobile ? "row" : "column",
      alignItems: "center",
      justifyContent: isTabletOrMobile ? "start" : "center",
    }}
  >
    <ListItemIcon>
      <img
        style={{
          height: "auto",
          width: "100%",
          maxWidth: "1.25rem",
          margin: "0 auto",
          color: isActive ? "#0073E6" : "#1C4980",
        }}
        src={menuItem?.icon}
      />
    </ListItemIcon>
    <ListItemText
      primaryTypographyProps={{
        style: {
          fontSize: ".8rem",
          fontWeight: 500,
          textAlign: isTabletOrMobile ? "left" : "center",
          marginTop: ".18rem",
          color: isActive ? "#0073E6" : "#1C4980",
        },
      }}
      primary={menuItem.text}
    />
  </ListItem>
);

const Sidebar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });
  const navigate = useNavigate();
  const [menuListItem, setMenuListItem] = useState(MenuList);
  const [adminMenuListItem, setAdminMenuListItem] = useState(AdminMenuList);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const handleItemClick = (item, index, list, setList) => {
    if (item.child.length === 0) {
      navigate(item.url);
    }

    list[index].active = !item.active;
    setList([...list]);
  };

  return (
    <div>
      <List>
        {menuListItem.map((menuItem, index) => (
          <SidebarItem
            key={menuItem.text}
            menuItem={menuItem}
            isTabletOrMobile={isTabletOrMobile}
            isActive={path === menuItem.rootpath}
            onClick={() =>
              handleItemClick(menuItem, index, menuListItem, setMenuListItem)
            }
          />
        ))}
      </List>
      <center>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="2"
          viewBox="0 0 90 2"
          fill="none"
        >
          <path d="M0 1H90" stroke="#BACBD5" stroke-dasharray="2 2" />
        </svg>
      </center>
      <center>
        <div className="AdminChip">Admin</div>
      </center>
      <List>
        {adminMenuListItem.map((menuItem, index) => (
          <SidebarItem
            key={menuItem.text}
            menuItem={menuItem}
            isTabletOrMobile={isTabletOrMobile}
            isActive={path === menuItem.rootpath}
            onClick={() =>
              handleItemClick(
                menuItem,
                index,
                adminMenuListItem,
                setAdminMenuListItem
              )
            }
          />
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
