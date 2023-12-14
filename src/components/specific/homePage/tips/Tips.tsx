import './Tips.scss';
import Tip from './tip/Tip';
import MasksIcon from '@mui/icons-material/Masks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function Tips(props: any) {
    return (
        <div className="Tips_main">
            <div className='Tips_head'>
                <div className="Tips_title">
                    Conseils
                </div>
                <div className="Tips_link">
                    Voir tout
                </div>
            </div>
            <div className='Tips_container'>
                <Tip icon={<MasksIcon />} text={"Revitalize Your Health: Key Insights on Nutrition, Fitness, Mental Balance, and Holistic Well-being Strategies for Everyday Wellness."} title={"Covid effects"} />
                <Tip icon={<LocalHospitalIcon />} text={"Unlocking Wellness: Journey to Optimal Health Through Mindful Habits, Nutrition, Exercise, and Holistic Well-being Practices."} title={"cancer prevention"} />
            </div>
        </div>
    );
}
