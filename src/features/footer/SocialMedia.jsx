import { Box, TextField, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import GradientButton from "../../components/GradientBtn"

const SocialMedia = () => {
    const [facebook, setFacebook] = useState("www.facebook-link.com")
    const [instagram, setInstagram] = useState("www.instagram-link.com")
    const [linkedin, setLinkedin] = useState("www.linkedin-link.com")
    const [youtube, setYoutube] = useState("www.youtube-link.com")

    return (
        <Box sx={{ padding: 2, bgcolor: "white", borderRadius: 2, border: '1px solid #E6E8EE' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "24px" }}>
                Social Media
            </Typography>

            <Box sx={{ p: 2, border: '1px solid #E6E8EE', borderRadius: 2 }}>
                <Box sx={{ marginBottom: "20px" }}>
                    <Typography variant="subtitle2" sx={{ marginBottom: "8px", fontWeight: 600, color: "#333" }}>
                        Facebook link
                    </Typography>
                    <TextField
                        fullWidth
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
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
                        Instagram link
                    </Typography>
                    <TextField
                        fullWidth
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
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
                        Linkedin link
                    </Typography>
                    <TextField
                        fullWidth
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
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
                        YouTube link
                    </Typography>
                    <TextField
                        fullWidth
                        value={youtube}
                        onChange={(e) => setYoutube(e.target.value)}
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
        </Box>
    )
}

export default SocialMedia;
