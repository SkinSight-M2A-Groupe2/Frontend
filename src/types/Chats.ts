/* type Chats ={

} */

interface User {
    id: string;
    email: string;
    phone: string | null;
    last_name: string | null;
    created_at: string | null;
    first_name: string | null;
    is_professional: boolean;
}

interface UserObject {
    user: User;
}
interface Message {
    id: number;
    content:number;
    author_id: number;
    created_at: string;

}
interface Chat {
    id: number;
    created_at: string;
    users: UserObject[];
    messages: Message[];
}

export default Chat;