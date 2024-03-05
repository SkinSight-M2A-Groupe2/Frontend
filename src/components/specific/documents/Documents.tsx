import './Documents.scss';
import Document from './document/Document';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { supabase } from 'src/config/supabase-client';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { Button, CircularProgress } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InputFileUpload from 'src/components/common/upload/UploadButton';
import { useEffect, useState } from 'react';
import FolderGallery from 'src/components/common/folderGallery/FolderGallery';
import { getBuckets } from 'src/api/document';
export default function Documents(props: any) {
    const [buckets, setBuckets] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // Fetch buckets when the component mounts
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getBuckets(); // Call getBuckets function
                setBuckets(data); // Set buckets state with the retrieved data
            } catch (error) {
                console.error('Error fetching buckets:', error);
            }finally {
                setLoading(false);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);
    
    async function getAPIBucket() {
        try {
            const { data, error } = await supabase.from('buckets').select('*');
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        } catch (error) {
            console.error('Error fetching buckets:', error);
        }
    }
   
    return (
        <div className="Documents_container">
            <div className='Documents_main'>
                <div className="Documents_title">
                    Mes Documents
                </div>
                <div className="Documents_link">
                    Voir tout
                </div>
                
            <Button onClick={getBuckets} variant="contained" startIcon={<FolderIcon />} className="Documents_getBucketButton">Get Buckets</Button>
            <InputFileUpload />
            {/* <div className='Documents_container'>
                <Document icon={<FileIcon />} name={"Rapport de laboratoire"} date={"Jeu, Dec 16"} />
                <Document icon={<FileIcon />} name={"Ordonnance"} date={"Jeu, Dec 16"} />
                <Document icon={<FileIcon />} name={"Rapport de laboratoire"} date={"Jeu, Dec 16"} />
            </div> */}
        
            {loading ? <CircularProgress /> :  <FolderGallery buckets={buckets} />}
           

            <Button onClick={getAPIBucket}>Test API</Button>
            </div>
        </div>
    );
}