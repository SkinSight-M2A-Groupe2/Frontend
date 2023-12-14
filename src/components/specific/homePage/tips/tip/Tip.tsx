import './Tip.scss';

export default function Tip(props: any) {
    return (
        <div className='Tip_container'>
            <div className="Tip_icon">
                {props.icon}
            </div>
            <div className="Tip_title_text">
                <div className="Tip_title">
                    {props.title}
                </div>
                <div className="Tip_text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}
