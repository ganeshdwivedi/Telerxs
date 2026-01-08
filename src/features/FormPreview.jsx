import {
    Dialog,
    DialogContent,
    Box,
    Button,
    TextField,
    Typography,
    Grid,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormControlLabel,
    Checkbox,
} from "@mui/material"

// interface Field {
//     id: string
//     name: string
//     type: "Text" | "Number" | "Email" | "Date" | "Phone" | "Dropdown" | "Checkbox"
// }

// interface Section {
//     id: string
//     title: string
//     fields: Field[]
// }

// interface FormPreviewModalProps {
//     open: boolean
//     onClose: () => void
//     sections: Section[]
// }

export function FormPreviewModal({ open, onClose, sections }) {
    const renderField = (field) => {
        switch (field.type) {
            case "Text":
            case "Email":
            case "Phone":
                return (
                    <TextField
                        key={field.id}
                        label={field.name}
                        type={field.type === "Email" ? "email" : field.type === "Phone" ? "tel" : "text"}
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder={field.type === "Email" ? "example@example.com" : ""}
                    />
                )
            case "Number":
                return <TextField key={field.id} label={field.name} type="number" variant="outlined" size="small" fullWidth />
            case "Date":
                return (
                    <TextField
                        key={field.id}
                        label={field.name}
                        type="date"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                )
            case "Dropdown":
                return (
                    <FormControl key={field.id} fullWidth size="small">
                        <InputLabel>{field.name}</InputLabel>
                        <Select label={field.name}>
                            <MenuItem value="">Select an option</MenuItem>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                        </Select>
                    </FormControl>
                )
            case "Checkbox":
                return <FormControlLabel key={field.id} control={<Checkbox />} label={field.name} />
            default:
                return null
        }
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            {/* Header */}
            <Box
                sx={{
                    backgroundColor: "#005492",
                    color: "white",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    New Intake Form Preview
                </Typography>
                <Button
                    onClick={onClose}
                    sx={{
                        color: "white",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        textTransform: "none",
                        fontWeight: 500,
                        padding: "6px 16px",
                        borderRadius: "6px",
                        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    }}
                >
                    Close
                </Button>
            </Box>

            {/* Content */}
            <DialogContent sx={{ padding: "24px", backgroundColor: "#f9f9f9" }}>
                <Box sx={{ backgroundColor: "white", padding: "24px", borderRadius: "8px" }}>
                    {sections.map((section) => (
                        <Box key={section.id} sx={{ marginBottom: "32px" }}>
                            {/* Section Title */}
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    color: "#005492",
                                    marginBottom: "16px",
                                    fontSize: "16px",
                                }}
                            >
                                {section.title}
                            </Typography>

                            {/* Fields Grid */}
                            <Grid container spacing={2} sx={{ marginBottom: "24px" }}>
                                {section.fields.map((field) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={field.type === "Text" || field.type === "Email" ? 6 : 12}
                                        md={field.type === "Checkbox" ? 12 : 6}
                                        key={field.id}
                                    >
                                        {renderField(field)}
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Section Divider */}
                            {section.id !== sections[sections.length - 1]?.id && (
                                <Box sx={{ borderBottom: "1px solid #e0e0e0", marginBottom: "24px" }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </DialogContent>
        </Dialog>
    )
}
