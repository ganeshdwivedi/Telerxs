import { Box, Typography } from '@mui/material'
import React from 'react'
import ReportsExportsPage from '../features/ReportsExport'

const ReportsAndExports = () => {

    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 500,
                    color: "#2d3748",
                    mb: 3,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.5px",
                }}
            >
                Reports & Exports
            </Typography>

            <ReportsExportsPage />
        </Box>

    )
}

export default ReportsAndExports