import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
const ChatElements = ({chat}:any) => {
    return (
      
        
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={chat.name} src={chat.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={chat.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {chat.message}
                </Typography>
                {chat.time}
              </React.Fragment>
            }
          />
        </ListItem>
      
    );
};
export default ChatElements;