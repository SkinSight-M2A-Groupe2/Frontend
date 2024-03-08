import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Chat from 'src/types/Chats';
const ChatElements = ({ chat,user_id }: { chat: Chat ; user_id :any } ) => {
 // console.log('chat ListItem',chat)
  // get the users who not the current user
  
  console.log(chat)
  const otherUsers = chat.users.filter((userData) => userData.user.id !== user_id);
  const otherUser = otherUsers[0].user;
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

    return (
      
        
        <ListItem sx={{
          '&:hover': {
            backgroundColor: '#f8faff',
          },
          backgroundColor:'blue',
        
        }} key={chat.id} alignItems="flex-start">
           <ListItemAvatar>
        <Avatar alt={otherUser.last_name || 'null'} src={otherUser.last_name || 'null'} />
      </ListItemAvatar>
          <ListItemText
            primary={(otherUser.last_name || 'null') + ' ' + (otherUser.first_name || 'null')}            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {chat.messages[0] ? chat.messages[0].content : 'No message'}
                </Typography>
               <Typography align="right">
               {chat.messages[0] ? formatTimestamp(chat.messages[0].created_at) : 'No Time'}               </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      
    );
};
export default ChatElements;