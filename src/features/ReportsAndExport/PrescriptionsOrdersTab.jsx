import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Box,
    Typography,
    Chip,
    Button,
    styled,
    Select,
    MenuItem,
    Stack,
} from "@mui/material"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import CustomSelect from "../../components/CustomSelect"
import { FiDownload } from "react-icons/fi"
import { useState } from "react"

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #edf2f7",
    backgroundColor: "#ffffff",
    marginTop: "24px",
}))

const HeaderCell = styled(TableCell)({
    color: "#3D3D3D",
    fontWeight: 600,
    fontSize: "0.8rem",
    borderBottom: "1px solid #edf2f7",
    backgroundColor: "#f7fafc",
    padding: "12px 16px",
})

const StatusChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== "statusType",
})(({ statusType }) => {
    const statusStyles = {
        Pending: { bg: "#fffaf0", color: "#d69e2e", border: "#fbd38d" },
        Processing: { bg: "#ebf8ff", color: "#3182ce", border: "#bee3f8" },
        Dispatched: { bg: "#f3e8ff", color: "#7c3aed", border: "#ddd6fe" },
        Delivered: { bg: "#f0fff4", color: "#38a169", border: "#c6f6d5" },
        Cancelled: { bg: "#fff5f5", color: "#f56565", border: "#fed7d7" },
    }
    const style = statusStyles[statusType] || statusStyles.Pending
    return {
        borderRadius: "50px",
        fontWeight: 500,
        fontSize: "0.75rem",
        height: "32px",
        padding: "0 4px",
        backgroundColor: style.bg,
        color: style.color,
        border: `1.5px solid ${style.border}`,
    }
})

const prescriptions = [
    {
        id: "PRE-001 RX-12345",
        patient: "John Doe",
        patientEmail: "john.doe@email.com",
        doctor: "Dr. Sarah Jenkins",
        doctorEmail: "sarah.j@mediprime.com",
        diagnosis: "Bacterial Infection",
        pharmacy: "Central Pharmacy",
        status: "Pending",
        date: "2025-01-15",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "PRE-001 RX-12346",
        patient: "Mary Smith",
        patientEmail: "mary.smith@email.com",
        doctor: "Dr. Mark Lee",
        doctorEmail: "mark.lee@example.com",
        diagnosis: "Viral Infection",
        pharmacy: "MediExpress",
        status: "Processing",
        date: "2025-01-15",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "PRE-001 RX-12347",
        patient: "Robert Williams",
        patientEmail: "robert.williams@email.com",
        doctor: "Dr. Emily Chen",
        doctorEmail: "e.chen@mediprime.com",
        diagnosis: "Fungal Infection",
        pharmacy: "Central Pharmacy",
        status: "Dispatched",
        date: "2025-12-20",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "PRE-001 RX-12348",
        patient: "Lisa Brown",
        patientEmail: "lisa.brown@email.com",
        doctor: "Dr. James Wilson",
        doctorEmail: "j.wilson@mediprime.com",
        diagnosis: "Parasitic Infection",
        pharmacy: "MediExpress",
        status: "Delivered",
        date: "2025-12-20",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "PRE-001 RX-12349",
        patient: "Smith Doe",
        patientEmail: "smith.doe@email.com",
        doctor: "Dr. James Wilson",
        doctorEmail: "j.wilson@mediprime.com",
        diagnosis: "Acute Infection",
        pharmacy: "Central Pharmacy",
        status: "Cancelled",
        date: "2025-12-20",
        avatar: "/placeholder.svg?height=100&width=100",
    },
]

export default function PrescriptionsOrdersTab() {
    const [dateRange, setDateRange] = useState("last30days")

    const handleExport = (format) => {
        console.log(`Exporting as ${format}`)
    }

    const handleDateChange = (event) => {
        setDateRange(event.target.value)
    }
    return (
        <Box sx={{ background: 'white', padding: 2, borderRadius: 2, border: '1px solid #edf2f7' }}>
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
                    Prescription & Orders
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
            <StyledTableContainer component={Paper} elevation={0}>


                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <HeaderCell>Prescription ID</HeaderCell>
                            <HeaderCell>Patient</HeaderCell>
                            <HeaderCell>Doctor</HeaderCell>
                            <HeaderCell>Diagnosis</HeaderCell>
                            <HeaderCell>Pharmacy</HeaderCell>
                            <HeaderCell>Status</HeaderCell>
                            <HeaderCell>Date</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prescriptions.map((row, index) => (
                            <TableRow key={index} sx={{ "& td": { borderBottom: "1.5px solid #f7fafc" } }}>
                                <TableCell sx={{ py: 2, fontWeight: 500, fontSize: "0.9rem" }}>{row.id}</TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
                                            {row.patient}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "#718096", fontSize: "0.75rem", fontWeight: 500 }}>
                                            {row.patientEmail}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Avatar src={row.avatar} sx={{ width: 36, height: 36, borderRadius: "8px" }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: "0.85rem" }}>
                                                {row.doctor}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: "#718096", fontSize: "0.7rem" }}>
                                                {row.doctorEmail}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ py: 2, color: "#4a5568", fontSize: "0.9rem" }}>
                                    {row.diagnosis}
                                </TableCell>
                                <TableCell sx={{ py: 2, color: "#4a5568", fontSize: "0.9rem" }}>
                                    {row.pharmacy}
                                </TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <StatusChip label={row.status} statusType={row.status} />
                                </TableCell>
                                <TableCell sx={{ py: 2, color: "#4a5568", fontSize: "0.9rem" }}>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table >
            </StyledTableContainer >
        </Box >
    )
}
