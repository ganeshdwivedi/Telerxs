import React from 'react'
import ContactFormTable from '../features/ContactFormTable'
import { Box, Typography } from '@mui/material'

const ContactQuery = () => {
    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 500,
                    color: "#2d3748",
                    mb: 3,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.5px",
                }}
            >
                Contact Form Query
            </Typography>
            <ContactFormTable />
        </Box>
    )
}

export default ContactQuery