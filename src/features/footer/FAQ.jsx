import { useState } from "react"
import { Box, TextField, Button, Typography, Paper, Stack } from "@mui/material"
import { Add } from "@mui/icons-material"
import GradientButton from "../../components/GradientBtn"

// interface FAQ {
//     id: string
//     title: string
//     description: string
// }

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            id: "1",
            title: "",
            description: "",
        },
    ])

    const handleAddFAQ = () => {
        setFaqs([
            ...faqs,
            {
                id: Date.now().toString(),
                title: "",
                description: "",
            },
        ])
    }

    const handleFAQChange = (id, field, value) => {
        setFaqs(faqs.map((faq) => (faq.id === id ? { ...faq, [field]: value } : faq)))
    }

    const handleRemoveFAQ = (id) => {
        if (faqs.length > 1) {
            setFaqs(faqs.filter((faq) => faq.id !== id))
        }
    }

    return (
        <Box sx={{ padding: 2, bgcolor: "white", borderRadius: 2, border: '1px solid #E6E8EE' }}>
            <Box sx={{ maxWidth: "100%", bgcolor: "white", p: 4, borderRadius: 2 }}>
                {/* Header */}
                <Typography sx={{ fontWeight: 700, color: '#3D3D3D', mb: 3 }}>
                    FAQs
                </Typography>

                {/* FAQ Items */}
                {faqs.map((faq, index) => (
                    <Box key={faq.id} sx={{ mb: 3 }}>
                        {/* Title */}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: "#666" }}>
                                Title
                            </Typography>
                            <TextField
                                fullWidth
                                value={faq.title}
                                onChange={(e) => handleFAQChange(faq.id, "title", e.target.value)}
                                placeholder="Enter FAQ title"
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        fontSize: 14,
                                        bgcolor: "#FAFAFA",
                                    },
                                }}
                            />
                        </Box>

                        {/* Description */}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: "#666" }}>
                                Description
                            </Typography>
                            <TextField
                                fullWidth
                                value={faq.description}
                                onChange={(e) => handleFAQChange(faq.id, "description", e.target.value)}
                                placeholder="Enter FAQ description"
                                variant="outlined"
                                multiline
                                rows={4}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        fontSize: 14,
                                        bgcolor: "#FAFAFA",
                                    },
                                }}
                            />
                        </Box>

                        {faqs.length > 1 && (
                            <Box sx={{ mb: 3, pb: 3, borderBottom: "1px solid #E0E0E0" }}>
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => handleRemoveFAQ(faq.id)}
                                    sx={{
                                        color: "#999",
                                        textTransform: "none",
                                        fontSize: 12,
                                        "&:hover": { color: "#666" },
                                    }}
                                >
                                    Remove FAQ
                                </Button>
                            </Box>
                        )}
                    </Box>
                ))}

                {/* Add More FAQ Button */}
                <Box
                    sx={{
                        border: "2px dashed #D0D0D0",
                        borderRadius: 2,
                        py: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        mb: 3,
                        "&:hover": {
                            borderColor: "#0F7DC1",
                            bgcolor: "#F0F8FF",
                        },
                    }}
                    onClick={handleAddFAQ}
                >
                    <Button
                        startIcon={<Add />}
                        sx={{
                            color: "#0F7DC1",
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: 14,
                            "&:hover": { bgcolor: "transparent" },
                        }}
                    >
                        Add More FAQ
                    </Button>
                </Box>

                {/* Action Buttons */}
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
export default FAQ;