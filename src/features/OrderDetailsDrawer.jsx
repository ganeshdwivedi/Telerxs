import { Drawer, Box, IconButton, Typography, Chip } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import CakeIcon from "@mui/icons-material/Cake"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import MedicationIcon from "@mui/icons-material/Medication"

// interface OrderDetailsDrawerProps {
//     open: boolean
//     onClose: () => void
//     orderData: {
//         orderNumber: string
//         status: string
//         patientName: string
//         patientEmail: string
//         patientDob: string
//         patientAddress: string
//         doctorName: string
//         doctorEmail: string
//         date: string
//         medications: string[]
//     }
// }

export default function OrderDetailsDrawer({ open, onClose, orderData }) {
    const getStatusColor = (status) => {
        const colors = {
            Pending: { bg: "#FFF4E5", color: "#F57C00" },
            Processing: { bg: "#E3F2FD", color: "#1976D2" },
            Dispatched: { bg: "#F3E5F5", color: "#7B1FA2" },
            Delivered: { bg: "#E8F5E9", color: "#388E3C" },
            Cancelled: { bg: "#FFEBEE", color: "#D32F2F" },
        }
        return colors[status] || colors.Pending
    }

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: "400px",
                    backgroundColor: "#FAFAFA",
                },
            }}
        >
            {/* Teal Header */}
            <Box
                sx={{
                    backgroundColor: "#00607C",
                    color: "white",
                    padding: "16px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>{orderData.orderNumber}</Typography>
                <IconButton onClick={onClose} sx={{ color: "white", padding: 0 }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Content */}
            <Box sx={{ padding: "24px" }}>
                {/* Status Badge */}
                <Chip
                    icon={
                        <Box
                            sx={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: getStatusColor(orderData.status).color,
                                marginLeft: "8px",
                            }}
                        />
                    }
                    label={orderData.status}
                    sx={{
                        backgroundColor: getStatusColor(orderData.status).bg,
                        color: getStatusColor(orderData.status).color,
                        fontWeight: 500,
                        fontSize: "13px",
                        height: "28px",
                        marginBottom: "24px",
                        "& .MuiChip-icon": {
                            margin: 0,
                        },
                    }}
                />

                {/* Patient Details Section */}
                <Box sx={{ marginBottom: "32px" }}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#000",
                            marginBottom: "16px",
                        }}
                    >
                        Patient Details
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <PersonIcon sx={{ fontSize: "18px", color: "#666" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>{orderData.patientName}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <EmailIcon sx={{ fontSize: "18px", color: "#666" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>{orderData.patientEmail}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <CakeIcon sx={{ fontSize: "18px", color: "#666" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>DOB: {orderData.patientDob}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <LocationOnIcon sx={{ fontSize: "18px", color: "#666" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>{orderData.patientAddress}</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Prescription Details Section */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#000",
                            marginBottom: "16px",
                        }}
                    >
                        Prescription Details
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <LocalHospitalIcon sx={{ fontSize: "18px", color: "#666" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>{orderData.doctorName}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <EmailIcon sx={{ fontSize: "18px", color: "#666" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>{orderData.doctorEmail}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <CalendarTodayIcon sx={{ fontSize: "18px", color: "#666" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>Dec {orderData.date}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "12px", marginTop: "8px" }}>
                            <MedicationIcon sx={{ fontSize: "18px", color: "#666", marginTop: "2px" }} />
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "#333",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Medications:
                                </Typography>
                                <Box component="ul" sx={{ margin: 0, paddingLeft: "20px" }}>
                                    {orderData.medications.map((med, index) => (
                                        <li key={index}>
                                            <Typography sx={{ fontSize: "14px", color: "#333" }}>{med}</Typography>
                                        </li>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    )
}
