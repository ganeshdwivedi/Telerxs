import { Box, TextField, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import GradientButton from "../../components/GradientBtn"

const Contact = () => {
    const [primaryMobile, setPrimaryMobile] = useState("+91 - 9876543211")
    const [secondaryMobile, setSecondaryMobile] = useState("+91 - 9876123456")
    const [email, setEmail] = useState("xyz@mail.com")

    return (
        <Box sx={{ padding: 2, bgcolor: "white", borderRadius: 2, border: '1px solid #E6E8EE' }}>
            <Typography sx={{ fontWeight: 700, color: '#3D3D3D', mb: 3 }}>
                Contact
            </Typography>

            <Box sx={{ p: 2, border: '1px solid #E6E8EE', borderRadius: 2 }}>
                <Box sx={{ marginBottom: "20px" }}>
                    <Typography variant="subtitle2" sx={{ marginBottom: "8px", fontWeight: 600, color: "#333" }}>
                        Primary Mobile Number
                    </Typography>
                    <TextField
                        fullWidth
                        value={primaryMobile}
                        onChange={(e) => setPrimaryMobile(e.target.value)}
                        sx={{
                            "& .MuiInputBase-root": {
                                bgcolor: "#FFFFFF",
                                borderRadius: "4px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#E0E0E0",
                            },
                        }}
                    />
                </Box>

                <Box sx={{ marginBottom: "20px" }}>
                    <Typography variant="subtitle2" sx={{ marginBottom: "8px", fontWeight: 600, color: "#333" }}>
                        Secondary Mobile Number
                    </Typography>
                    <TextField
                        fullWidth
                        value={secondaryMobile}
                        onChange={(e) => setSecondaryMobile(e.target.value)}
                        sx={{
                            "& .MuiInputBase-root": {
                                bgcolor: "#FFFFFF",
                                borderRadius: "4px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#E0E0E0",
                            },
                        }}
                    />
                </Box>

                <Box sx={{ marginBottom: "24px" }}>
                    <Typography variant="subtitle2" sx={{ marginBottom: "8px", fontWeight: 600, color: "#333" }}>
                        Email ID
                    </Typography>
                    <TextField
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            "& .MuiInputBase-root": {
                                bgcolor: "#FFFFFF",
                                borderRadius: "4px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#E0E0E0",
                            },
                        }}
                    />
                </Box>

                <Stack direction="row" spacing={2} sx={{ marginTop: "32px", justifyContent: 'flex-end' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: 2,
                            px: 2,
                            textTransform: "capitalize",
                            color: "white",
                            borderColor: "#888888",
                            bgcolor: "#888888",
                            "&:hover": {
                                bgcolor: "#ECECEC",
                                borderColor: "#666",
                                color: '#888888'
                            },
                        }}
                    >
                        Save Draft
                    </Button>
                    <GradientButton>
                        Save & Publish
                    </GradientButton>
                </Stack>
            </Box>
        </Box >
    )
}

export default Contact;
