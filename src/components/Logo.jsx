import React from 'react'
import logo from "../assets/images/logo.png";
import { Avatar } from '@mui/material';

const Logo = () => {
    return (
        <div>
            <Avatar sx={{ width: '70px' }} src={logo} alt='logo' />
        </div>
    )
}

export default Logo