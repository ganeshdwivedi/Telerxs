import { useState } from "react"
import { Box, TextField, MenuItem, Select, FormControl, Typography, Button } from "@mui/material"
import ImageIcon from "@mui/icons-material/Image"
import BaseModal from "../../components/BaseModal"
// interface CreateEmailCampaignModalProps {
//     open: boolean
//     onClose: () => void
// }

export default function EmailCampaignModal({ open, onClose }) {
    const [subjectLine, setSubjectLine] = useState("")
    const [message, setMessage] = useState("")
    const [audience, setAudience] = useState("All Patients")
    const [schedule, setSchedule] = useState("Send Now")

    const handleSend = () => {
        console.log("Sending Email Campaign:", { subjectLine, message, audience, schedule })
        onClose()
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Create Email Campaign"
            onCancel={onClose}
            onAction={handleSend}
            actionLabel="Send Email"
            maxWidth="md"
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
                    Send email notifications to patients
                </Typography>

                {/* Upload Images */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        Upload Images
                    </Typography>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<ImageIcon />}
                        sx={{
                            backgroundColor: "#E0E0E0",
                            borderRadius: "6px",
                            border: "none",
                            color: "#666",
                            textTransform: "none",
                            padding: "12px",
                            fontSize: "14px",
                            justifyContent: "flex-start",
                            "&:hover": {
                                backgroundColor: "#D5D5D5",
                                border: "none",
                            },
                        }}
                    >
                        Upload Images
                    </Button>
                </Box>

                {/* Subject Line */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333",
                            marginBottom: "8px",
                        }}
                    >
                        Subject Line*
                    </Typography>
                    <TextField
                        fullWidth
                        value={subjectLine}
                        onChange={(e) => setSubjectLine(e.target.value)}
                        placeholder="Enter email subject"
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
                        placeholder="Enter email message"
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

                {/* Audience and Schedule - Two Columns */}
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    {/* Audience */}
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

                    {/* Schedule */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#333",
                                marginBottom: "8px",
                            }}
                        >
                            Schedule
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={schedule}
                                onChange={(e) => setSchedule(e.target.value)}
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
                                <MenuItem value="Send Now">Send Now</MenuItem>
                                <MenuItem value="Schedule Later">Schedule Later</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </BaseModal>
    )
}
