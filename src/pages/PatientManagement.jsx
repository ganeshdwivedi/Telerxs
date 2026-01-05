import React from 'react'
import PatientTable from '../features/PatientTable'
import { Box, Typography } from '@mui/material'

const PatientManagement = () => {
    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
                variant="h4"
                sx={{
                    // fontWeight: 800,
                    color: "#2d3748",
                    mb: 3,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.5px",
                }}
            >
                Patient Management
            </Typography>
            <PatientTable />
        </Box>
    )
}

export default PatientManagement