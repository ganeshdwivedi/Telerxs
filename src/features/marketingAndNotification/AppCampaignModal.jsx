import { useState } from "react"
import { Box, TextField, MenuItem, Select, FormControl, Typography } from "@mui/material"
import BaseModal from '../../components/BaseModal'

// interface SendPushNotificationModalProps {
//     open: boolean
//     onClose: () => void
// }

export default function AppCampaignModal({ open, onClose }) {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [audience, setAudience] = useState("All Mobile Users")

    const handleSend = () => {
        console.log("Sending Push Notification:", { title, message, audience })
        onClose()
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Send Push Notification"
            onCancel={onClose}
            onAction={handleSend}
            actionLabel="Send Notification"
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
                    Send notification to mobile app users
                </Typography>

                {/* Title Field */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        Title*
                    </Typography>
                    <TextField
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter notification title"
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
                        Message*
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter notification message"
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
                            <MenuItem value="All Mobile Users">All Mobile Users</MenuItem>
                            <MenuItem value="Active Users">Active Users</MenuItem>
                            <MenuItem value="iOS Users">iOS Users</MenuItem>
                            <MenuItem value="Android Users">Android Users</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </BaseModal>
    )
}
