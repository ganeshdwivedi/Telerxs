import { useState } from "react"
import { Box, TextField, Button, Typography, Chip, Paper } from "@mui/material"
import { RichTextEditor } from "@/components/rich-text-editor"

// interface Category {
//     id: string
//     name: string
// }

// interface Tag {
//     id: string
//     name: string
// }

export function BlogDetailsPage() {
    const [blogTitle, setBlogTitle] = useState("Blog: title 1")
    const [categories, setCategories] = useState([{ id: "1", name: "Bacterial Infection" }])
    const [tags, setTags] = useState([
        { id: "1", name: "Bacterial" },
        { id: "2", name: "Infection" },
        { id: "3", name: "Pharmacy" },
    ])
    const [editorContent, setEditorContent] = useState(
        "## Who We Are\n\n(Company Name) is a modern, technology-enabled telehealth and online pharmacy service dedicated to making prescription medications accessible, affordable, and hassle-free. We believe everyone deserves fast, simple access to the treatments they need – without traditional doctor visits, insurance complications, or pharmacy waiting lines.\n\n### Contact Us\n\n## What We Do\n\nWe connect you with licensed healthcare providers through a secure and streamlined online process. You complete a short health intake, and if approved, your prescription is issued digitally.",
    )
    const [imagePreview, setImagePreview] = useState(null)

    const handleRemoveCategory = (id) => {
        setCategories(categories.filter((cat) => cat.id !== id))
    }

    const handleRemoveTag = (id) => {
        setTags(tags.filter((tag) => tag.id !== id))
    }

    const handleImageChange = (file) => {
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePreview(e.target?.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Paper sx={{ bgcolor: "#F9F9F9", minHeight: "100vh", p: 4 }}>
            <Box sx={{ maxWidth: "100%", bgcolor: "white", p: 4, borderRadius: 2 }}>
                {/* Header */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: "#333" }}>
                    Blog Details
                </Typography>

                {/* Blog Title */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: "#666" }}>
                        Blog Title
                    </Typography>
                    <TextField
                        fullWidth
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        placeholder="Enter blog title"
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

                {/* Category and Tags Row */}
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mb: 3 }}>
                    {/* Category */}
                    <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: "#666" }}>
                            Category
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                            {categories.map((cat) => (
                                <Chip
                                    key={cat.id}
                                    label={cat.name}
                                    onDelete={() => handleRemoveCategory(cat.id)}
                                    sx={{
                                        bgcolor: "#E3F2FD",
                                        color: "#0F7DC1",
                                        fontWeight: 500,
                                        fontSize: 13,
                                        "& .MuiChip-deleteIcon": {
                                            color: "#0F7DC1",
                                            ml: 0.5,
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Tags */}
                    <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: "#666" }}>
                            Tags
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                            {tags.map((tag) => (
                                <Chip
                                    key={tag.id}
                                    label={tag.name}
                                    onDelete={() => handleRemoveTag(tag.id)}
                                    sx={{
                                        bgcolor: "#E3F2FD",
                                        color: "#0F7DC1",
                                        fontWeight: 500,
                                        fontSize: 13,
                                        "& .MuiChip-deleteIcon": {
                                            color: "#0F7DC1",
                                            ml: 0.5,
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Add Media Button */}
                <Box sx={{ mb: 3 }}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#0F7DC1",
                            color: "white",
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: 14,
                            "&:hover": { bgcolor: "#0D6BA3" },
                        }}
                    >
                        + Add Media
                    </Button>
                </Box>

                {/* Rich Text Editor */}
                <Box sx={{ mb: 3 }}>
                    <RichTextEditor value={editorContent} onChange={setEditorContent} />
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 3 }}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#999",
                            color: "white",
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: 14,
                            px: 3,
                            "&:hover": { bgcolor: "#777" },
                        }}
                    >
                        Save Draft
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#0F7DC1",
                            color: "white",
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: 14,
                            px: 3,
                            "&:hover": { bgcolor: "#0D6BA3" },
                        }}
                    >
                        Save & Publish
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}
