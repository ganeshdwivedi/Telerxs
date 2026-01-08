import { Box, TextField, Button, Stack, Typography, InputBase } from "@mui/material"
import { useState } from "react"
import { ImageUploader } from "../../components/ImageUploader"
import GradientButton from "../../components/GradientBtn"

const FooterLogoPage = () => {
    const [logoImage, setLogoImage] = useState(null)
    const [description, setDescription] = useState("Experience personalized medical care from the comfort of your home.")

    const handleImageUpload = (file) => {
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setLogoImage(e.target?.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Box sx={{ padding: 2, bgcolor: "white", borderRadius: 2, border: '1px solid #E6E8EE' }}>
            <Typography sx={{ fontWeight: 600, marginBottom: "24px", }}>
                Logo
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: "48px",
                    alignItems: "flex-start",
                    marginBottom: "32px",
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <ImageUploader
                        preview={logoImage || undefined}
                        onImageChange={handleImageUpload}
                        variant="circle"
                        size="large"
                    />
                </Box>
            </Box>

            <Box sx={{ marginBottom: "24px", p: 2, border: '1px solid #DBDBDB40', borderRadius: 2 }}>
                <Typography sx={{ marginBottom: "8px", fontWeight: 500, color: '#3D3D3D' }}>
                    Company Description
                </Typography>
                <InputBase
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter company description"
                    sx={{
                        border: "1px solid #E0E0E0",
                        p: 1,
                        borderRadius: 2,
                        "& .MuiInputBase-root": {
                            bgcolor: "#F5F5F5",
                            borderRadius: "4px",
                            padding: "12px",

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
    )
}
export default FooterLogoPage