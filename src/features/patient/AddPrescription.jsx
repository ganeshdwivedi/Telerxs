import {
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    Box,
    MenuItem,
    FormControl,
    Select,
    Typography,
} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AddPrescriptionModal({ open, onClose }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                },
            }}
        >
            <DialogTitle
                sx={{
                    backgroundColor: "#005492",
                    color: "white",
                    py: 2,
                    px: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography sx={{ fontSize: "1.125rem", fontWeight: 500 }}>Add Prescription</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                        onClick={onClose}
                        variant="outlined"
                        sx={{
                            color: "white",
                            borderColor: "rgba(255, 255, 255, 0.5)",
                            textTransform: "none",
                            px: 4,
                            "&:hover": {
                                borderColor: "white",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            textTransform: "none",
                            px: 4,
                            "&:hover": {
                                backgroundColor: "#F5F5F5",
                            },
                        }}
                    >
                        Add Note
                    </Button>
                </Box>
            </DialogTitle>

            <DialogContent sx={{ p: 3, backgroundColor: "#FAFAFA" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 3 }}>
                    <Box>
                        <Typography sx={{ mb: 1, fontSize: "0.875rem", fontWeight: 500, color: "#424242" }}>Medicine*</Typography>
                        <FormControl fullWidth>
                            <Select IconComponent={KeyboardArrowDownIcon}
                                defaultValue=""
                                displayEmpty
                                sx={{
                                    borderRadius: 2,
                                    backgroundColor: "#E0E0E0",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select
                                </MenuItem>
                                <MenuItem value="dr-smith">Dr. Smith</MenuItem>
                                <MenuItem value="dr-johnson">Dr. Johnson</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <Typography sx={{ mb: 1, fontSize: "0.875rem", fontWeight: 500, color: "#424242" }}>Brand*</Typography>
                        <FormControl fullWidth>
                            <Select IconComponent={KeyboardArrowDownIcon}
                                defaultValue=""
                                displayEmpty
                                sx={{
                                    borderRadius: 2,
                                    backgroundColor: "#E0E0E0",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select
                                </MenuItem>
                                <MenuItem value="dr-smith">Dr. Smith</MenuItem>
                                <MenuItem value="dr-johnson">Dr. Johnson</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <Typography sx={{ mb: 1, fontSize: "0.875rem", fontWeight: 500, color: "#424242" }}>
                            Description*
                        </Typography>
                        <TextField
                            multiline
                            rows={2}
                            fullWidth
                            placeholder=""
                            sx={{
                                backgroundColor: "#E0E0E0",
                                borderRadius: 2,
                                "& .MuiOutlinedInput-root": {

                                    "& fieldset": {
                                        border: "none",

                                    },
                                },
                            }}
                        />
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
