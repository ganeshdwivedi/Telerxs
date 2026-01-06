import {
    Box, styled, InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Stack,
    Avatar,
    Typography,
    Paper
} from '@mui/material'
import React, { useState } from 'react'

import SearchIcon from "@mui/icons-material/Search"
import FilterListIcon from "@mui/icons-material/FilterList"
import AddIcon from "@mui/icons-material/Add"
import AddHealthHistoryModal from './AddHealth'



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

const ActionButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    borderRadius: "8px",
    padding: "8px 24px",
    fontWeight: 500,
    boxShadow: "none",
}))


const history = [
    {
        doctor: "Dr. Sarah Jenkins",
        email: "sarah.j@mediprime.com",
        description: "Routine Checkup",
        date: "2025-01-15",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        doctor: "Dr. Mark Lee",
        email: "mark.lee@example.com",
        description: "Flu Vaccination",
        date: "2025-01-15",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        doctor: "Dr. Emily Chen",
        email: "e.chen@mediprime.com",
        description: "Migraine Consultation",
        date: "2025-12-20",
        avatar: "/placeholder.svg?height=40&width=40",
    },
]


const PatientHealthHistory = () => {
    const [open, setOpen] = useState(false); // state for adding health history modal

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
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
                        Add Health History
                    </ActionButton>
                </Stack>
            </Stack>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #E0E0E0" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#f8fafc" }}>
                            <TableCell sx={{ color: "#718096", fontWeight: 700 }}>Doctor</TableCell>
                            <TableCell sx={{ color: "#718096", fontWeight: 700 }}>Description</TableCell>
                            <TableCell sx={{ color: "#718096", fontWeight: 700 }}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar src={row.avatar} sx={{ width: 40, height: 40 }} />
                                        <Box>
                                            <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>{row.doctor}</Typography>
                                            <Typography sx={{ fontSize: "12px", color: "#718096" }}>{row.email}</Typography>
                                        </Box>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ fontSize: "14px" }}>{row.description}</TableCell>
                                <TableCell sx={{ fontSize: "14px" }}>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddHealthHistoryModal onClose={handleClose} open={open} />
        </Box>
    )
}

export default PatientHealthHistory