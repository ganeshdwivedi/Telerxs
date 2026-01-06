import { useState } from "react"
import { TextField, Box, Typography } from "@mui/material"
import BaseModal from "../components/BaseModal"

export default function ResetPasswordModal({ open, onClose, onSubmit, doctorName }) {
    const [newPassword, setNewPassword] = useState("")

    const handleSubmit = () => {
        onSubmit(newPassword)
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
            title="Reset Doctor Password"
            onCancel={onClose}
            onAction={handleSubmit}
            actionLabel="Reset Password"
            maxWidth="sm"
        >
            <Box>
                {/* Title */}
                <Typography
                    sx={{
                        mt: 2,
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#00607C",
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    Reset password for {doctorName}
                </Typography>

                {/* New Password Field */}
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        marginBottom: "8px",
                        color: "#000",
                    }}
                >
                    New Password*
                </Typography>
                <TextField
                    fullWidth
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    sx={inputStyle}
                />
            </Box>
        </BaseModal>
    )
}
