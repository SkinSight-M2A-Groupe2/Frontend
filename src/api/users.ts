import { supabase } from 'src/config/supabase-client';
import { configAxios } from "src/config/configAxios";
import { useAuth } from 'src/hooks/Auth';


export async function getUsers() {
    /* const response = await configAxios.get('users')
    return response.data */
}
export async function getProfile(AuthToken: string) {
    console.log(AuthToken)
    try{
       const data= await configAxios.get('/users/', {
            headers: {
              'Authorization': 'Bearer ' + AuthToken
            }
        });
        return data.data
    } catch(error) {
        console.log(error)
    }
    
}