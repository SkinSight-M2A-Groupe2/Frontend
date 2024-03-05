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

//export async function getBucketObjects(bucketId: string): Promise<any[]> {}

export async function UploadDocuement(bucketId: string, file: File): Promise<any> {
    try {
        const { data, error } = await supabase.storage.from(bucketId).upload(file.name, file);
        if (error) {
            throw error
        } else {
            return data
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error
    }
}