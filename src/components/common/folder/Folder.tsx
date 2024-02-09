import FolderIcon from '@mui/icons-material/Folder';
import './Folder.scss'
interface Folder{
    name: string;
    icon : string;
    updated_at: string;
}

export default function FolderElement({folder}: any) {
    return (
        <div className="folder_main">
            <div className="foldericon">
                <FolderIcon fontSize='large'/>
            </div>
            <div className="folder_name">
                {folder.name}
            </div>
            <div className="folder_date">
                {folder.date_modification}
            </div>
        </div>
    );
    
}