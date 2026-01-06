

import { Box, createTheme, Grid, Typography, styled } from "@mui/material"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const Footer = styled(Box)(({ theme }) => ({
    width: "100%",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#e2f0f9", // exact footer blue
    marginTop: "auto",
    borderTop: "1px solid #d1e6f4",
}))

export default function MainLayout() {
    return (
        <>
            <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "#F1FAFE" }}>
                <Navbar />

                <Box sx={{ display: "flex", flex: 1, px: 3, py: 2, gap: 4 }}>
                    {/* Sidebar Area */}
                    <Box sx={{ width: "68px" }}>
                        <Sidebar />
                    </Box>

                    {/* Main Content Area */}
                    <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>


                        {Outlet && <Outlet />}
                    </Box>
                </Box>

                <Footer>
                    <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 600 }}>
                        CompanyName2025 © All Rights Reserved
                    </Typography>
                </Footer>
            </Box>
        </>
    )
}
