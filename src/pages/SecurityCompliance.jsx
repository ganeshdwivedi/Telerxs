import { Box, Grid, Stack, Typography } from "@mui/material"

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import HistoryIcon from "@mui/icons-material/History"
import ComplianceCard from "../components/ComplianceCard"
import TFABadge from "../components/TFABadge"
import EncryptionInfoCard from "../features/EncryptInfoCard"
import AuditLogTable from "../features/AuditLogTable"
import { FiShield } from "react-icons/fi"
import SecurityStatCard from "../components/SecurityStatCard"
import LockIcon from "@mui/icons-material/Lock"
import VerifiedIcon from "@mui/icons-material/Verified"
import SecurityIcon from "@mui/icons-material/Security"
import { FaRegCircleCheck, FaTv } from "react-icons/fa6"
import { GoLock } from "react-icons/go"
import { IoEyeOutline } from "react-icons/io5"
import { LuDownload, LuFileCheck } from "react-icons/lu"
import DashboardStatCard from "../components/DashbaordStatsCard"
import { Email, People } from "@mui/icons-material"

const complianceCards = [
    {
        title: "HIPAA Compliance",
        description: "Current healthcare information is encrypted and stored securely",
        icon: <FiShield style={{ width: "18px", height: "18px" }} />,
        features: [
            "End-to-end encryption for data in rest",
            "AES-256 encryption for data at rest",
            "Regular security audits",
            "Business Associate Agreements in place",
        ],
    },
    {
        title: "GDPR Compliance",
        description: "EU personal data is protected regulatory compliance",
        icon: <LuFileCheck style={{ width: "18px", height: "18px" }} />,
        features: [
            "Right to be forgotten implemented",
            "Data portability support",
            "Consent management system",
            "Privacy by design architecture",
        ],
    },
    {
        title: "Role-Based Access Control",
        description: "Granular access control for all users",
        icon: <GoLock style={{ width: "18px", height: "18px" }} />,
        features: [
            "ABAC, sub-admin, and doctor roles",
            "Custom permissions setup",
            "Activity logging for all users",
            "Automatic session timeouts",
        ],
    },
    {
        title: "Audit Trail",
        description: "Complete logging of all system activities",
        icon: <IoEyeOutline style={{ width: "18px", height: "18px" }} />,
        features: [
            "Prescription creation and modifications",
            "User access logs",
            "Data export tracking",
            "Tamper-proof audit logs",
        ],
    },
]


const securityStats = [
    {
        icon: <FiShield />,
        metric: "98%",
        label: "Users with 2FA Enabled",
        iconColor: "#00598D",
    },
    {
        icon: <FaRegCircleCheck />,
        metric: "All",
        label: "Admins Protected",
        iconColor: "#138015",
    },
    {
        icon: <GoLock />,
        metric: "256-bit",
        label: "Encryption Standard",
        iconColor: "#6938EF",
    },
]


const tfaBadges = [
    {
        icon: "U",
        label: "Users with 2FA Enabled",
        value: "2,341",
        bgColor: "#f0f4f8",
        iconBgColor: "#1976d2",
    },
    {
        icon: "✓",
        label: "Devices Protected",
        value: "All",
        bgColor: "#f0f9f6",
        iconBgColor: "#00aa44",
    },
    {
        icon: "🔐",
        label: "Encryption Standard",
        value: "256-bit",
        bgColor: "#f5e6e8",
        iconBgColor: "#9c27b0",
    },
]

const auditLogs = [
    {
        timestamp: "2024-12-24 10:30:15",
        user: "Admin User",
        action: "Accessed patient records",
        resource: "Patient ID: p1",
        ipAddress: "192.168.1.100",
        status: "Success",
    },
    {
        timestamp: "2024-12-24 10:25:42",
        user: "Dr. John Smith",
        action: "Created prescription",
        resource: "Prescription ID: rx1",
        ipAddress: "192.168.1.105",
        status: "Success",
    },
    {
        timestamp: "2024-12-24 10:20:33",
        user: "Admin User",
        action: "Updated doctor profile",
        resource: "Prescription ID: rx1",
        ipAddress: "192.168.1.100",
        status: "Success",
    },
    {
        timestamp: "2024-12-24 10:15:28",
        user: "SubAdmin User",
        action: "Attempted to delete patient",
        resource: "Patient ID: p2",
        ipAddress: "192.168.1.110",
        status: "Denied",
    },
    {
        timestamp: "2024-12-24 10:10:19",
        user: "Admin User",
        action: "Exported financial report",
        resource: "Report: December 2024",
        ipAddress: "192.168.1.100",
        status: "Success",
    },
]

const encryptionFeatures = [
    { text: "All prescription data is encrypted using AES-256 encryption at rest" },
    { text: "Communications between clients and servers use TLS 1.3 encryption" },
    { text: "Patient health records are stored in separate encrypted databases with limited access" },
    { text: "Regular penetration testing and security audits are conducted quarterly" },
]

export default function SecurityCompliancePage() {
    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Typography variant="h4" sx={{
                fontWeight: 500,
                color: "#2d3748",
                mb: 3,
                fontSize: "1.6rem",
                letterSpacing: "-0.5px",
            }}>
                Compliance & Security
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
                    mb: 2,
                }}
            >

                <DashboardStatCard icon={<People />} value={24} label="Total Campaigns" color="#0F7DC1" />

                <DashboardStatCard icon={<FaTv />} value="1,250" label="Active Subscribers" color="#0F7DC1" />

                <DashboardStatCard icon={<LuDownload />} value="88%" label="Avg. Open Rate" color="#0F7DC1" />

                <DashboardStatCard icon={<FaRegCircleCheck />} value="3" label="Scheduled" color="#0F7DC1" />
            </Box>
            <Box sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",          // Mobile: stacked
                    md: "1fr 1fr",      // Desktop: 8/12 + 4/12
                },
                gap: 3,
                mb: 2,
                background: "white",
                p: 2,
                borderRadius: 2,
                border: "1px solid #E8E8E8"
            }}>
                {complianceCards.map((card, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                        <ComplianceCard
                            title={card.title}
                            description={card.description}
                            features={card.features}
                            icon={card.icon}
                        />
                    </Grid>
                ))}
            </Box>

            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, mb: 2, border: '1px solid #E8E8E8' }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#1A1A1A",
                        mb: 3,
                    }}
                >
                    Two-Factor Authentication
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    {securityStats.map((stat, index) => (
                        <SecurityStatCard
                            key={index}
                            icon={stat.icon}
                            metric={stat.metric}
                            label={stat.label}
                            iconColor={stat.iconColor}
                        />
                    ))}
                </Stack>
            </Box>

            <Box sx={{
                background: "white",
                p: 2,
                borderRadius: 2,
                border: "1px solid #E8E8E8",
                mb: 2
            }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#1a202c" }}>
                    Recent Audit Log
                </Typography>
                <AuditLogTable data={auditLogs} />
            </Box>

            <EncryptionInfoCard features={encryptionFeatures} />
        </Box>
    )
}
