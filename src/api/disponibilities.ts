// import { supabase } from 'src/config/supabase-client';
import { configAxios } from "src/config/configAxios";
// import { useAuth } from 'src/hooks/Auth';

export async function getDisponibilities(
  AuthToken: string,
  id_professional: number | null
) {
  try {
    const data = await configAxios.get(
      `/disponibility/professional/${id_professional}`,
      {
        headers: {
          Authorization: "Bearer " + AuthToken,
        },
      }
    );
    return data.data[0];
  } catch (error) {
    console.log(error);
  }
}
