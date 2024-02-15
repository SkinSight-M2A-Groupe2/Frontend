import FolderIcon from '@mui/icons-material/Folder';
import './Folder.scss'
import { useNavigate } from "react-router-dom";

interface Folder{
    name: string;
    icon : string;
    onClick: (pageName: string) => void;
    updated_at: string;
}
interface FolderElementProps {
    folder: Folder;
    onClick: (folderName: string) => void;
  }

/* export default function FolderElement({folder}: any) {
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
    );} */
 const FolderElement: React.FC<FolderElementProps> = ({ folder }) => {
        const navigate = useNavigate();
        const handleClick = () => {
            navigate(`/documents/${folder.name}`);
          };
        
        return (
            <div className="folder_main" onClick={handleClick}>
                <div className="foldericon">
                    <FolderIcon fontSize='large'/>
                </div>
                <div className="folder_name">
                    {folder.name}
                </div>
                <div className="folder_date">
                    {folder.updated_at}
                </div>
            </div>
        );
        
    }
    export default FolderElement; 
 