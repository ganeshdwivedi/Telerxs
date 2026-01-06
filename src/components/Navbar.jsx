import { AppBar, Toolbar, Box, Typography, IconButton, Avatar, Badge, styled } from "@mui/material"
import { FaChevronDown } from "react-icons/fa"
import { LuSearch } from "react-icons/lu"
import { TbSettings2 } from "react-icons/tb"
import { VscBellDot } from "react-icons/vsc"
import Logo from "./Logo"

// Custom styled components for the pill containers
const PillContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#ffffff",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    padding: "6px 16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    height: "48px",
}))

const LogoContainer = styled(PillContainer)({
    padding: "6px 24px",
})

const ProfileContainer = styled(PillContainer)({
    padding: "4px 12px 4px 6px",
    gap: "12px",
})

const ActionContainer = styled(PillContainer)({
    padding: "2px 8px",
    gap: "8px",
    marginLeft: "16px",
    border: '1px solid #e2e8f0'
})

export default function Navbar() {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "#f0f7ff", // Very light blue background
                padding: "12px 24px",
            }}
        >
            <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: "auto" }}>
                {/* Left Section: Logo and Actions */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Logo Pill */}
                    {/* <LogoContainer> */}
                    <Logo sx={{ width: '100px', height: '100%', }} />
                    {/* </LogoContainer> */}

                    {/* Search, Notifications, Settings Pill */}
                    <ActionContainer>
                        <IconButton size="small" sx={{ color: "#4a5568" }}>
                            <LuSearch fontSize="large" />
                        </IconButton>
                        <IconButton size="small" sx={{ color: "#4a5568" }}>
                            <Badge
                                variant="dot"
                                sx={{
                                    "& .MuiBadge-badge": {
                                        backgroundColor: "#f56565",
                                        minWidth: "8px",
                                        height: "8px",
                                        borderRadius: "50%",
                                        top: "4px",
                                        right: "4px",
                                    },
                                }}
                            >
                                <VscBellDot fontSize="large" />
                            </Badge>
                        </IconButton>
                        <IconButton size="small" sx={{ color: "#4a5568" }}>
                            <TbSettings2 fontSize="large" />
                        </IconButton>
                    </ActionContainer>
                </Box>

                {/* Right Section: Profile */}
                <ProfileContainer>
                    <Avatar src="/profile-avatar.png" sx={{ width: 36, height: 36, border: "1px solid #e2e8f0" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", mr: 1 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 700,
                                color: "#1a202c",
                                lineHeight: 1.2,
                                fontSize: "0.875rem",
                            }}
                        >
                            John Doe
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#718096",
                                lineHeight: 1,
                                fontSize: "0.75rem",
                            }}
                        >
                            johndoe@mail.com
                        </Typography>
                    </Box>
                    <IconButton size="small" sx={{ color: "#718096", p: 0 }}>
                        <FaChevronDown fontSize="small" />
                    </IconButton>
                </ProfileContainer>
            </Toolbar>
        </AppBar>
    )
}
