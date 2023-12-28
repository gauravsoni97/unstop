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
              backgroundColor:
                path === menuItem.rootpath ? "#F5F5F7" : "transparent",
              "&:hover": {
                backgroundColor: "#eee", // Add a different background color on hover
              },
            }}
            button
            style={{ borderRadius: ".5rem", marginBottom: ".3rem" }}
          >
            <ListItemIcon
              style={{
                maxWidth: "1rem",
                margin: "auto",
              }}
            >
              <img
                style={{
                  height: "24px",
                  width: "24px",
                  minWidth: "1rem",
                  color: path === menuItem.rootpath ? "black" : "#8E92BC",
                }}
                src={menuItem?.icon}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontSize: "14px",
                  fontWeight: 600,
                  // color: "#8E92BC",
                  color: path === menuItem.rootpath ? "black" : "#8E92BC",
                },
              }}
              primary={menuItem.text}
            />
          </ListItem>
        ))}
      </List>
      <div
        style={{
          margin: "1rem auto",
          width: "80%",
          height: "1px",
          border: "1px dotted gray",
        }}
      ></div>
      <center>
        <Chip label="Admin" style={{ color: "red" }} variant="outlined" />
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
            backgroundColor:
              path === menuItem.rootpath ? "#F5F5F7" : "transparent",
            "&:hover": {
              backgroundColor: "#eee", // Add a different background color on hover
            },
          }}
          button
          style={{ borderRadius: ".5rem", marginBottom: ".3rem" }}
        >
          <ListItemIcon
            style={{
              maxWidth: "1rem",
              margin: "auto",
            }}
          >
            <img
              style={{
                height: "24px",
                width: "24px",
                minWidth: "1rem",
                color: path === menuItem.rootpath ? "black" : "#8E92BC",
              }}
              src={menuItem?.icon}
            />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              style: {
                fontSize: "14px",
                fontWeight: 600,
                // color: "#8E92BC",
                color: path === menuItem.rootpath ? "black" : "#8E92BC",
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
