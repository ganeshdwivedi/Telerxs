
import { useState } from "react"
import { TextField, Box, Typography, Grid, IconButton } from "@mui/material"
import ImageIcon from "@mui/icons-material/Image"
import BaseModal from "../components/BaseModal"


export default function AddMedicineModal({ open, onClose, onSubmit, initialData }) {
    const [formData, setFormData] = useState(
        initialData || {
            productName: "",
            brand: "",
            originalPrice: "",
            salePrice: "",
            markup: "",
            uploadImages: "",
            productImages: "",
        },
    )

    const handleSubmit = () => {
        onSubmit(formData)
        onClose()
    }

    const inputStyle = {
        backgroundColor: "#E0E0E0",
        borderRadius: "6px",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "none",
            },
        },
        "& .MuiInputBase-input": {
            padding: "12px 14px",
            fontSize: "14px",
        },
    }

    const labelStyle = {
        fontSize: "12px",
        fontWeight: 500,
        marginBottom: "8px",
        color: "#000",
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Add/Edit Medicine"
            onCancel={onClose}
            onAction={handleSubmit}
            actionLabel="Save"
            maxWidth="sm"
        >
            <Box mt={3}>
                {/* Basic Information Header */}
                <Typography
                    sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#00607C",
                        marginBottom: "16px",
                        textAlign: "center"
                    }}
                >
                    Basic Information
                </Typography>

                <Box sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",          // Mobile: stacked
                        md: "1fr 1fr",      // Desktop: 8/12 + 4/12
                    },
                    gap: 3,
                    mb: 4,
                }}>
                    {/* Product Name */}
                    <Box>
                        <Typography sx={labelStyle}>Product Name *</Typography>
                        <TextField
                            fullWidth
                            placeholder="Lisinopril"
                            value={formData.productName}
                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                            sx={inputStyle}
                        />
                    </Box>

                    {/* Brand */}
                    <Box >
                        <Typography sx={labelStyle}>Brand *</Typography>
                        <TextField
                            fullWidth
                            placeholder="Generic"
                            value={formData.brand}
                            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                            sx={inputStyle}
                        />
                    </Box>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",          // Mobile: stacked
                        md: "1fr 1fr 1fr",      // Desktop: 8/12 + 4/12
                    },
                    gap: 3,
                    mb: 4,
                }}>
                    {/* Original Price */}
                    <Box >
                        <Typography sx={labelStyle}>Original Price ($)</Typography>
                        <TextField
                            fullWidth
                            placeholder="20.00"
                            value={formData.originalPrice}
                            onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                            sx={inputStyle}
                        />
                    </Box>

                    {/* Sale Price */}
                    <Box >
                        <Typography sx={labelStyle}>Sale Price ($)</Typography>
                        <TextField
                            fullWidth
                            placeholder="18.00"
                            value={formData.salePrice}
                            onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                            sx={inputStyle}
                        />
                    </Box>

                    {/* Markup */}
                    <Box >
                        <Typography sx={labelStyle}>Markup (%)</Typography>
                        <TextField
                            fullWidth
                            placeholder="10"
                            value={formData.markup}
                            onChange={(e) => setFormData({ ...formData, markup: e.target.value })}
                            sx={inputStyle}
                        />
                    </Box>
                </Box>



                <Box>
                    {/* Product Images Header */}
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "#00607C",
                                marginBottom: "16px",
                                textAlign: 'center'
                            }}
                        >
                            Product Images
                        </Typography>
                    </Grid>

                    {/* Upload Images */}
                    <Grid item xs={6}>
                        <Typography sx={labelStyle}>Upload Images *</Typography>
                        <Box
                            sx={{
                                backgroundColor: "#E0E0E0",
                                borderRadius: "6px",
                                padding: "40px 14px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                minHeight: "100px",
                            }}
                        >
                            <ImageIcon sx={{ color: "#757575", fontSize: 40 }} />
                        </Box>
                    </Grid>


                </Box>

                {/* Usage & Prescriptions Link */}
                <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "#00607C",
                            cursor: "pointer",
                            fontWeight: 500,
                            marginBottom: "-18px",
                        }}
                    >
                        Usage & Prescriptions
                    </Typography>
                </Box>
            </Box>
        </BaseModal>
    )
}
