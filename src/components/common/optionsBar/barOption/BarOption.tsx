import "./BarOption.scss";

export default function BarOption(props: any) {
    return (
        <div className="barOption_main">
            <div className="barOption_icon">
                {props.icon}
            </div>
            <div className="barOption_title">
                {props.text}
            </div>
            <div className="barOption_description">
                {props.description}
            </div>
        </div>
    )
};