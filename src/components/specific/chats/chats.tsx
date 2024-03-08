import React from 'react';
//import { makeStyles } from '@mui/material/core/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material//Box';
import Divider from '@mui/material//Divider';
import TextField from '@mui/material//TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material//List';
import ListItem from '@mui/material//ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import Item from '@mui/material/Grid';
import { Chat } from '@mui/icons-material';
import ChatSideBar from './chat/ChatSideBar';
import './chats.scss';
import {  ChatConversation } from './conversations/ChatConversation';
/* const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto'
    }
  });
 */
const Chats = () => {
 

  return (
    <div className='chat_container'>
    
        <ChatSideBar/>
        <ChatConversation/>
    </div>
  );
}

export default Chats;