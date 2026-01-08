import { Box, Button, Stack, Typography } from "@mui/material"
import { Add as AddIcon } from "@mui/icons-material"
import { useState } from "react"
import { ImageUploader } from "../../components/ImageUploader"
import RichTextEditor from "../../components/RichTextEditor"
import GradientButton from "../../components/GradientBtn"
import { useSearchParams } from "react-router-dom"
import { footerPages } from "../../components/FooterManagementSidebar"

const FooterAboutUsPage = () => {
    const [editorState, setEditorState] = useState()
    const [aboutImage, setAboutImage] = useState(null);
    const [searchParams] = useSearchParams();

    const activeValue = searchParams.get('active')

    const handleImageUpload = (file) => {
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setAboutImage(e.target?.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Box sx={{ padding: 2, bgcolor: "white", borderRadius: 2, border: '1px solid #E6E8EE' }}>
            <Box >
                <Typography sx={{ fontWeight: 700, color: '#3D3D3D' }}>
                    {footerPages?.find((page) => page.id === activeValue)?.label}
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        mt: 3,
                        bgcolor: "#00598D",
                        textTransform: "none",
                        "&:hover": {
                            bgcolor: "#0A5FA0",
                        },
                    }}
                >
                    Add Media
                </Button>
            </Box>

            <Box sx={{ marginY: "32px" }}>

                <RichTextEditor value={editorState} onChange={setEditorState} />
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

export default FooterAboutUsPage;


