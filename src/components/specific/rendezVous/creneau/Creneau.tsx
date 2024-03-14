import { useEffect, useState } from 'react';
import { getDisponibilities } from 'src/api/disponibilities';
import { useAuth } from 'src/hooks/Auth';
import Disponibilities from 'src/types/Disponibilities';
import Doctor from 'src/types/Doctor';
import RendezVousConfirm from './rendezVousConfirm/RendezVousConfirm';

type SelectedDate = {
    prefessional_id: number;
    patient_id: String;
    slot: String;
    appointment_type: String;
    appointment_date: Date;
    result: String | null;
    status: String;
}

export default function Creneau(props: { doctor: Doctor | null }) {
    const [disponibilities, setDisponibilities] = useState<Disponibilities>();
    const [nextWeekDates, setNextWeekDates] = useState<Date[]>([]);
    const [selectedDate, setSelectedDate] = useState<SelectedDate | null>(null);
    const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);

    const { session } = useAuth();

    useEffect(() => {
        const fetchDisponibilities = async () => {
            try {
                const token = session.access_token; // Get the auth token from the session or wherever it's stored
                if (props.doctor) {
                    // console.log('props doctor', props.doctor);
                    const dataDispo: Disponibilities = await getDisponibilities(token, 10);
                    // console.log("data dispo", dataDispo);
                    setDisponibilities(dataDispo);

                }
            } catch (error) {
                console.error('Error fetching disponibilities:', error);
            }
        };

        fetchDisponibilities();

        setNextWeekDates(() => {
            const today = new Date();
            const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
            const daysUntilMonday = dayOfWeek === 1 ? 7 : (8 - dayOfWeek); // Calculate days until next Monday
            const nextMonday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysUntilMonday);

            const nextWeekDates = [nextMonday]; // Initialize array with next Monday's date

            // Add dates for the rest of the week
            for (let i = 1; i < 7; i++) {
                const nextDate = new Date(nextMonday);
                nextDate.setDate(nextMonday.getDate() + i);
                nextWeekDates.push(nextDate);
            }
            return nextWeekDates;
        })

    }, [props.doctor]);

    function formatDate(inputDate: Date) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear();
        return `${day} / ${month} / ${year}`;
    }

    function handleSlotClick(selectedDate: SelectedDate) {
        setSelectedDate(selectedDate);
        setConfirmationIsOpen(true);
    }

    function handleCloseToggle() {
        setConfirmationIsOpen(false);
    }

    return (

        disponibilities ?
            <div>
                {confirmationIsOpen && <RendezVousConfirm selectedDate={selectedDate} closeToggle={handleCloseToggle} />}
                <div style={{ display: "flex", flexDirection: "row" }}>

                    <div style={{ flexGrow: "1" }} >
                        <h3>Lundi</h3>
                        <h4>{formatDate(nextWeekDates[0])}</h4>
                        {disponibilities && disponibilities.disponibility.slots.monday.length !== 0 ? disponibilities.disponibility.slots.monday.map((dispo) => (
                            <div key={`monday-${dispo}`} style={{ border: '1px solid green', borderRadius: '10px', margin: '5px', color: 'green' }} onClick={() => handleSlotClick(
                                {
                                    prefessional_id: disponibilities.id_professional,
                                    patient_id: session.user.id,
                                    slot: dispo,
                                    appointment_type: "consultation",
                                    appointment_date: nextWeekDates[0],
                                    result: null,
                                    status: "pending"
                                }
                            )}>
                                {dispo}
                            </div>

                        )) : <p>Pas <br /> de <br />disponibilités</p>}
                    </div>
                    <div style={{ flexGrow: "1" }}>
                        <h3>Mardi</h3>
                        <h4>{formatDate(nextWeekDates[1])}</h4>
                        {disponibilities && disponibilities.disponibility.slots.tuesday.length !== 0 ? disponibilities.disponibility.slots.tuesday.map((dispo) => (
                            <div key={`tuesday-${dispo}`} style={{ border: '1px solid green', borderRadius: '10px', margin: '5px', color: 'green' }}
                                onClick={() => handleSlotClick(
                                    {
                                        prefessional_id: disponibilities.id_professional,
                                        patient_id: session.user.id,
                                        slot: dispo,
                                        appointment_type: "consultation",
                                        appointment_date: nextWeekDates[1],
                                        result: null,
                                        status: "pending"
                                    }
                                )}>
                                {dispo}
                            </div>
                        )) : <p>Pas <br /> de <br />disponibilités</p>}
                    </div>

                    <div style={{ flexGrow: "1" }}>
                        <h3>Mercredi</h3>
                        <h4>{formatDate(nextWeekDates[2])}</h4>
                        {disponibilities && disponibilities.disponibility.slots.wednesday.length !== 0 ? disponibilities.disponibility.slots.wednesday.map((dispo) => (
                            <div key={`wednesday-${dispo}`} style={{ border: '1px solid green', borderRadius: '10px', margin: '5px', color: 'green' }}
                                onClick={() => handleSlotClick(
                                    {
                                        prefessional_id: disponibilities.id_professional,
                                        patient_id: session.user.id,
                                        slot: dispo,
                                        appointment_type: "consultation",
                                        appointment_date: nextWeekDates[2],
                                        result: null,
                                        status: "pending"
                                    }
                                )}>
                                {dispo}</div>
                        )) : <p>Pas <br /> de <br />disponibilités</p>}
                    </div>

                    <div style={{ flexGrow: "1" }}>
                        <h3>Jeudi</h3>
                        <h4>{formatDate(nextWeekDates[3])}</h4>
                        {disponibilities && disponibilities.disponibility.slots.thursday.length !== 0 ? disponibilities.disponibility.slots.thursday.map((dispo) => (
                            <div key={`thursday-${dispo}`} style={{ border: '1px solid green', borderRadius: '10px', margin: '5px', color: 'green' }}
                                onClick={() => handleSlotClick(
                                    {
                                        prefessional_id: disponibilities.id_professional,
                                        patient_id: session.user.id,
                                        slot: dispo,
                                        appointment_type: "consultation",
                                        appointment_date: nextWeekDates[3],
                                        result: null,
                                        status: "pending"
                                    }
                                )}>{dispo}</div>
                        )) : <p>Pas <br /> de <br />disponibilités</p>}
                    </div>

                    <div style={{ flexGrow: "1" }}>
                        <h3>Vendredi</h3>
                        <h4>{formatDate(nextWeekDates[4])}</h4>
                        {disponibilities && disponibilities.disponibility.slots.friday.length !== 0 ? disponibilities.disponibility.slots.friday.map((dispo) => (
                            <div key={`friday-${dispo}`} style={{ border: '1px solid green', borderRadius: '10px', margin: '5px', color: 'green' }}
                                onClick={() => handleSlotClick(
                                    {
                                        prefessional_id: disponibilities.id_professional,
                                        patient_id: session.user.id,
                                        slot: dispo,
                                        appointment_type: "consultation",
                                        appointment_date: nextWeekDates[4],
                                        result: null,
                                        status: "pending"
                                    }
                                )}>
                                {dispo}</div>
                        )) : <p>Pas <br /> de <br />disponibilités</p>}
                    </div>
                </div>
            </div>
            : <p>Choisissez un docteur</p>
    );
}

