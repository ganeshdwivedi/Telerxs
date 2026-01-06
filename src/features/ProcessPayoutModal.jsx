import { useState } from "react"
import { TextField, Box, Typography } from "@mui/material"
import BaseModal from "../components/BaseModal"

// interface ProcessPayoutModalProps {
//     open: boolean
//     onClose: () => void
//     onSubmit: (amount: string) => void
//     doctorName: string
//     bankInfo: {
//         accountHolder: string
//         bank: string
//         account: string
//         routing: string
//     }
//     currentEarnings: string
// }

export default function ProcessPayoutModal({
    open,
    onClose,
    onSubmit,
    doctorName,
    bankInfo,
    currentEarnings,
}) {
    const [paymentAmount, setPaymentAmount] = useState("")

    const handleSubmit = () => {
        onSubmit(paymentAmount)
        onClose()
    }

    const inputStyle = {
        backgroundColor: "#E0E0E0",
        borderRadius: "6px",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "none",
            },
        },
        "& .MuiInputBase-input": {
            padding: "16px 14px",
            fontSize: "14px",
        },
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Process Payout"
            onCancel={onClose}
            onAction={handleSubmit}
            actionLabel="Pay Now"
            maxWidth="sm"
        >
            <Box mt={3}>
                {/* Title */}
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#00607C",
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    Process payout for {doctorName}
                </Typography>

                {/* Bank Information */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "20px",
                        marginBottom: "24px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#000",
                            marginBottom: "8px",
                        }}
                    >
                        Account Holder: {bankInfo.accountHolder}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#000",
                            marginBottom: "8px",
                        }}
                    >
                        Bank: {bankInfo.bank}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#000",
                            marginBottom: "8px",
                        }}
                    >
                        Account: {bankInfo.account}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#000",
                        }}
                    >
                        Routing: {bankInfo.routing}
                    </Typography>
                </Box>

                {/* Payment Amount */}
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        marginBottom: "8px",
                        color: "#000",
                    }}
                >
                    Payment Amount ($)
                </Typography>
                <TextField fullWidth value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} sx={inputStyle} />

                {/* Current Earnings */}
                <Typography
                    sx={{
                        fontSize: "12px",
                        color: "#757575",
                        marginTop: "12px",
                    }}
                >
                    Current earnings: {currentEarnings}
                </Typography>
            </Box>
        </BaseModal>
    )
}
