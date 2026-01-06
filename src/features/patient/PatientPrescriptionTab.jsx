import { useState } from "react"
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Avatar,
    Typography,
    InputAdornment,
    Stack,
    styled
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import FilterListIcon from "@mui/icons-material/FilterList"
import AddIcon from "@mui/icons-material/Add"
import AddPrescriptionModal from "./AddPrescription"

const prescriptions = [
    {
        id: "1",
        medicine: "Emadstine",
        brand: "Allegra",
        description: "2x Daily for 7 days + Refills: 0",
        date: "2025-01-15",
        color: "#FF6B6B",
    },
    {
        id: "2",
        medicine: "Fexofenadine",
        brand: "Allegra",
        description: "As needed for pain",
        date: "2025-01-15",
        color: "#FF9F43",
    },
]

const ActionButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    borderRadius: "8px",
    padding: "8px 24px",
    fontWeight: 500,
    boxShadow: "none",
}))


const SearchField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        "& fieldset": {
            borderColor: "#e2e8f0",
        },
    },
    "& .MuiInputBase-input": {
        padding: "8px 12px",
    },
}))


export default function PrescriptionTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpen = () => {
        setModalOpen(true)
    }


    return (
        <Box sx={{ backgroundColor: "#ffffff", borderRadius: "12px", p: 2, border: "1px solid #e2e8f0" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <SearchField
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#a0aec0" }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ width: "240px" }}
                />
                <Stack direction="row" spacing={2}>
                    <ActionButton
                        variant="outlined"
                        startIcon={<FilterListIcon />}
                        sx={{ borderColor: "#e2e8f0", color: "#4a5568" }}
                    >
                        Filter
                    </ActionButton>
                    <ActionButton onClick={handleOpen} variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: "#005492" }}>
                        Add Prescription
                    </ActionButton>
                </Stack>
            </Stack>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #E0E0E0" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>Medicine</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>Description</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prescriptions.map((prescription) => (
                            <TableRow key={prescription.id} hover>
                                <TableCell>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Avatar
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                backgroundColor: prescription.color,
                                            }}
                                        >
                                            {prescription.medicine.charAt(0)}
                                        </Avatar>
                                        <Box>
                                            <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>{prescription.medicine}</Typography>
                                            <Typography sx={{ fontSize: "0.75rem", color: "#757575" }}>{prescription.brand}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>{prescription.description}</TableCell>
                                <TableCell>{prescription.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <AddPrescriptionModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </Box>
    )
}
