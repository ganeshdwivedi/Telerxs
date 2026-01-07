
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Stack,
    Typography,
    styled,
    Paper,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import TuneIcon from "@mui/icons-material/Tune"
import { useState } from "react"

// interface ContactQuery {
//     id: string
//     name: string
//     email: string
//     phone: string
//     service: string
//     message: string
//     date: string
// }



const StyledTableCell = styled(TableCell)({
    padding: "16px 12px",
    fontSize: "14px",
    color: "#1e293b",
    borderBottom: "1px solid #f1f5f9",
})

const ViewMoreLink = styled(Typography)({
    color: "#0066a1",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: 500,
    "&:hover": {
        textDecoration: "underline",
    },
})

const data = [
    {
        id: "1",
        name: "Brandon",
        email: "brandon@email.com",
        phone: "(406) 555-0120",
        service: "Craving Change",
        message: "I need a refill for my prescri...",
        date: "2025-12-20",
    },
    {
        id: "2",
        name: "Harold",
        email: "harold@email.com",
        phone: "(671) 555-0110",
        service: "Meals on Wheels",
        message: "I would like to consult a doc...",
        date: "2025-12-18",
    },
    {
        id: "3",
        name: "Cody",
        email: "cody@email.com",
        phone: "(209) 555-0104",
        service: "Senior Gentle Exercise",
        message: "I have been experiencing hea...",
        date: "2025-12-15",
    },
    {
        id: "4",
        name: "Mitchell",
        email: "mitchell@email.com",
        phone: "(684) 555-0102",
        service: "Business",
        message: "I am looking for guidance on...",
        date: "2026-12-26",
    },
]

export default function ContactFormTable() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.service.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2 }}>
            <Box sx={{ mb: 3, display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
                <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: <SearchIcon sx={{ mr: 1, color: "#94a3b8" }} />,
                    }}
                    sx={{
                        width: "200px",
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#ffffff",
                            border: "1px solid #e8f1f8",
                            borderRadius: "6px",
                            "& fieldset": {
                                borderColor: "#e8f1f8",
                            },
                            "&:hover fieldset": {
                                borderColor: "#d1e6f4",
                            },
                        },
                    }}
                />
                <Button
                    variant="outlined"
                    startIcon={<TuneIcon />}
                    sx={{
                        color: "#1e293b",
                        borderColor: "#e8f1f8",
                        textTransform: "none",
                        fontSize: "14px",
                        "&:hover": {
                            borderColor: "#d1e6f4",
                            backgroundColor: "#f8fbff",
                        },
                    }}
                >
                    Filter
                </Button>
            </Box>

            <TableContainer component={Paper}
                sx={{
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                }
                } >
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#FAFAFA" }}>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Phone Number</StyledTableCell>
                            <StyledTableCell>Services</StyledTableCell>
                            <StyledTableCell>Message</StyledTableCell>
                            <StyledTableCell>Date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:hover": { bgcolor: "#F9FAFB" },
                                    borderBottom: "1px solid #F0F0F0",
                                }}
                            >
                                <StyledTableCell sx={{ fontWeight: 500, color: "#0f172a" }}>{row.name}</StyledTableCell>
                                <StyledTableCell>{row.email}</StyledTableCell>
                                <StyledTableCell>{row.phone}</StyledTableCell>
                                <StyledTableCell>{row.service}</StyledTableCell>
                                <StyledTableCell>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography variant="body2" sx={{ color: "#64748b" }}>
                                            {row.message}
                                        </Typography>
                                        <ViewMoreLink variant="body2">View More</ViewMoreLink>
                                    </Stack>
                                </StyledTableCell>
                                <StyledTableCell>{row.date}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
