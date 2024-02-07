import './Page.scss';
import { useNavigate } from "react-router-dom";

export default function Page(props: any) {
    const navigate = useNavigate();
    const handleClick = () => {
        props.onClick(props.pageName);
        if(props.pageName === "Mes Documents") navigate('/documents');
        if(props.pageName === "Mes Analyses") navigate('/analyses');
        if(props.pageName === "Mes Consultations") navigate('/consultations');
        if(props.pageName === "Mes Rendez-vous") navigate('/rendez-vous');
        
    }

    return (
        <div className='page_main' onClick={handleClick}>
            <div className={props.isSelected ? "page_icon_bg selected" : "page_icon_bg"}>
                {props.pageIcon}
            </div>
            <div className="page_name">{props.pageName}</div>
        </div>
    );
};