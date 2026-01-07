import { useState } from "react"
import { Box, TextField, MenuItem, Select, FormControl, Typography } from "@mui/material"
import BaseModal from "../../components/BaseModal"
// interface SendSmsModalProps {
//     open: boolean
//     onClose: () => void
// }

export default function SmsCampaignModal({ open, onClose }) {
    const [message, setMessage] = useState("")
    const [audience, setAudience] = useState("All Patients")

    const handleSend = () => {
        console.log("Sending SMS:", { message, audience })
        onClose()
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Send SMS Notification"
            onCancel={onClose}
            onAction={handleSend}
            actionLabel="Send SMS"
            maxWidth="sm"
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Info Text */}
                <Typography
                    sx={{
                        color: "#0F7DC1",
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "center",
                    }}
                >
                    Send text message to patients
                </Typography>

                {/* Message Field */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        Message* (160 characters max)
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value.slice(0, 160))}
                        placeholder="Type your message here..."
                        inputProps={{ maxLength: 160 }}
                        sx={{
                            backgroundColor: "#E0E0E0",
                            borderRadius: "6px",
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#E0E0E0",
                                "& fieldset": {
                                    border: "none",
                                },
                            },
                            "& .MuiInputBase-input": {
                                padding: "12px",
                                fontSize: "14px",
                            },
                        }}
                    />
                </Box>

                {/* Audience Dropdown */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        Audience
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            value={audience}
                            onChange={(e) => setAudience(e.target.value)}
                            sx={{
                                backgroundColor: "#E0E0E0",
                                borderRadius: "6px",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "& .MuiSelect-select": {
                                    padding: "12px",
                                    fontSize: "14px",
                                },
                            }}
                        >
                            <MenuItem value="All Patients">All Patients</MenuItem>
                            <MenuItem value="Active Patients">Active Patients</MenuItem>
                            <MenuItem value="New Patients">New Patients</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </BaseModal>
    )
}
