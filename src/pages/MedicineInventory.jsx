import { Box, Typography } from '@mui/material'
import React from 'react'
import MedicineTable from "../components/MedicineTable"


const MedicineInventory = () => {
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
                Medicine Inventory
            </Typography>
            <MedicineTable />
        </Box>
    )
}

export default MedicineInventory 