import { Box, Typography, TextField } from "@mui/material"
import BaseModal from "../components/BaseModal"

export default function ProcessRefundModal({
    open,
    onClose,
    orderNumber,
    patientName,
    medicines,
}) {
    const handleApprove = () => {
        console.log("Approving refund...")
        onClose()
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Process Refund"
            onCancel={onClose}
            onAction={handleApprove}
            actionLabel="Approve Refund"
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

                {/* Two Column Layout for Patient and Medicines */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                        marginBottom: "20px",
                    }}
                >
                    {/* Patient Field */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "#333",
                                marginBottom: "8px",
                            }}
                        >
                            Patient
                        </Typography>
                        <TextField
                            fullWidth
                            value={patientName}
                            disabled
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "#E0E0E0",
                                    borderRadius: "6px",
                                    "& fieldset": {
                                        border: "none",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    padding: "12px 14px",
                                    fontSize: "14px",
                                    color: "#666",
                                },
                            }}
                        />
                    </Box>

                    {/* Medicines Field */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "#333",
                                marginBottom: "8px",
                            }}
                        >
                            Medicines
                        </Typography>
                        <TextField
                            fullWidth
                            value={medicines}
                            disabled
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "#E0E0E0",
                                    borderRadius: "6px",
                                    "& fieldset": {
                                        border: "none",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    padding: "12px 14px",
                                    fontSize: "14px",
                                    color: "#666",
                                },
                            }}
                        />
                    </Box>
                </Box>

                {/* Refund Amount Field */}
                <Box sx={{ marginBottom: "20px" }}>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        Refund Amount
                    </Typography>
                    <TextField
                        fullWidth
                        // placeholder="Enter refund amount"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#E0E0E0",
                                borderRadius: "6px",
                                "& fieldset": {
                                    border: "none",
                                },
                            },
                            "& .MuiInputBase-input": {
                                padding: "12px 14px",
                                fontSize: "14px",
                            },
                        }}
                    />
                </Box>

                {/* Reason for Refund Field */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        Reason for Refund
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        // placeholder="Enter reason for refund"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#E0E0E0",
                                borderRadius: "6px",
                                "& fieldset": {
                                    border: "none",
                                },
                            },

                        }}
                    />
                </Box>
            </Box>
        </BaseModal>
    )
}
