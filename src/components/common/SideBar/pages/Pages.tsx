import './Pages.scss';
import Page from './page/Page';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import React from 'react';

export default function Pages() {
    const [selectedPage, setSelectedPage] = React.useState(null);
    // Function to update the state when a click happens in the child component
    const handleChildClick = (pageName: any) => {
        setSelectedPage(pageName);
     
    };

    return (
        <div className='pages_main'>
            <Page pageName="Mes Documents" pageIcon={<FolderOpenRoundedIcon />} isSelected={selectedPage === "Mes Documents" ? true : false} onClick={(pageName: any) => handleChildClick(pageName)} />
            <Page pageName="Mes Analyses" pageIcon={<MonitorHeartRoundedIcon />} isSelected={selectedPage === "Mes Analyses" ? true : false} onClick={(pageName: any) => handleChildClick(pageName)} />
            <Page pageName="Mes Consultations" pageIcon={<VaccinesOutlinedIcon />} isSelected={selectedPage === "Mes Consultations" ? true : false} onClick={(pageName: any) => handleChildClick(pageName)} />
            <Page pageName="Mes Rendez-vous" pageIcon={<AccessTimeRoundedIcon />} isSelected={selectedPage === "Mes Rendez-vous" ? true : false} onClick={(pageName: any) => handleChildClick(pageName)} />
        </div>
    );
};