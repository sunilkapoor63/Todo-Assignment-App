import React from 'react';
import { List, ListItem, ListItemText, Avatar, ListItemIcon } from '@material-ui/core';
import { Home, Star, CalendarToday, Assignment } from '@material-ui/icons';
import '../styles.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Avatar src="https://via.placeholder.com/150" alt="User" />
      <List>
        <ListItem button>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="All Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Star /></ListItemIcon>
          <ListItemText primary="Important" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Assignment /></ListItemIcon>
          <ListItemText primary="Planned" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Assignment /></ListItemIcon>
          <ListItemText primary="Assigned to me" />
        </ListItem>
      </List>
    </aside>
  );
};

export default Sidebar;
