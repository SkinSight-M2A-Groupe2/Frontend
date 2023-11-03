import './UserOption.scss';

export default function UserOption() {
    return (
        <div className='userOption_main'>
            <div className="userOption_icon_bg">
                <img src={require('src/assets/icons/logout.png')} alt="setting icon" className='userOption_icon' />
            </div>
            <div className="userOption_name">Logout</div>
        </div>
    );
};