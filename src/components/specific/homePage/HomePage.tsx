import { useEffect, useState } from 'react';
import './HomePage.scss';
import Appointments from './appointments/Appointments';
import NearBys from './nearbys/NearBys';
import Tips from './tips/Tips';
import WelcomeUser from './welcomeUser/WelcomeUser';
import {useAuth} from 'src/hooks/Auth';
import { getProfile } from 'src/api/users';
export default function HomePage(props: any) {
    // Recup par context supabase
        const { profile,session } = useAuth();

    // Passage par backend 
    const [reqProfile, setReqProfile] = useState<any | null>(null); 
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = session.access_token;                ; // Get the auth token from the session or wherever it's stored
                const profileData = await getProfile(token);
                
                setReqProfile(profileData);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);
    //const [user,setUser] = useState<any | null>(null);
    console.log('state requete',reqProfile)
    console.log(session);
    if (!profile) {
        return <div>loading...</div>;
    }
    
    
    return (
        <div className='homePage_container'>
            <WelcomeUser username={profile?.first_name+' '+profile?.last_name} />
            <Appointments />
            <div className="homePage_tips_nearby">
                <Tips />
                <NearBys />
            </div>
        </div>
    );
}
