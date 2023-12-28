import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Divider } from "@mui/material";
import { MenuList } from "../MenuList";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const [menuListItem, setMenuListItem] = useState(MenuList);
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
      <Divider />
      <List>
        {["Round Status"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
