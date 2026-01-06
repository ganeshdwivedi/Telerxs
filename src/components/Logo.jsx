import React from 'react'
import logo from "../assets/images/logo.png";
import { Avatar } from '@mui/material';

const Logo = ({ sx }) => {
    return (
        <Avatar
            src={logo}
            alt="logo"
            sx={{
                // width: '100%',
                // height: '100%',
                borderRadius: "10px",
                "& img": {
                    objectFit: "contain",
                },
                // backgroundColor: "#F1F5F9",
                p: 1,
                ...sx, // allow external override
            }}
        />

    )
}

export default Logo