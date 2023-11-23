import './HomePage.scss';
import Appointments from './appointments/Appointments';
import WelcomeUser from './welcomeUser/WelcomeUser';

export default function HomePage(props: any) {
    return (
        <div className='homePage_container'>
            <WelcomeUser username={"Mohcine EL BAH"} />
            <Appointments />
        </div>
    );
}
