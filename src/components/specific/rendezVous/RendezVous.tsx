import * as React from 'react';
import Doctor from 'src/types/Doctor';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import Creneau from './creneau/Creneau';
import { getAllProfessionals } from 'src/api/professionals';
import { useAuth } from 'src/hooks/Auth';

export default function RendezVous() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const { session } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('http://localhost:3030/doctors');
                // const result = await response.json();
                const response = await getAllProfessionals(session.access_token);
                setDoctors(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        /*https://mui.com/material-ui/react-autocomplete/*/
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={doctors}
                    getOptionLabel={(option) => option.office_name}
                    sx={{ width: 700 }}
                    onChange={(event, value) => { setSelectedDoctor(value) }}
                    renderInput={(params) => <TextField {...params} label="Chercher un docteur" />}
                // renderInput={(params) => (
                //     <div ref={params.InputProps.ref}>
                //         <input type="text" {...params.inputProps} />
                //     </div>
                // )}
                />
                <Creneau doctor={selectedDoctor} />
            </div>

        </React.Fragment >

    );
}

