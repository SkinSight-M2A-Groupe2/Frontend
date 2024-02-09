import { supabase } from 'src/config/supabase-client';
import { configAxios } from "src/config/configAxios";

export async function getProfile() {
    
}

export async function getBuckets(): Promise<any[]> {
    try {
        const { data, error } = await supabase.storage.listBuckets();
        if (error ) {
            throw error
        } else {
            return data// Set the bucket data in state
        }
    } catch (error) {
        console.error('Error fetching buckets:', error);
        throw error
    }
}