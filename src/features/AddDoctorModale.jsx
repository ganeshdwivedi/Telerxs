import { useState } from "react"
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    Grid,
    Box,
} from "@mui/material"
import BaseModal from "../components/BaseModal";



export default function AddDoctorModal({ open, onClose, onSubmit, initialData }) {
    const [formData, setFormData] = useState(
        initialData || {
            firstName: "Sarah",
            lastName: "Jenkins",
            email: "sarah.j@mediprime.com",
            specialty: "General Practice",
            licenseNumber: "#MD-849201",
            consultationFee: "$ 150.00",
            status: "Active",
        },
    );

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

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Add/Edit Doctor"
            onCancel={onClose}
            onAction={handleSubmit}
            actionLabel="Update"
            maxWidth="md"
        >
            <Box sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",          // Mobile: stacked
                    md: "1fr 1fr",      // Desktop: 8/12 + 4/12
                },
                gap: 3,
                // mb: 4,
                mt: 4,
            }}>
                {/* First Name */}
                <Grid item >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "8px",
                            color: "#000",
                        }}
                    >
                        First Name*
                    </Typography>
                    <TextField
                        fullWidth
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        sx={inputStyle}
                    />
                </Grid>

                {/* Last Name */}
                <Grid item xs={24}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "8px",
                            color: "#000",
                        }}
                    >
                        Last Name*
                    </Typography>
                    <TextField
                        fullWidth
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        sx={inputStyle}
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "8px",
                            color: "#000",
                        }}
                    >
                        Email*
                    </Typography>
                    <TextField
                        fullWidth
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        sx={inputStyle}
                    />
                </Grid>

                {/* Specialty */}
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "8px",
                            color: "#000",
                        }}
                    >
                        Specialty*
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            value={formData.specialty}
                            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                            sx={{
                                ...inputStyle,
                                "& .MuiSelect-select": {
                                    padding: "12px 14px",
                                    fontSize: "14px",
                                },
                            }}
                        >
                            <MenuItem value="General Practice">General Practice</MenuItem>
                            <MenuItem value="Cardiology">Cardiology</MenuItem>
                            <MenuItem value="Dermatology">Dermatology</MenuItem>
                            <MenuItem value="Pediatrics">Pediatrics</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* License Number */}
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "8px",
                            color: "#000",
                        }}
                    >
                        License Number*
                    </Typography>
                    <TextField
                        fullWidth
                        value={formData.licenseNumber}
                        onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                        sx={inputStyle}
                    />
                </Grid>

                {/* Consultation Fee */}
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "8px",
                            color: "#000",
                        }}
                    >
                        Consultation Fee/hr*
                    </Typography>
                    <TextField
                        fullWidth
                        value={formData.consultationFee}
                        onChange={(e) => setFormData({ ...formData, consultationFee: e.target.value })}
                        sx={inputStyle}
                    />
                </Grid>

                {/* Status */}
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            marginBottom: "12px",
                            color: "#000",
                        }}
                    >
                        Status
                    </Typography>
                    <RadioGroup
                        row
                        value={formData.status}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                status: e.target.value,
                            })
                        }
                    >
                        <FormControlLabel
                            value="Active"
                            control={
                                <Radio
                                    sx={{
                                        color: "#00607C",
                                        "&.Mui-checked": {
                                            color: "#00607C",
                                        },
                                    }}
                                />
                            }
                            label="Active"
                            sx={{
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "14px",
                                },
                            }}
                        />
                        <FormControlLabel
                            value="Pending"
                            control={
                                <Radio
                                    sx={{
                                        color: "#9E9E9E",
                                        "&.Mui-checked": {
                                            color: "#9E9E9E",
                                        },
                                    }}
                                />
                            }
                            label="Pending"
                            sx={{
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "14px",
                                },
                            }}
                        />
                        <FormControlLabel
                            value="Suspend"
                            control={
                                <Radio
                                    sx={{
                                        color: "#9E9E9E",
                                        "&.Mui-checked": {
                                            color: "#9E9E9E",
                                        },
                                    }}
                                />
                            }
                            label="Suspend"
                            sx={{
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "14px",
                                },
                            }}
                        />
                    </RadioGroup>
                </Grid>
            </Box>
        </BaseModal>
    )
}
