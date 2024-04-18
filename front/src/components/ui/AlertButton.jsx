import React from 'react';
import { IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const AlertButton = () => {
    return (
        <>
        <IconButton variants="contained" sx={{m:2, color:"black", top: -30, left: 360}}>{<NotificationsNoneIcon/>}</IconButton>
        </>
    ) ;
}

export default AlertButton;