import './NearBys.scss';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import MasksIcon from '@mui/icons-material/Masks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import NearBy from './nearBy/NearBy';

export default function NearBys(props: any) {
    return (
        <div className="NearBys_main">
            <div className='NearBys_head'>
                <div className="NearBys_title">
                    Proche de chez vous
                </div>
                <div className="NearBys_link">
                    Voir tout
                </div>
            </div>
            <div className="NearBys_container">
                <NearBy icon={<MedicationLiquidIcon />} name={"Hopital St.George"} address={"3 Avenue d'istanbul"} distance={500} />
                <NearBy icon={<MasksIcon />} name={"Dr. Jhon Doe"} address={"1 Avenue de Paris"} distance={100} />
                <NearBy icon={<LocalHospitalIcon />} name={"Laboratoire"} address={"5 Avenue de Casablanca"} distance={900} />
                <NearBy icon={<MasksIcon />} name={"Dr. Janette Doe"} address={"1 Avenue de Rabat"} distance={100} />
            </div>
        </div>
    );
}
