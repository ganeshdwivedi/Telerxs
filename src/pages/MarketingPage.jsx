
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Paper,
} from "@mui/material"
import {
    BarChart as BarChartIcon,
    People as PeopleIcon,
    Email as EmailIcon,
    CalendarToday as CalendarIcon,
    Message as MessageIcon,
    Notifications as NotificationsIcon,
    CheckCircle as CheckCircleIcon,
    Schedule as ScheduleIcon,
} from "@mui/icons-material"
import StatCard from "../components/StatCard"
import DashboardStatCard from "../components/DashbaordStatsCard"
import { MdOutlineMail } from "react-icons/md"
import { LuMessageSquare } from "react-icons/lu"
import { IoNotificationsOutline } from "react-icons/io5"
import { useState } from "react"
import AppCampaignModal from "../features/marketingAndNotification/AppCampaignModal"
import EmailCampaignModal from "../features/marketingAndNotification/EmailCampaignModal"
import SmsCampaignModal from "../features/marketingAndNotification/SmsCampaignModal"



// interface ActionCardProps {
//     icon: React.ReactNode
//     title: string
//     description: string
// }

const ActionCard = ({ icon, title, description, onClick }) => (
    <Card
        onClick={onClick}
        sx={{
            height: "100%",
            border: '1px solid #E8E8E8',
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.08)",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.2s",
            "& h6": { color: "#00598D" },
            "&:hover": {
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
                transform: "translateY(-2px)",
            },
        }}
    >
        <CardContent
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                py: 4,
                px: 3,
            }}
        >
            <Box
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "1px solid #E8E8E8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0F7DC1",
                    mb: 2,
                }}
            >
                {icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a", mb: 0.5 }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
                {description}
            </Typography>
        </CardContent>
    </Card >
)

// interface CampaignRow {
//     name: string
//     type: "Email" | "SMS" | "Push"
//     audience: string
//     sent: string
//     opened: string
//     clicked: string
//     date: string
//     status: "Completed" | "Scheduled"
// }

const campaigns = [
    {
        name: "New Year Health Checkup Promo",
        type: "Email",
        audience: "All Patients",
        sent: "1250",
        opened: "675(53%)",
        clicked: "234(19%)",
        date: "2025-12-20",
        status: "Completed",
    },
    {
        name: "Flu Season Reminder",
        type: "SMS",
        audience: "All Patients",
        sent: "1250",
        opened: "1000(83%)",
        clicked: "--",
        date: "2025-12-18",
        status: "Completed",
    },
    {
        name: "Special Holiday Hours",
        type: "Push",
        audience: "Mobile Users",
        sent: "890",
        opened: "650(73%)",
        clicked: "120(13%)",
        date: "2025-12-16",
        status: "Completed",
    },
    {
        name: "Prescription Refill Reminder",
        type: "Email",
        audience: "Active Patients",
        sent: "--",
        opened: "--",
        clicked: "--",
        date: "2025-11-26",
        status: "Scheduled",
    },
]



export default function MarketingNotificationsPage() {

    const [emailCampaignOpen, setEmailCampaignOpen] = useState(false)
    const [smsCampaignOpen, setSmsCampaignOpen] = useState(false)
    const [appNotificationOpen, setAppNotificationOpen] = useState(false)


    const openEmailCampaign = () => {
        setEmailCampaignOpen(true)
    }
    const openSmsCampaign = () => setSmsCampaignOpen(true)
    const openAppNotification = () => setAppNotificationOpen(true)


    const closeEmailCampaign = () => setEmailCampaignOpen(false)
    const closeSmsCampaign = () => setSmsCampaignOpen(false)
    const closeAppNotification = () => setAppNotificationOpen(false)

    const submitEmailCampaign = (data) => {
        console.log("Email Campaign Data:", data)
        setEmailCampaignOpen(false)
    }

    const submitSmsCampaign = (data) => {
        console.log("SMS Campaign Data:", data)
        setSmsCampaignOpen(false)
    }

    const submitAppNotification = (data) => {
        console.log("App Notification Data:", data)
        setAppNotificationOpen(false)
    }


    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Typography variant="h4"
                sx={{
                    fontWeight: 500,
                    color: "#2d3748",
                    mb: 3,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.5px",
                }}>
                Marketing & Notifications
            </Typography>

            {/* Stats Section */}
            <Box
                sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(4, 1fr)",
                    },
                    gap: 3,
                    mb: 4,
                }}
            >

                <DashboardStatCard icon={<BarChartIcon />} value={24} label="Total Campaigns" color="#0F7DC1" />

                <DashboardStatCard icon={<PeopleIcon />} value="1,250" label="Active Subscribers" color="#0F7DC1" />

                <DashboardStatCard icon={<EmailIcon />} value="88%" label="Avg. Open Rate" color="#0F7DC1" />

                <DashboardStatCard icon={<CalendarIcon />} value="3" label="Scheduled" color="#0F7DC1" />
            </Box>

            {/* Create Campaign Section */}
            <Box sx={{ background: 'white', p: 2, borderRadius: 2, border: '1px solid #E8E8E8', mb: 4, }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a", mb: 2, }}>
                    Create Campaign
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(3, 1fr)",
                        },
                        gap: 3,

                    }}
                >

                    <ActionCard
                        onClick={openEmailCampaign}
                        icon={<MdOutlineMail fontSize={24} />}
                        title="Send Email Campaign"
                        description="Create and schedule emails"
                    />

                    <ActionCard
                        onClick={openSmsCampaign}
                        icon={<LuMessageSquare fontSize={24} />}
                        title="Send SMS"
                        description="Text your notifications"
                    />

                    <ActionCard
                        onClick={openAppNotification}
                        icon={<IoNotificationsOutline fontSize={24} />}
                        title="Push Notification"
                        description="Mobile alerts"
                    />
                </Box>
            </Box>
            {/* Campaign History Section */}
            <Box sx={{ background: 'white', p: 2, borderRadius: 2, border: '1px solid #E8E8E8' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a", mb: 2 }}>
                    Campaign History
                </Typography>
                <TableContainer component={Paper} sx={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.08)", borderRadius: "8px" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#F9FAFB" }}>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Campaign Name</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Type</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Audience</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Sent</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Opened</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Clicked</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Date</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {campaigns.map((campaign, index) => {

                                return (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            "&:hover": { bgcolor: "#F9FAFB" },
                                            borderBottom: "1px solid #E5E7EB",
                                        }}
                                    >
                                        <TableCell sx={{ color: "#1a1a1a", fontSize: "14px" }}>{campaign.name}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={campaign.type}
                                                size="small"
                                                sx={{
                                                    background: '#DAF1FB',
                                                    color: '#00598D',
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    height: "24px",
                                                    borderRadius: "6px",
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell sx={{ fontSize: "14px" }}>{campaign.audience}</TableCell>
                                        <TableCell sx={{ fontSize: "14px" }}>{campaign.sent}</TableCell>
                                        <TableCell sx={{ fontSize: "14px" }}>{campaign.opened}</TableCell>
                                        <TableCell sx={{ fontSize: "14px" }}>{campaign.clicked}</TableCell>
                                        <TableCell sx={{ fontSize: "14px" }}>{campaign.date}</TableCell>
                                        <TableCell>
                                            <Chip
                                                icon={
                                                    campaign.status === "Completed" ? (
                                                        <CheckCircleIcon sx={{ fontSize: 16 }} />
                                                    ) : (
                                                        <ScheduleIcon sx={{ fontSize: 16 }} />
                                                    )
                                                }
                                                label={campaign.status}
                                                size="small"
                                                sx={{
                                                    bgcolor: campaign.status === "Completed" ? "#D1FAE5" : "#FEF3C7",
                                                    color: campaign.status === "Completed" ? "#065F46" : "#92400E",
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    height: "24px",
                                                    borderRadius: "6px",
                                                    "& .MuiChip-icon": {
                                                        color: campaign.status === "Completed" ? "#065F46" : "#92400E",
                                                    },
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {/* Modals */}
            <EmailCampaignModal onClose={closeEmailCampaign
            } open={emailCampaignOpen} />
            <SmsCampaignModal onClose={closeSmsCampaign} open={smsCampaignOpen} />
            <AppCampaignModal onClose={closeAppNotification} open={appNotificationOpen} />
        </Box>
    )
}
