import { Box, IconButton, styled, Stack } from "@mui/material"
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined"
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined"
import { FaStethoscope } from "react-icons/fa"
import { LuChartLine, LuContactRound, LuLayoutDashboard, LuPill, LuReceipt, LuUserRoundCog, LuUsersRound } from "react-icons/lu"
import { RiFilePaper2Line } from "react-icons/ri"
import theme from "../config/ThemeProvider"
import { Link, useLocation } from "react-router-dom"

// Custom styled component for the vertical pill sidebar
const SidebarContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#005691", // Deep blue color matching the image
    width: "60px",
    height: "fit-content",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px 0",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}))



const SidebarItem = ({ icon: Icon, active }) => (
    <IconButton
        sx={{
            width: "44px",
            height: "44px",
            backgroundColor: active ? "#c7e2f5" : theme.palette.brand.secPrimary,
            color: active ? "#005691" : "#ffffff",
            mb: 1,
            "&:hover": {
                backgroundColor: active ? "#c7e2f5" : "rgba(255, 255, 255, 0.1)",
            },
            "& .MuiSvgIcon-root": {
                fontSize: "24px",
            },
            "& svg": {
                fontSize: "20px",
            }
        }}
    >
        <Icon />
    </IconButton>
)

export default function Sidebar() {
    const location = useLocation();
    console.log(location.pathname); // "/dashboard"
    const items = [
        { icon: LuLayoutDashboard, path: "/dashboard" },
        { icon: FaStethoscope, path: "/provider-management" },
        { icon: LuPill, path: '/medicine-inventory' },
        { icon: LuUsersRound, path: "/patient-management" },
        { icon: RiFilePaper2Line, path: "/orders" },
        { icon: LuReceipt },
        { icon: LuUserRoundCog, path: "/sub-admin" },
        { icon: FactCheckOutlinedIcon },
        { icon: ShieldOutlinedIcon },
        { icon: CampaignOutlinedIcon },
        { icon: LuChartLine },
        { icon: LuContactRound },
        { icon: MonitorOutlinedIcon },
    ]

    return (
        <SidebarContainer>
            <Stack spacing={0.5} alignItems="center">
                {items.map((item, index) => (
                    <Link to={item?.path}>
                        <SidebarItem key={index} icon={item.icon} active={location.pathname.includes(item?.path)} />
                    </Link>
                ))}
            </Stack>
        </SidebarContainer>
    )
}
