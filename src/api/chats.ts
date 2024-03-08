import { supabase } from 'src/config/supabase-client';
import { configAxios } from "src/config/configAxios";
import Chat from 'src/types/Chats';


export async function getLastMessage(chatId: string) {
    const { data, error } = await supabase.from("messages").select("*").eq("chat_id", chatId).order("created_at", { ascending: false }).limit(1);
     if (error) {
        console.error('Error fetching last message:', error.message);
        return 'zut !'
     } else {
        console.log('Fetched last message:', data);
        return data[0];
   } 
}

export async function getAllChats(user_id: string): Promise<Chat[]> {
    // get all chats where the current user is a member
    const { data: chatIds ,error} = await supabase
        .from('chats')
        .select('id, profiles:chat_users!inner(profiles(*))')
        .eq('chat_users.profile_id', user_id)
        if (error) {
            console.error('Error fetching chat IDs:', error.message);
        } else {
            console.log('Fetched chat IDs:', chatIds);
        }
       
    if (!chatIds) return[];
    // get all chats with the user profiles
    const { data: chat, error: error2 } = await supabase
        .from('chats')
        .select('*, users:chat_users!inner(user:profiles(*)) , messages:messages(*)')
        .in('id', [chatIds.map((chat: { id: any; }) => chat.id)])

        if (error2) {
            console.error('Error fetching chat data:', error2.message);
        } else {
            console.log('Fetched chat data:', chat);
        }
        return chat || [];
}

export async function getAllChatsBack(AuthToken: string) {
    console.log('Requete get all chats')
    try{
        const data= await configAxios.get('/chats/', {
            headers: {
              'Authorization': 'Bearer ' + AuthToken
            }
        });
        return data.data
    } catch(error) {
        console.log(error)
    
}
}

export async function getAllMessages(chatId: string) {
    return await supabase.from("messages").select("*").eq("chat_id", chatId);
}

export async function sendMessage(user_id: string, chatId: string, newMessage: string) {
    const { data, error } = await supabase.from("messages").insert([
        {
        chat_id: parseInt(chatId),
        author_id: user_id,
        content: newMessage,
        },
    ]);
}