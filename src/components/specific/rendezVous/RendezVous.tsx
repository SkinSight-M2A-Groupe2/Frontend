import * as React from 'react';
import Doctor from 'src/types/Doctor';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';

export default function RendezVous() {
    const [doctors, setDoctor] = useState<Doctor[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3030/doctors');
                const result = await response.json();
                setDoctor(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        /*https://mui.com/material-ui/react-autocomplete/*/
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={doctors}
            sx={{ width: 700 }}
            onChange={(event, value) => { console.log(value) }}
            renderInput={(params) => <TextField {...params} label="Chercher un docteur" />}
        />
    );
}

