import React from 'react';
import { useAuth } from 'src/hooks/Auth';
import { setAppointments } from 'src/api/appointments';
type SelectedDate = {
    prefessional_id: number;
    patient_id: String;
    slot: String;
    appointment_type: String;
    appointment_date: Date;
    result: String | null;
    status: String;
}

export default function RendezVousConfirm(props: { selectedDate: SelectedDate | null, closeToggle: () => void }) {
    const handleNoClick = () => {
        props.closeToggle();
    };

    const { session } = useAuth();

    const handleYesClick = () => {
        try {
            const token = session.access_token; // Get the auth token from the session or wherever it's stored
            const confirmAppointment = async () => {
                console.log('selectedDate', props.selectedDate);
                setAppointments(props.selectedDate, token);
                console.log('selectedDate', props.selectedDate);
            }
            confirmAppointment();
            props.closeToggle();
            alert('Rendez-vous confirmé');
        } catch (error) {
            console.error('Error fetching disponibilities:', error);
        }
    }

    return (
        <div className="content" style={{ border: '1px solid green', borderRadius: "10px", padding: "5px", margin: "20px" }}>
            <p>Voulez vous confirmer le {props.selectedDate ? props.selectedDate.appointment_date.toLocaleDateString() : null} à {props.selectedDate ? props.selectedDate.slot : null}?</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }} onClick={handleYesClick}>Oui</button>
                <button style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }} onClick={handleNoClick}>Non</button>
            </div>
        </div>
    );
};
