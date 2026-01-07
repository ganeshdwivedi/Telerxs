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

const TypeChip = styled(Chip)({
    borderRadius: "6px",
    fontWeight: 700,
    fontSize: "0.7rem",
    height: "26px",
})

const StatusChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== "statusType",
})(({ statusType }) => {
    const statusStyles = {
        Success: { bg: "#f0fff4", color: "#38a169", border: "#c6f6d5" },
        Pending: { bg: "#fffaf0", color: "#d69e2e", border: "#fbd38d" },
        Failed: { bg: "#fff5f5", color: "#f56565", border: "#fed7d7" },
    }
    const style = statusStyles[statusType] || statusStyles.Pending
    return {
        borderRadius: "50px",
        fontWeight: 700,
        fontSize: "0.75rem",
        height: "32px",
        padding: "0 4px",
        backgroundColor: style.bg,
        color: style.color,
        border: `1.5px solid ${style.border}`,
    }
})

const transactions = [
    {
        id: "TX-001 RX-12345",
        type: "Consultation",
        provider: "Dr. Sarah Jenkins",
        providerEmail: "sarah.j@mediprime.com",
        amount: "+$150.00",
        paymentMethod: "Credit Card",
        date: "2025-01-15, 3:30:00 PM",
        status: "Success",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "TX-002 RX-12346",
        type: "Pharmacy",
        provider: "HealthFirst Pharmacy",
        providerEmail: "healthfirst@pharmacy.com",
        amount: "+$12.99",
        paymentMethod: "Debit Card",
        date: "2025-01-15 4:30:00 PM",
        status: "Pending",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "TX-003 RX-12347",
        type: "Payout",
        provider: "Dr. Emily Chen",
        providerEmail: "e.chen@mediprime.com",
        amount: "+$2000.00",
        paymentMethod: "Net Banking",
        date: "2025-12-20 2:30:00 PM",
        status: "Failed",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "TX-004 RX-12348",
        type: "Pharmacy",
        provider: "MediCare Pharmacy",
        providerEmail: "medicare@pharmacy.com",
        amount: "+$20.99",
        paymentMethod: "Credit Card",
        date: "2025-12-20 1:30:00 PM",
        status: "Success",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "TX-005 RX-12349",
        type: "Consultation",
        provider: "Dr. James Wilson",
        providerEmail: "j.wilson@mediprime.com",
        amount: "+$180.00",
        paymentMethod: "Credit Card",
        date: "2025-12-20 10:30:00 AM",
        status: "Success",
        avatar: "/placeholder.svg?height=100&width=100",
    },
]

export default function FinancialSettlementTab() {
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
                    Financial Settlement
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
                            <HeaderCell>Transaction ID</HeaderCell>
                            <HeaderCell>Type</HeaderCell>
                            <HeaderCell>Doctor/Pharmacy</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Payment Methods</HeaderCell>
                            <HeaderCell>Date</HeaderCell>
                            <HeaderCell>Status</HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((row, index) => (
                            <TableRow key={index} sx={{ "& td": { borderBottom: "1.5px solid #f7fafc" } }}>
                                <TableCell sx={{ py: 2, color: "#1a202c", fontSize: "0.9rem" }}>{row.id}</TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <TypeChip
                                        label={row.type}
                                        sx={{
                                            backgroundColor: "#ebf8ff",
                                            color: "#3182ce",
                                        }}
                                    />
                                </TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Avatar src={row.avatar} sx={{ width: 36, height: 36, borderRadius: "50%" }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1a202c", fontSize: "0.85rem" }}>
                                                {row.provider}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: "#718096", fontSize: "0.7rem" }}>
                                                {row.providerEmail}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ py: 2, color: "#38a169", fontSize: "0.9rem" }}>{row.amount}</TableCell>
                                <TableCell sx={{ py: 2, color: "#4a5568", fontSize: "0.9rem" }}>
                                    {row.paymentMethod}
                                </TableCell>
                                <TableCell sx={{ py: 2, color: "#4a5568", fontSize: "0.85rem" }}>{row.date}</TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <StatusChip label={row.status} statusType={row.status} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </Box>
    )
}
