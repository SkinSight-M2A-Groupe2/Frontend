import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import FolderElement from '../folder/Folder';
import './FolderGallery.scss';
import { useNavigate } from "react-router-dom";


interface Bucket {
  id: string;
  name: string;
  updated_at: string;
}

interface FolderGalleryProps {
  buckets: Bucket[];
}
 
const FolderGallery: React.FC<FolderGalleryProps> = ({ buckets }) => {
  // State to hold the list of folders
  const [folders, setFolders] = useState<{ name: string; folders: any[]; images: string[] }[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Transform bucket data into folder structure

    const folderData = buckets.map(bucket => ({
      name: bucket.name,
      folders: [], // You can fetch folder data for each bucket if needed
      images: [],
      update_at: bucket.updated_at
        // You can fetch image data for each bucket if needed
    }));
    
    setFolders(folderData);
  }, []);

  const handleFolderClick = (folderName: string) => {
    navigate(`/documents/${folderName}`);
  };

  const renderFolders = (folders: any[]) => {
    console.log(folders); 
    return folders.map((folder, index) => (
      <Grid className='folder_galery_item' item key={index}>
        <FolderElement folder={folder} onClick={handleFolderClick}/>
      </Grid>
    ));
  };

  return (
    
    <Grid wrap='wrap' className='folder_galery_container' container xl spacing={6}>
      {renderFolders(folders)}
    </Grid>

  );
};

export default FolderGallery;