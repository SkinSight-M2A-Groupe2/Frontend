import "./BarOption.scss";
import { useNavigate } from "react-router-dom";

export default function BarOption(props: any) {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.link);
    };

    return (
        <div className="barOption_main" onClick={handleClick}>
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
    );
};