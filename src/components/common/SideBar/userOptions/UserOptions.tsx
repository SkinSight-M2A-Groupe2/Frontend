import './UserOptions.scss';
import UserOption from './userOption/UserOption';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function UserOptions() {
    return (
        <div className='userOptions_main'>
            <UserOption userOptionName="Parametres" userOptionIcon={<SettingsRoundedIcon />} />
            <UserOption userOptionName="Deconnexion" userOptionIcon={<LogoutOutlinedIcon />} />
        </div>
    );
};