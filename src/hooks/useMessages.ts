import { supabase } from "src/config/supabase-client";
import { useState } from "react";


export const useMessages = (channel: string) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [error, setError] = useState("");

  const getInitialMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select('*')
      .eq("channel", channel)
      .range(0, 49)
      .order("id", { ascending: false });
    if (error) {
      setError(error.message);
      return;
    }

    setMessages(data);
  };

  return { messages, getInitialMessages, error };
}