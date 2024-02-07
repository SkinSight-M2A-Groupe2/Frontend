import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { supabase } from 'src/config/supabase-client';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
   
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        console.log(file);
        }
    };
    const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        console.log(files);
        if (files && files.length > 0) {
          setSelectedFile(files[0]);
          
        }
      };

      async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;
        if (!files || files.length === 0) {
          return;
        }else{
            const { data, error } = await supabase.storage.from('test').upload('file_path', files[0])
            if (data) {
            getMedia();
            } else {
            // Handle success
            }
        }
      }
      async function getMedia() {
        const { data, error } = await supabase.storage.from('test').list('file_path')
        if (error) {
          console.log(error)
        } else {
          console.log(data)
        }
      }
      const getFileIcon = (fileName: string): React.ReactNode => {
        // Extract file extension
        const extension = fileName.split('.').pop()?.toLowerCase();
    
        // Map common file extensions to corresponding icons
        const iconMap: { [key: string]: React.ReactNode } = {
            pdf: <PictureAsPdfIcon/>, // IconComponent should be replaced with the appropriate PDF icon
            png: <ImageIcon/>, // IconComponent should be replaced with the appropriate DOC icon
            // Add more file types as needed
          };
    
        // Return icon based on file extension if available, otherwise return generic file icon
        return iconMap[extension ?? ''] ?? <InsertDriveFileIcon />;
      };
      

  return (
    <div>
    <Button component="label" variant="contained" startIcon={<DriveFolderUploadIcon />}>
     Selectionner les fichiers
      <VisuallyHiddenInput type="file" onChange={handleFileChange2} />
    </Button>
    
    {selectedFile && (
        <div>
          <div>Selected File:</div>
          <div>{getFileIcon(selectedFile.name)}</div>
          <div>{selectedFile.name}</div> 
          {/* <Button onClick={handleUpload} variant="contained" startIcon={<CloudUploadIcon />}>
            Envoyer
          </Button> */}
        </div>
       
      )}
    
    </div>
  );
}