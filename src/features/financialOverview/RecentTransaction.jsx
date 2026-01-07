import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Chip,
    Button,
    Typography,
    Stack,
    Tabs,
} from "@mui/material"
import { useState } from "react"
import DownloadIcon from "@mui/icons-material/Download"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CancelIcon from "@mui/icons-material/Cancel"
import CustomTab from "../../components/Tab"
import { FiDownload } from "react-icons/fi"
import { LuCircleCheckBig } from "react-icons/lu"
import { MdOutlineWatchLater } from "react-icons/md"
import { IoCloseCircleOutline } from "react-icons/io5"
import theme from "../../config/ThemeProvider"
// interface Transaction {
//     id: string
//     type: "Consultation" | "Pharmacy" | "Payout"
//     doctorName?: string
//     pharmacyName?: string
//     email?: string
//     avatar?: string
//     amount: number
//     paymentMethod: string
//     date: string
//     status: "Success" | "Pending" | "Failed"
// }

// interface RecentTransactionsProps {
//     transactions: Transaction[]
// }

const getStatusColor = (status) => {
    switch (status) {
        case "Success":
            return {
                text: theme.palette.brand.green,
                bg: theme.palette.bg.green,
            }
        case "Pending":
            return {
                text: theme.palette.brand.orange,
                bg: theme.palette.bg.orange,
            }
        case "Processing":
            return {
                text: theme.palette.brand.blue,
                bg: theme.palette.bg.blue,
            }
        case "Failed":
            return {
                text: theme.palette.brand.red,
                bg: theme.palette.bg.red,
            }
        default:
            return {
                text: theme.palette.brand.blue,
                bg: theme.palette.bg.blue,
            }
    }
}

const getStatusIcon = (status) => {
    switch (status) {
        case "Success":
            return <LuCircleCheckBig />
        case "Pending":
        case "Processing":
            return <MdOutlineWatchLater />
        case "Failed":
            return <IoCloseCircleOutline />
        default:
            return null
    }
}

export default function RecentTransactions({ transactions }) {
    const [tabValue, setTabValue] = useState(0)

    const filteredTransactions =
        tabValue === 0
            ? transactions
            : transactions.filter((t) => {
                if (tabValue === 1) return t.type === "Consultation"
                if (tabValue === 2) return t.type === "Pharmacy"
                if (tabValue === 3) return t.type === "Payout"
                return true
            })




    return (
        <Box sx={{ p: 2, border: '1px solid #E0E0E0', background: 'white', borderRadius: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600 }}>
                    Recent Transactions
                </Typography>
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
                    Export
                </Button>
            </Stack>

            <Box sx={{ mb: 3 }}>
                <Tabs TabIndicatorProps={{ style: { display: "none" } }} value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
                    <CustomTab label={`All (${transactions.length})`} />
                    <CustomTab label="Consultation" />
                    <CustomTab label="Pharmacy" />
                    <CustomTab label="Payouts" />
                </Tabs>
            </Box>

            <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #E0E0E0" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
                            <TableCell sx={{ fontWeight: 600, color: "#333" }}>Transaction ID</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333" }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333" }}>Doctor/Pharmacy</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333" }}>Amount</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333" }}>Payment Methods</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333" }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333" }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredTransactions.map((transaction) => {
                            const typeColor = getStatusColor(transaction.status)

                            return (
                                <TableRow key={transaction.id} sx={{ "&:hover": { backgroundColor: "#FAFAFA" } }}>
                                    <TableCell sx={{ fontSize: "0.875rem", fontWeight: 500 }}>{transaction.id}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={transaction.type}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#DAF1FB',
                                                color: '#00598D',
                                                fontWeight: 500,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1.5} alignItems="center">
                                            {transaction.avatar && (
                                                <Avatar
                                                    src={transaction.avatar}
                                                    alt={transaction.doctorName || transaction.pharmacyName}
                                                    sx={{ width: 32, height: 32 }}
                                                />
                                            )}
                                            <Box>
                                                <Typography sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
                                                    {transaction.doctorName || transaction.pharmacyName}
                                                </Typography>
                                                {transaction.email && (
                                                    <Typography sx={{ fontSize: "0.75rem", color: "#999" }}>{transaction.email}</Typography>
                                                )}
                                            </Box>
                                        </Stack>
                                    </TableCell>
                                    <TableCell sx={{ fontSize: "0.875rem", fontWeight: 500, color: "#27AE60" }}>
                                        {transaction.amount > 0 ? "+" : ""} ${Math.abs(transaction.amount).toFixed(2)}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: "0.875rem" }}>{transaction.paymentMethod}</TableCell>
                                    <TableCell sx={{ fontSize: "0.875rem" }}>{transaction.date}</TableCell>
                                    <TableCell>
                                        <Chip
                                            icon={getStatusIcon(transaction.status)}
                                            label={transaction.status}
                                            size="small"
                                            sx={{
                                                "& svg": {
                                                    color: typeColor.text,
                                                },
                                                backgroundColor: typeColor.bg,
                                                fontWeight: 500,
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
