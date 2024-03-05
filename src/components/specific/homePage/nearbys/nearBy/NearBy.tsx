import './NearBy.scss';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';

export default function NearBy(props: any) {
    return (
        <div className="NearBy_container">
            <div className='NearBy_container'>
                <div className="NearBy_icon">
                    {props.icon}
                </div>
                <div className="NearBy_info">
                    <div className="NearBy_name">
                        {props.name}
                    </div>
                    <div className="NearBy_address">
                        {props.address}
                    </div>
                </div>
                <div className="NearBy_distance">
                    <div className="NearBy_distance_icon">
                        <NearMeRoundedIcon />
                    </div>
                    <div className="NearBy_distance_text">
                        {props.distance} m
                    </div>
                </div>
            </div>
        </div>
    );
}
