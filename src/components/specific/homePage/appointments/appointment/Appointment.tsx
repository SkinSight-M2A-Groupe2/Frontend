import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import './Appointment.scss';

export default function Appointment(props: any) {
    return (
        <div className='Appointment_container'>
            <div className="Appointment_icon">
                {props.icon}
            </div>
            <div className="Appointment_doctor">
                {props.doctor}
            </div>
            <div className="Appointment_speciality">
                {props.speciality}
            </div>
            <div className="appointment_date_time">
                <div className="appointment_date_time_subcontainer">
                    <div className="Appointment_date_time_icon">
                        <CalendarMonthRounded />
                    </div>
                    <div className="Appointment_date_time_value">
                        {props.date}
                    </div>
                </div>
                <div className="appointment_date_time_subcontainer">
                    <div className="Appointment_date_time_icon">
                        <AccessTimeRoundedIcon />
                    </div>
                    <div className="Appointment_date_time_value">
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    );
}
