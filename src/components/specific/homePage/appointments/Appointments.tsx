import './Appointments.scss';
import Appointment from './appointment/Appointment';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

export default function Appointments(props: any) {
    return (
        <div className="Appointment_main">
            <div className='Appointment_head'>
                <div className="Appointment_title">
                    Mes Rendez-vous
                </div>
                <div className="Appointment_link">
                    Voir tout
                </div>
            </div>
            <div className='Appointments_container'>
                <Appointment icon={<CalendarMonthRoundedIcon />} doctor={"Dr. Jhon Doe"} speciality={"Generalist"} date={"Jeu, Dec 16"} time={"15:00-15:30"} />
                <Appointment icon={<CalendarMonthRoundedIcon />} doctor={"Dr. Jhon Doe"} speciality={"Generalist"} date={"Jeu, Dec 16"} time={"15:00-15:30"} />
                <Appointment icon={<CalendarMonthRoundedIcon />} doctor={"Dr. Jhon Doe"} speciality={"Generalist"} date={"Jeu, Dec 16"} time={"15:00-15:30"} />
            </div>
        </div>
    );
}
