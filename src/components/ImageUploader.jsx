
import { Box, Avatar, CircularProgress } from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"
import { useState, useRef } from "react"

// interface ImageUploaderProps {
//     label?: string
//     onImageChange?: (file: File | null) => void
//     preview?: string
//     variant?: "circle" | "rectangle"
//     size?: "small" | "medium" | "large"
// }

export function ImageUploader({
    label = "Upload Image",
    onImageChange,
    preview,
    variant = "circle",
    size = "medium",
}) {
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef(null)


    const handleFileChange = (event) => {
        const file = event.target.files?.[0]
        if (file) {
            setLoading(true)
            const reader = new FileReader()
            reader.onload = () => {
                setLoading(false)
            }
            reader.readAsDataURL(file)
            onImageChange?.(file)
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const sizeConfig = {
        small: { size: 80, iconSize: 24 },
        medium: { size: 140, iconSize: 32 },
        large: { size: 200, iconSize: 40 },
    }

    const config = sizeConfig[size]

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />

            {variant === "circle" ? (
                <Box
                    sx={{
                        position: "relative",
                        width: config.size,
                        height: config.size,
                    }}
                >
                    <Avatar
                        src={preview}
                        sx={{
                            width: config.size,
                            height: config.size,
                            bgcolor: "#E0E0E0",
                            fontSize: 40,
                        }}
                    >
                        {!preview && <PhotoCamera sx={{ fontSize: config.iconSize, color: "#999" }} />}
                    </Avatar>
                    <Box
                        onClick={handleClick}
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            bgcolor: "#757575",
                            borderRadius: "50%",
                            width: 40,
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            "&:hover": { bgcolor: "#616161" },
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={24} sx={{ color: "white" }} />
                        ) : (
                            <PhotoCamera sx={{ color: "white", fontSize: 20 }} />
                        )}
                    </Box>
                </Box>
            ) : (
                <Box
                    onClick={handleClick}
                    sx={{
                        width: "100%",
                        height: 200,
                        bgcolor: "#E0E0E0",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundImage: preview ? `url(${preview})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "all 0.3s",
                        "&:hover": { bgcolor: "#D0D0D0" },
                    }}
                >
                    {!preview && (
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                            {loading ? (
                                <CircularProgress size={40} />
                            ) : (
                                <>
                                    <PhotoCamera sx={{ fontSize: 48, color: "#999" }} />
                                    <span style={{ color: "#666", fontSize: 14 }}>{label}</span>
                                </>
                            )}
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    )
}
