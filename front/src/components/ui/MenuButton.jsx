import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MenuButton = () => {
    return (
        <>
        <IconButton variants="contained" sx={{m:2, color:"black", top: 40}}>{<MenuIcon/>}</IconButton>
        </>
    )
}

export default MenuButton;