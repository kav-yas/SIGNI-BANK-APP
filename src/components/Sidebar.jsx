import React from "react";
import { List, ListItem, ListItemText, Drawer } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/transactions">
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button component={Link} to="/payments">
          <ListItemText primary="Payments" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
