import VerticalBorder from "../verticalBorder/VerticalBorder";
import BarOption from "./barOption/BarOption";
import "./OptionsBar.scss";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

export default function OptionsBar() {
    return (
        <div className="optionsBar_main">
            <VerticalBorder height="90%" />
            <div className="optionsContainer">
                <BarOption icon={<CalendarMonthRoundedIcon />} text="Prendre Rendez-vous" description="Vous permet de prendre un rendez-vous" link="/prendre-rendez-vous" />
                <BarOption icon={<CalendarMonthRoundedIcon />} text="Prendre Rendez-vous" description="Vous permet de prendre un rendez-vous" />
                <BarOption icon={<CalendarMonthRoundedIcon />} text="Prendre Rendez-vous" description="Vous permet de prendre un rendez-vous" />
                <BarOption icon={<CalendarMonthRoundedIcon />} text="Prendre Rendez-vous" description="Vous permet de prendre un rendez-vous" />
            </div>
        </div>
    )
};