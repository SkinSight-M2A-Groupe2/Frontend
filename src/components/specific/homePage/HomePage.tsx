import './HomePage.scss';
import Appointments from './appointments/Appointments';
import NearBys from './nearbys/NearBys';
import Tips from './tips/Tips';
import WelcomeUser from './welcomeUser/WelcomeUser';

export default function HomePage(props: any) {
    //if user is logged in
    return (
        <div className='homePage_container'>
            <WelcomeUser username={"Mohcine EL BAH"} />
            <Appointments />
            <div className="homePage_tips_nearby">
                <Tips />
                <NearBys />
            </div>
        </div>
    );
}
