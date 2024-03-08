import { Avatar, Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { ChatBody } from "./ChatBody";
import { useAuth } from "src/hooks/Auth";
import Chat from "src/types/Chats";
import { getAllChats } from "src/api/chats";


export const ChatConversation = ({ chat }: any) => {
 /*  const { profile,session } = useAuth();
  const [allChats, setAllChats] = useState<Chat[]>([]);
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
    setLoading(true);
    if (profile) {
      
      const fetchAllChats = async () => {
        try{
          const allChatsData : Chat[] = await getAllChats(profile.id);
            setAllChats(allChatsData);
              console.log('allChats State',allChats)
        
          
        }catch{

        }finally{
          setLoading(false);
        }
        
     
      };
      fetchAllChats();
  }
  }, []); */
    return (
       <Stack height={"100%"} maxHeight={"100vh"} width={"100%"}>
       
       {/* Header */}
        <Box
        sx={{height:100,width:"100%",backgroundColor:"#f8faff",boxShadow:"0px 0px 2px rgba(0,0,0.25)"}}>
            <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} sx={{width:"100%", height:"100%"}}>
             <Stack direction={"row"} spacing={2}>
               {/*  <Avatar alt={chat.name} src={chat.avatar} /> */}
               <Avatar alt={"name"} src={"avatar"} />
                <Stack>
                  <Typography variant={"h6"}>Name</Typography>
                </Stack>
             </Stack>
            </Stack>   
        </Box>
        {/* Body */}
      <ChatBody />
        {/* Footer */}
            <Box sx={{
                width:"100%", 
                backgroundColor:"#f8faff",
                boxShadow:"0px 0px 2px rgba(0,0,0.25)"
                }}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <TextField fullWidth placeholder="Entrez un message" variant="filled"  InputProps={{
                            disableUnderline: true,
                            startAdornment:
                          <InputAdornment position="start">
                            <IconButton>
                              <InsertLinkIcon/>
                            </IconButton>
                          </InputAdornment>,
                          endAdornment:
                            <InputAdornment position="end">
                                <IconButton>
                                <SendIcon/>
                                </IconButton>
                            </InputAdornment>
                        }}/>


                    </Stack>
            </Box> 
       </Stack>
    )
};