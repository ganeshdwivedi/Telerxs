import { Box, Typography } from '@mui/material'
import React from 'react'
import SubAdminPermissionsTable from '../features/SubAdminPermissionsTable'

const SubAdminPermission = () => {
    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        color: "#1a1a1a",
                    }}
                >
                    Sub-Admin & Permissions
                </Typography>
            </Box>
            <SubAdminPermissionsTable />
        </Box>
    )
}

export default SubAdminPermission