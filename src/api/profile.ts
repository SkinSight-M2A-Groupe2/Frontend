import { configAxios } from "src/config/configAxios";

export async function getBuckets() {
  /* const { data, error } = await supabase
    .from('buckets')
    .select('*')
  if (error) throw error
  return data */
}

export async function MygetProfile(){
    const response= await configAxios.get('users/profile')
}