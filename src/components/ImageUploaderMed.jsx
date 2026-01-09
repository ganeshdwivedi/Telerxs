import { Box, Typography, IconButton } from "@mui/material"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import CloseIcon from "@mui/icons-material/Close"
import { useRef, useState, useEffect } from "react"

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

export default function ImageUploader({
    label = "Upload Images",
    maxImages = 5,
    defaultImages = [],
    onChange = () => { },
    required = false,
}) {
    const fileInputRef = useRef(null)
    const [images, setImages] = useState([])

    // Load default URLs
    useEffect(() => {
        if (defaultImages.length > 0) {
            const defaults = defaultImages.map((url) => ({
                file: null,
                preview: url,
                url,
            }))
            setImages(defaults)
        }
    }, [defaultImages])

    const openFilePicker = () => {
        fileInputRef.current.value = null
        fileInputRef.current.click()
    }

    // 🔼 Upload single image to Cloudinary
    const uploadToCloudinary = async (file) => {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
            const res = await fetch(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            )

            const data = await res.json()
            return data.secure_url
        } catch (error) {
            alert("An Error Occured")
        }
    }

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files)
        const allowedFiles = files.slice(0, maxImages - images.length)

        const uploadedImages = []

        for (const file of allowedFiles) {
            const preview = URL.createObjectURL(file)
            const url = await uploadToCloudinary(file)

            uploadedImages.push({
                file,
                preview,
                url,
            })
        }

        const updatedImages = [...images, ...uploadedImages]
        setImages(updatedImages)

        // ✅ Send only URLs to parent
        onChange(updatedImages.map((img) => img.url))
    }

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index)
        setImages(updatedImages)
        onChange(updatedImages.map((img) => img.url))
    }

    return (
        <Box>
            <Typography sx={{ fontSize: 14, fontWeight: 500, mb: 1 }}>
                {label} {required && <span style={{ color: "#EF4444" }}>*</span>}
            </Typography>

            <Box
                sx={{
                    minHeight: 56,
                    backgroundColor: "#E5E5E5",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    gap: 1,
                    cursor: "pointer",
                }}
                onClick={(e) => e.target === e.currentTarget && openFilePicker()}
            >
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {images.length === 0 && (
                        <Typography sx={{ fontSize: 14, color: "#6B7280" }}>
                            {label}
                        </Typography>
                    )}

                    {images.map((img, index) => (
                        <Box key={index} sx={{ position: "relative", width: 40, height: 40 }}>
                            <Box
                                component="img"
                                src={img.preview}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 1,
                                    objectFit: "cover",
                                    border: "1px solid #D1D5DB",
                                }}
                            />

                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleRemoveImage(index)
                                }}
                                sx={{
                                    position: "absolute",
                                    top: -6,
                                    right: -6,
                                    backgroundColor: "white",
                                    width: 18,
                                    height: 18,
                                }}
                            >
                                <CloseIcon sx={{ fontSize: 14, color: "#EF4444" }} />
                            </IconButton>
                        </Box>
                    ))}
                </Box>

                <IconButton
                    onClick={(e) => {
                        e.stopPropagation()
                        openFilePicker()
                    }}
                >
                    <ImageOutlinedIcon />
                </IconButton>
            </Box>

            <input
                ref={fileInputRef}
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleFileChange}
            />
        </Box>
    )
}
