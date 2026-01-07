import { Box, Chip, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PrescriptionsOrdersPage from '../features/PrescriptionTable'

const Prescription = () => {
    const [activeTab, setActiveTab] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")


    const tabs = [
        { label: "All", count: 5 },
        { label: "Pending", count: 1 },
        { label: "Processing", count: 1 },
        { label: "Dispatched", count: 1 },
        { label: "Delivered", count: 1 },
        { label: "Cancelled", count: 1 },
    ]



    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            {/* Header */}
            <Typography variant="h5" sx={{ fontSize: "1.6rem", mb: 3, fontWeight: 500, color: "#1a1a1a" }}>
                Prescriptions & Orders
            </Typography>

            {/* Tabs */}
            <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                {tabs.map((tab) => (
                    <Chip
                        key={tab.label}
                        label={`${tab.label} (${tab.count})`}
                        onClick={() => setActiveTab(tab.label)}
                        sx={{
                            backgroundColor: activeTab === tab.label ? "#005492" : "#FFFFFF",
                            color: activeTab === tab.label ? "#FFFFFF" : "#666666",
                            fontWeight: 500,
                            fontSize: "14px",
                            px: 2,
                            py: 1,
                            height: "auto",
                            borderRadius: "20px",
                            cursor: "pointer",
                            border: activeTab === tab.label ? "none" : "1px solid #f3efefff",
                            "&:hover": {
                                backgroundColor: activeTab === tab.label ? "#005492" : "#F5F5F5",
                            },
                        }}
                    />
                ))}
            </Box>
            <Box sx={{ background: 'white', p: 2 }}>


                <PrescriptionsOrdersPage />
            </Box>

        </Box>
    )
}

export default Prescription