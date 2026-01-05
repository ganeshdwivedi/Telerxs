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
    InputAdornment,
    IconButton,
    Stack,
    Avatar,
    Typography,
    styled
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import FilterListIcon from "@mui/icons-material/FilterList"
import { LuDownload } from "react-icons/lu"

const invoiceTableData = [
    {
        id: 1,
        invoiceNo: "INV-001",
        type: "Refill",
        amount: 150.0,
        date: "2025-01-15",
    },
    {
        id: 2,
        invoiceNo: "INV-002",
        type: "Excuse",
        amount: 180.0,
        date: "2025-01-15",
    },
    {
        id: 3,
        invoiceNo: "INV-003",
        type: "Shopping",
        amount: 200.0,
        date: "2025-12-20",
    },
    {
        id: 4,
        invoiceNo: "INV-004",
        type: "Shopping",
        amount: 150.0,
        date: "2025-12-20",
    },
    {
        id: 5,
        invoiceNo: "INV-005",
        type: "Excuse",
        amount: 250.0,
        date: "2025-12-20",
    },
];



const ActionButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    borderRadius: "8px",
    padding: "8px 24px",
    fontWeight: 600,
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

export default function TransactionTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [modalOpen, setModalOpen] = useState(false)

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

                </Stack>
            </Stack>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #E0E0E0" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>invoiceNo</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>Amount</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#424242" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoiceTableData.map((item) => (
                            <TableRow key={item.id} hover>
                                <TableCell>{item.invoiceNo}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>
                                    <IconButton size="small" sx={{ color: "#2d3748" }}>
                                        <LuDownload fontSize="large" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </Box>
    )
}
