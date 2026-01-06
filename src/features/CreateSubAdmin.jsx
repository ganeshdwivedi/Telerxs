import { useState } from "react"
import { DialogContent, Box, Typography, TextField, Button, Alert } from "@mui/material"
import BaseModal from "../components/BaseModal"

// interface CreateSubAdminModalProps {
//     open: boolean
//     onClose: () => void
//     onCreate?: (data: { firstName: string; lastName: string; email: string }) => void
// }

export default function CreateSubAdminModal({ open, onClose, onCreate }) {
    const [firstName, setFirstName] = useState("Sarah")
    const [lastName, setLastName] = useState("Jenkins")
    const [email, setEmail] = useState("sarah.j@mediprime.com")

    const handleCreate = () => {
        onCreate?.({ firstName, lastName, email })
        onClose()
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Create Sub-Admin Account"
            onCancel={onClose}
            onAction={handleCreate}
            actionLabel="Create Sub-Admin"
            maxWidth="md"
        >

            {/* Content */}

            <Box
                sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "32px",
                }}
            >
                {/* Info Alert */}
                <Typography sx={{ color: '#00598D', textAlign: 'center', mb: 3 }}>
                    You can set permissions for this sub-admin after creation
                </Typography>

                {/* Form Fields */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {/* First Name and Last Name Row */}
                    <Box sx={{ display: "flex", gap: "16px" }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#333",
                                    marginBottom: "8px",
                                }}
                            >
                                First Name*
                            </Typography>
                            <TextField
                                fullWidth
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Sarah"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#E0E0E0",
                                        borderRadius: "6px",
                                        fontSize: "14px",
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        "&:hover fieldset": {
                                            border: "none",
                                        },
                                        "&.Mui-focused fieldset": {
                                            border: "1px solid #00607C",
                                        },
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "14px",
                                        color: "#333",
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#333",
                                    marginBottom: "8px",
                                }}
                            >
                                Last Name*
                            </Typography>
                            <TextField
                                fullWidth
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Jenkins"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#E0E0E0",
                                        borderRadius: "6px",
                                        fontSize: "14px",
                                        "& fieldset": {
                                            border: "none",
                                        },
                                        "&:hover fieldset": {
                                            border: "none",
                                        },
                                        "&.Mui-focused fieldset": {
                                            border: "1px solid #00607C",
                                        },
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "14px",
                                        color: "#333",
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Email Field */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#333",
                                marginBottom: "8px",
                            }}
                        >
                            Email*
                        </Typography>
                        <TextField
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="sarah.j@mediprime.com"
                            type="email"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "#E0E0E0",
                                    borderRadius: "6px",
                                    fontSize: "14px",
                                    "& fieldset": {
                                        border: "none",
                                    },
                                    "&:hover fieldset": {
                                        border: "none",
                                    },
                                    "&.Mui-focused fieldset": {
                                        border: "1px solid #00607C",
                                    },
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "14px",
                                    color: "#333",
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </BaseModal>
    )
}
