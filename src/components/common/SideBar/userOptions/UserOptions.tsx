import './UserOptions.scss';
import UserOption from './userOption/UserOption';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function UserOptions() {
    return (
        <div className='userOptions_main'>
            <UserOption userOptionName="Deconnexion" userOptionIcon={<LogoutOutlinedIcon />} />
        </div>
    );
};