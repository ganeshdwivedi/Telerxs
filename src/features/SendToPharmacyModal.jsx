import { Box, Typography } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import CakeIcon from "@mui/icons-material/Cake"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import MedicationIcon from "@mui/icons-material/Medication"
import BaseModal from "../components/BaseModal"

// interface SendToPharmacyModalProps {
//     open: boolean
//     onClose: () => void
//     orderNumber: string
//     patientData: {
//         name: string
//         email: string
//         dob: string
//         address: string
//     }
//     medications: string[]
// }

export default function SendToPharmacyModal({
    open,
    onClose,
    orderNumber,
    patientData,
    medications,
}) {
    const handleSend = () => {
        console.log("Sending to pharmacy...")
        onClose()
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Send to Pharmacy"
            onCancel={onClose}
            onAction={handleSend}
            actionLabel="Send to Pharmacy"
            maxWidth="md"
        >
            <Box mt={3}>
                {/* Header Message */}
                <Typography
                    sx={{
                        color: "#00607C",
                        fontSize: "14px",
                        fontWeight: 500,
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    Process a refund for order {orderNumber} (excluding consultation fees)
                </Typography>

                {/* Two Column Layout */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "24px",
                    }}
                >
                    {/* Patient Details Column */}
                    <Box>
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
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <PersonIcon sx={{ fontSize: "18px", color: "#666" }} />
                                <Typography sx={{ fontSize: "14px", color: "#333" }}>{patientData.name}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <EmailIcon sx={{ fontSize: "18px", color: "#666" }} />
                                <Typography sx={{ fontSize: "14px", color: "#333" }}>{patientData.email}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <CakeIcon sx={{ fontSize: "18px", color: "#666" }} />
                                <Typography sx={{ fontSize: "14px", color: "#333" }}>DOB: {patientData.dob}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <LocationOnIcon sx={{ fontSize: "18px", color: "#666" }} />
                                <Typography sx={{ fontSize: "14px", color: "#333" }}>{patientData.address}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Prescription Column */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "#000",
                                marginBottom: "16px",
                            }}
                        >
                            Prescription
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
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
                                    {medications.map((med, index) => (
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
        </BaseModal>
    )
}
