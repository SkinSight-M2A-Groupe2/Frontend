import { Avatar, Box, IconButton, List, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import ChatElements from "./ChatElements";
import { useAuth } from "src/hooks/Auth";
import Chat  from "src/types/Chats";
import { getAllChats } from "src/api/chats";
const ChatSideBar = () => {

    const { profile,session } = useAuth();
    const [chatList, setAllChats] = useState<Chat[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
  
    const incomingMessages = [
      {
          id: 1,
          message: "Hello",
          user_id: 1,
      },{
          id: 2,
          message: "How are you",
          user_id: 2,
      },{
          id: 3,
          message: "I am good",
          user_id: 1,
      }
    ];
  
    useEffect(() => {
        console.log('profile',profile)
      setLoading(true);
      if (profile) {
        const fetchAllChats = async () => {
          try{
            const allChatsData : Chat[] = await getAllChats(profile.id);
              setAllChats(allChatsData);
                console.log('chatList state',chatList)
          }catch{
  
          }finally{
            setLoading(false);
          }       
        };
        fetchAllChats();
    }
    }, [profile]);
   /*  const ChatList=[
        {
            id:1,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:2,
            name:'Simon Mignolet',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:3,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:4,
            name:'Remy Sharp',
            message:'Nice ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:5,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:6,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:7,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:8,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:9,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
        {
            id:10,
            name:'Remy Sharp',
            message:'How are you ?',
            time:'12:00',
            avatar:'/static/images/avatar/1.jpg'
        },
    ] */
    return (
        <>
        <Box 
            sx={{
                position:'relative',
                height: '100%',
                width:320,
                backgroundColor: '#7e9fb01a',
                boxShadow: '0 0 2px rgba(0,0,0,0.3)',
            }}
        >
        <Stack p ={3} spacing={2}>
            <Stack 
                direction='row'
                alignItems={'center'}
                justifyContent={'space-between'}
                >
                <Typography variant='h6'>Chats</Typography>
                <IconButton>
                    <MapsUgcIcon/>
                </IconButton>
            </Stack>
            <Stack sx={{width:'100%'}}>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Rechercher les chats"
        inputProps={{ 'aria-label': 'rechercher les chats' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
           
            </Stack>
            <Divider/>
            <Stack spacing={2}>
            <Box style={{maxHeight: '75vh', overflow: 'auto'}}>
                {/* if loading is false show the list */}
                {loading ? (
                <p>Loading...</p>
            ) : (
                chatList.map((chat) => (
                    <List sx={{ width: '100%', overflowY: 'auto', maxWidth: '100%', bgcolor: 'background.paper' }} key={chat.id}>
                        <ChatElements user_id={profile.id} chat={chat} />
                    </List>
                ))
            )}
            </Box>
           </Stack>
        </Stack>
        </Box>
        </>
    );
};

export default ChatSideBar;