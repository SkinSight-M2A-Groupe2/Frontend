// import { supabase } from 'src/config/supabase-client';
import { configAxios } from "src/config/configAxios";
// import { useAuth } from 'src/hooks/Auth';

export async function getAllProfessionals(AuthToken: string) {
  try {
    const data = await configAxios.get("/professionals/all", {
      headers: {
        Authorization: "Bearer " + AuthToken,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
