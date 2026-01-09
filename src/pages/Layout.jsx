import { Box, Typography, styled } from "@mui/material"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const NAVBAR_HEIGHT = 64
const SIDEBAR_WIDTH = 80

const Footer = styled(Box)(() => ({
    width: "100%",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#e2f0f9",
    borderTop: "1px solid #d1e6f4",
}))

export default function MainLayout() {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#F1FAFE" }}>
            {/* FIXED NAVBAR */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: `${NAVBAR_HEIGHT}px`,
                    zIndex: 1200,
                }}
            >
                <Navbar />
            </Box>

            {/* FIXED SIDEBAR — FULL HEIGHT */}
            <Box className="sidebar-container"
                sx={{
                    position: "fixed",
                    top: 0,                 // ✅ start from very top
                    left: 20,                // ✅ align to left edge
                    width: `${SIDEBAR_WIDTH}px`,
                    height: "100vh",        // ✅ FORCE FULL HEIGHT
                    paddingTop: `${NAVBAR_HEIGHT}px`, // ✅ push icons below navbar
                    zIndex: 1100,
                    overflowY: 'auto', pt: 13
                }}
            >
                <Sidebar />
            </Box>

            {/* MAIN CONTENT */}
            <Box
                sx={{
                    marginTop: `${NAVBAR_HEIGHT}px`,
                    marginLeft: `${SIDEBAR_WIDTH}px`,
                    minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        px: 3,
                        pt: 5,
                        overflowY: "auto",
                    }}
                >
                    <Outlet />
                </Box>

                {/* FOOTER */}
                <Footer>
                    <Typography
                        variant="body2"
                        sx={{ color: "#4a5568", fontWeight: 600 }}
                    >
                        CompanyName2025 © All Rights Reserved
                    </Typography>
                </Footer>
            </Box>
        </Box>
    )
}
