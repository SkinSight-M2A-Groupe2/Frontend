import './Appointments.scss';
import Appointment from './appointment/Appointment';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import MasksIcon from '@mui/icons-material/Masks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

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
                <Appointment icon={<MedicationLiquidIcon />} doctor={"Dr. Jhon Doe"} speciality={"Laboratoire"} date={"Jeu, Dec 16"} time={"15:00-15:30"} />
                <Appointment icon={<MasksIcon />} doctor={"Dr. Fred Tapi"} speciality={"Généralist"} date={"Jeu, Dec 16"} time={"15:00-15:30"} />
                <Appointment icon={<LocalHospitalIcon />} doctor={"Dr. Alex Janny"} speciality={"Dermatologue"} date={"Jeu, Dec 16"} time={"15:00-15:30"} />
            </div>
        </div>
    );
}
