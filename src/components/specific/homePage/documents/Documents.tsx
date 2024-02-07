import './Documents.scss';
import Document from './document/Document';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { supabase } from 'src/config/supabase-client';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InputFileUpload from 'src/components/common/upload/UploadButton';
export default function Documents(props: any) {

    async function getBuckets() {
        const { data, error } = await supabase
            .storage
            .listBuckets()
            if (error) {
                console.log(error)
            }else{
                console.log(data)

            }
    }

   
    return (
        <div className="Documents_main">
            <div className='Documents_head'>
                <div className="Documents_title">
                    Mes Documents
                </div>
                <div className="Documents_link">
                    Voir tout
                </div>
            </div>
            <Button onClick={getBuckets} variant="contained" startIcon={<FolderIcon />} className="Documents_getBucketButton">Get Buckets</Button>
            <InputFileUpload />
            {/* <div className='Documents_container'>
                <Document icon={<FileIcon />} name={"Rapport de laboratoire"} date={"Jeu, Dec 16"} />
                <Document icon={<FileIcon />} name={"Ordonnance"} date={"Jeu, Dec 16"} />
                <Document icon={<FileIcon />} name={"Rapport de laboratoire"} date={"Jeu, Dec 16"} />
            </div> */}
        </div>
    );
}