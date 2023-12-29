import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Chip, Divider } from "@mui/material";
import { MenuList } from "../MenuList";
import { AdminMenuList } from "../AdminMenuList";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const [menuListItem, setMenuListItem] = useState(MenuList);
  const [adminMenuListItem, setAdminMenuListItem] = useState(AdminMenuList);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {}, [path]);

  return (
    <div>
      <List>
        {menuListItem.map((menuItem, index) => (
          <ListItem
            onClick={() => {
              if (menuItem.child.length === 0) {
                console.log("Clicked on ListItem", menuItem.url);
                navigate(menuItem.url);
              }

              menuListItem[index].active = !menuItem.active;
              setMenuListItem([...menuListItem]);
            }}
            sx={{
              cursor: "pointer",
              color: path === menuItem.rootpath ? "#0073E6" : "#E5F1FC",
              border:
                path === menuItem.rootpath
                  ? "2px solid #0073E6"
                  : "transparent",
              backgroundColor:
                path === menuItem.rootpath ? "#E5F1FC" : "transparent",
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ListItemIcon>
              <img
                style={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "1.25rem",
                  margin: "0 auto",
                  color: path === menuItem.rootpath ? "#0073E6" : "#8E92BC",
                  backgroundcolor:
                    path === menuItem.rootpath ? "#0073E6" : "#8E92BC",
                }}
                src={menuItem?.icon}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontSize: "14px",
                  fontWeight: 600,
                  color: path === menuItem.rootpath ? "#0073E6" : "#8E92BC",
                },
              }}
              primary={menuItem.text}
            />
          </ListItem>
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

      {adminMenuListItem.map((menuItem, index) => (
        <ListItem
          onClick={() => {
            if (menuItem.child.length === 0) {
              console.log("Clicked on ListItem", menuItem.url);
              navigate(menuItem.url);
            }

            adminMenuListItem[index].active = !menuItem.active;
            setAdminMenuListItem([...adminMenuListItem]);
          }}
          sx={{
            cursor: "pointer",
            color: path === menuItem.rootpath ? "#0073E6" : "#E5F1FC",
            border:
              path === menuItem.rootpath ? "2px solid #0073E6" : "transparent",
            backgroundColor:
              path === menuItem.rootpath ? "#E5F1FC" : "transparent",
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            style={{
              maxWidth: "1rem",
              margin: "auto",
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "1.25rem",
                margin: "0 auto",
                color: path === menuItem.rootpath ? "#0073E6" : "#8E92BC",
                backgroundcolor:
                  path === menuItem.rootpath ? "#0073E6" : "#8E92BC",
              }}
              src={menuItem?.icon}
            />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              style: {
                fontSize: "14px",
                fontWeight: 600,
                textAlign: "center",
                // color: "#8E92BC",
                color: path === menuItem.rootpath ? "#0073E6" : "#8E92BC",
              },
            }}
            primary={menuItem.text}
          />
        </ListItem>
      ))}
    </div>
  );
};

export default Sidebar;
