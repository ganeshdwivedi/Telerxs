import { Avatar, Box, Button, Paper, Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import CustomSelect from '../../components/CustomSelect'


// interface ConsultationData {
//     id: string
//     doctor: {
//         name: string
//         email: string
//         avatar: string
//     }
//     patient: string
//     diagnosis: string
//     date: string
// }

const consultationData = [
    {
        id: "rx1",
        doctor: {
            name: "Dr. Sarah Jenkins",
            email: "sj-sarahjenkins.com",
            avatar: "/floyd-miles.jpg",
        },
        patient: "Daniel Stewart",
        diagnosis: "Bacterial Infection",
        date: "2025-01-15",
    },
    {
        id: "rx2",
        doctor: {
            name: "Dr. Mark Lee",
            email: "info.mark@demo.com",
            avatar: "/devon-lane.jpg",
        },
        patient: "Cameron Williamson",
        diagnosis: "Viral Infection",
        date: "2025-01-15",
    },
    {
        id: "rx3",
        doctor: {
            name: "Dr. Emily Chen",
            email: "emily@medexpress.com",
            avatar: "/leslie-alexander.jpg",
        },
        patient: "Jerome Bell",
        diagnosis: "Fungal Infection",
        date: "2025-12-20",
    },
    {
        id: "rx4",
        doctor: {
            name: "Dr. James Wilson",
            email: "james@medteam.com",
            avatar: "/jacob-jones.jpg",
        },
        patient: "Jenny Wilson",
        diagnosis: "Parasitic Infection",
        date: "2025-12-20",
    },
]

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #edf2f7",
    backgroundColor: "#ffffff",
    marginTop: "24px",
}))

const ConsultationTab = () => {
    const [dateRange, setDateRange] = useState("last30days")

    const handleExport = (format) => {
        console.log(`Exporting as ${format}`)
    }

    const handleDateChange = (event) => {
        setDateRange(event.target.value)
    }
    return (
        <Box sx={{ p: 2, background: 'white' }}>
            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                    // borderBottom: '1px solid #efefef',
                }}
            >
                <Typography sx={{ fontWeight: 700, color: "#3D3D3D", }}>
                    Consultation Activity
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center">
                    {/* Export Buttons */}
                    <Button
                        startIcon={<FiDownload />}
                        sx={{
                            backgroundColor: "#EAF6F8",
                            color: "#2E2E2E",
                            textTransform: "none",
                            fontSize: "16px",
                            fontWeight: 500,
                            px: 4,
                            py: 1,
                            borderRadius: "8px",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#E0F0F3",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Excel
                    </Button>
                    <Button
                        startIcon={<FiDownload />}
                        sx={{
                            backgroundColor: "#EAF6F8",
                            color: "#2E2E2E",
                            textTransform: "none",
                            fontSize: "16px",
                            fontWeight: 500,
                            px: 4,
                            py: 1,
                            borderRadius: "8px",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#E0F0F3",
                                boxShadow: "none",
                            },
                        }}
                    >
                        CSV
                    </Button>
                    <Button
                        startIcon={<FiDownload />}
                        sx={{
                            backgroundColor: "#EAF6F8",
                            color: "#2E2E2E",
                            textTransform: "none",
                            fontSize: "16px",
                            fontWeight: 500,
                            px: 4,
                            py: 1,
                            borderRadius: "8px",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#E0F0F3",
                                boxShadow: "none",
                            },
                        }}
                    >
                        PDF
                    </Button>

                    {/* Date Filter */}
                    <CustomSelect onChange={handleDateChange} options={[{ label: "Last 30 Days", value: "last30days" }, { label: "Last 6 Months", value: "last6months" }, { label: "Last Year", value: "lastyear" }]} value={dateRange} />
                </Stack>
            </Box>
            <StyledTableContainer
                component={Paper}
                sx={{
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                }
                }
            >
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#FAFAFA" }}>
                            <TableCell
                                sx={{

                                    fontSize: "13px",
                                    color: "#3D3D3D",
                                    fontWeight: 600,
                                    fontSize: "0.8rem",
                                }}
                            >
                                Prescription ID
                            </TableCell>
                            <TableCell
                                sx={{

                                    fontSize: "13px",
                                    color: "#3D3D3D",
                                    fontWeight: 600,
                                    fontSize: "0.8rem",
                                }}
                            >
                                Doctor
                            </TableCell>
                            <TableCell
                                sx={{

                                    fontSize: "13px",
                                    color: "#3D3D3D",
                                    fontWeight: 600,
                                    fontSize: "0.8rem",
                                }}
                            >
                                Patient
                            </TableCell>
                            <TableCell
                                sx={{

                                    fontSize: "13px",
                                    color: "#3D3D3D",
                                    fontWeight: 600,
                                    fontSize: "0.8rem",
                                }}
                            >
                                Diagnosis
                            </TableCell>
                            <TableCell
                                sx={{

                                    fontSize: "13px",
                                    color: "#3D3D3D",
                                    fontWeight: 600,
                                    fontSize: "0.8rem",
                                }}
                            >
                                Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultationData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:hover": {
                                        bgcolor: "#F9FAFB",
                                    },
                                }}
                            >
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        color: "#374151",
                                        py: 2,
                                    }}
                                >
                                    {row.id}
                                </TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Avatar src={row.doctor.avatar} alt={row.doctor.name} sx={{ width: 36, height: 36 }} />
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    color: "#111827",
                                                }}
                                            >
                                                {row.doctor.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "12px",
                                                    color: "#6B7280",
                                                }}
                                            >
                                                {row.doctor.email}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        color: "#374151",
                                        py: 2,
                                    }}
                                >
                                    {row.patient}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        color: "#374151",
                                        py: 2,
                                    }}
                                >
                                    {row.diagnosis}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        color: "#374151",
                                        py: 2,
                                    }}
                                >
                                    {row.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </Box>
    )
}

export default ConsultationTab