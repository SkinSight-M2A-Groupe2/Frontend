import './Profile.scss';

export default function Profile(props: any) {
    return (
        <div className='profile_main'>
            <img src={props.profileImg} alt='profile' className='profile_photo' />
            <p className='profile_name'>{props.profileName}</p>
            <p className='profile_role'>{props.profileRole}</p>
        </div>
    );
};