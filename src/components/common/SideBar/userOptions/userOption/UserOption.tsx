import './UserOption.scss';

export default function UserOption(props: any) {
    return (
        <div className='userOption_main'>
            <div className="userOption_icon_bg">
                {props.userOptionIcon}
            </div>
            <div className="userOption_name">{props.userOptionName}</div>
        </div>
    );
};