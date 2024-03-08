import { Avatar, Box, Paper, Typography } from "@mui/material";
import { RealtimeChannel } from "@supabase/supabase-js";
import React, { useEffect, useRef, useState } from "react";
import { getAllChats } from "src/api/chats";
import { supabase } from 'src/config/supabase-client';
import { useAuth } from "src/hooks/Auth";




export const ChatBody = () => {
  const [messages, setMessages] = useState<any[]>([]);
  let myChannel = null;
  const [error, setError] = useState("");
  const [allChats, setAllChats] = useState<any[]>([]);
  const { profile,session } = useAuth();


  useEffect(() => {
   // Si le profile est chargé on peut charger les messages sinon on attend
   /*  if (profile) {
      
        const fetchAllChats = async () => {
            const allChatsData :any = await getAllChats(profile.id);
            if (allChatsData!==null || allChatsData!==undefined) {
                console.log('allChatsData.data',allChatsData.data)
              
            }
       
        };
        fetchAllChats();
    } */
    
    //console.log('profile',profile)
   /*  const fetchAllChats = async () => {
        if (currentUser) {
            const allChatsData = await getAllChats();
            setAllChats(allChatsData);
        }
    };

    fetchAllChats();

    // Set up the subscription to listen for changes in chats
    const chatsWatcher = supabase
        .channel('custom-all-channel')
        .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'chats' ,filter: 'user_id = ' + currentUser.id},
            async () => {
                console.log('chats changed');
                const updatedChatsData = await getAllChats();
                setAllChats(updatedChatsData);
            }
        )
        .subscribe();

    return () => {
        // Unsubscribe from the channel when the component unmounts
        chatsWatcher.unsubscribe();
    }; */
}, []);

/*   const container = useRef<HTMLDivElement>(null)

  const Scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } = container.current as HTMLDivElement
    if (scrollHeight <= scrollTop + offsetHeight + 100) {
      container.current?.scrollTo(0, scrollHeight)
    }
  }

  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView()); */
  /* useEffect(() => {
    Scroll()
  }, [messages]) */
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (chatEndRef.current) {
          chatEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
  }, []);

    const incomingMessages = [
        {
            id: 1,
            message: "Hellokfhifzeoifnioezfzefoiezfneznfmnezofnzefnezufnoienu lorem ipsum dolor sit amet, <br>consectetur adipiscing elit lorem             ",
            user_id: 1,
            user_name: "Lionel Messi",
            avatar: "avatar1.jpg",
            timestamp: "10:00",
        },{
            id: 2,
            message: "How are you",
            user_id: 2,
            user_name: "Christiano Ronaldo",
            avatar: "avatar2.jpg",
            timestamp: "10:11",
        },{
            id: 3,
            message: "I am good",
            user_id: 1,
            user_name: "Lionel Messi",
            avatar: "avatar1.jpg",
            timestamp: "10:15",
        },{
          id: 3,
          message: "I am good",
          user_id: 1,
          user_name: "Lionel Messi",
          avatar: "avatar1.jpg",
          timestamp: "10:15",
      },{
        id: 3,
        message: "I am good",
        user_id: 1,
        user_name: "Lionel Messi",
        avatar: "avatar1.jpg",
        timestamp: "10:15",
    },{
      id: 3,
      message: "I am good",
      user_id: 1,
      user_name: "Lionel Messi",
      avatar: "avatar1.jpg",
      timestamp: "10:15",
  },{
    id: 3,
    message: "I am good",
    user_id: 1,
    user_name: "Lionel Messi",
    avatar: "avatar1.jpg",
    timestamp: "10:15",
},{
  id: 3,
  message: "I am good",
  user_id: 1,
  user_name: "Lionel Messi",
  avatar: "avatar1.jpg",
  timestamp: "10:15",
},{
  id: 3,
  message: "I am good",
  user_id: 1,
  user_name: "Lionel Messi",
  avatar: "avatar1.jpg",
  timestamp: "10:15",
},{
  id: 3,
  message: "I am good",
  user_id: 1,
  user_name: "Lionel Messi",
  avatar: "avatar1.jpg",
  timestamp: "10:15",
},{
  id: 3,
  message: "I am good",
  user_id: 1,
  user_name: "Lionel Messi",
  avatar: "avatar1.jpg",
  timestamp: "10:15",
}
      ];

      
      const reversedMessages = [...incomingMessages].reverse();
    return (
        <Box  width={"100%"} sx={{ flexGrow: 1,overflowY:'scroll' }}>
            <Box sx={{ height: "100%", overflowY: "auto", padding: 2 }}>
            {incomingMessages.map((message, index) => {
                    const isUser = message.user_id === 1;
                   // const isBot = message.user_id === 1;
                    return (<Box 
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: isUser ? "flex-start" : "flex-end",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: isUser ? "row" : "row-reverse",
                            alignItems: "center",
                            maxWidth:"60%",
                          }}
                        >
                          <Avatar alt={message.user_name} src={message.user_name} />
                          <Paper
                            variant="outlined"
                            sx={{
                              p: 2,
                              ml: isUser ? 1 : 0,
                              mr: isUser ? 0 : 1,
                              backgroundColor: isUser ? "primary.light" : "secondary.light",
                              borderRadius: isUser ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
                            }}
                          >
                            <Typography variant="body1" align="left">{message.message}</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ textAlign:"right" }}>
                                    {message.timestamp}
                                </Typography>
                          </Paper>
                        </Box>
                      </Box>
                      

                    );
                })}
             <div ref={chatEndRef} />  
            </Box>
            
        </Box>
        
        
    );
};