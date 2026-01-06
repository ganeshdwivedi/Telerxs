import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
    IconButton,
    TextField,
    InputAdornment,
    Button,
    styled,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import FilterListIcon from "@mui/icons-material/FilterList"
import { LuUserRoundX } from "react-icons/lu"
import { IoEyeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const StyledTableContainer = styled(TableContainer)({
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #edf2f7",
    backgroundColor: "#ffffff",
    padding: "24px",
    marginTop: "24px",
})

const HeaderCell = styled(TableCell)({
    color: "#4a5568",
    fontWeight: 700,
    fontSize: "0.75rem",
    borderBottom: "1px solid #edf2f7",
    backgroundColor: "#f7fafc",
    padding: "12px 16px",
})

const patients = [
    {
        name: "John Doe",
        email: "john.doe@email.com",
        ageGender: "34/M",
        phone: "+1 (555) 123-4567",
        consent: "Given",
        consultations: "12",
        lastVisit: "2025-01-15",
        active: true,
    },
    {
        name: "Mary Smith",
        email: "mary.smith@email.com",
        ageGender: "45/F",
        phone: "+1 (555) 234-5678",
        consent: "Given",
        consultations: "5",
        lastVisit: "2025-01-10",
        active: true,
    },
    {
        name: "Robert Williams",
        email: "robert.williams@email.com",
        ageGender: "44/M",
        phone: "+1 (555) 345-6789",
        consent: "Given",
        consultations: "2",
        lastVisit: "2025-12-20",
        active: true,
    },
    {
        name: "Lisa Brown",
        email: "lisa.brown@email.com",
        ageGender: "39/F",
        phone: "+1 (555) 456-7890",
        consent: "Given",
        consultations: "8",
        lastVisit: "2024-12-20",
        active: false,
    },
]

export default function PatientTable() {
    return (
        <StyledTableContainer component={Paper} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, gap: 2 }}>
                <TextField
                    placeholder="Search"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" sx={{ color: "#a0aec0" }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        flex: 1,
                        maxWidth: "320px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                            backgroundColor: "#ffffff",
                            "& fieldset": { borderColor: "#edf2f7" },
                        },
                    }}
                />
                <Button
                    variant="outlined"
                    startIcon={<FilterListIcon />}
                    sx={{
                        borderColor: "#edf2f7",
                        color: "#4a5568",
                        borderRadius: "10px",
                        textTransform: "none",
                        fontWeight: 500,
                        px: 3,
                        "&:hover": { borderColor: "#cbd5e0", backgroundColor: "#f7fafc" },
                    }}
                >
                    Filter
                </Button>
            </Box>

            <Table>
                <TableHead>
                    <TableRow>
                        <HeaderCell>Patient</HeaderCell>
                        <HeaderCell>Age/Gender</HeaderCell>
                        <HeaderCell>Phone</HeaderCell>
                        <HeaderCell>Consent</HeaderCell>
                        <HeaderCell>Consultations</HeaderCell>
                        <HeaderCell>Last Visit</HeaderCell>
                        <HeaderCell align="right">Actions</HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patients.map((row, index) => (
                        <TableRow key={index} sx={{ "& td": { borderBottom: "1.5px solid #f7fafc", border: '1px solid #edf2f7' } }}>
                            <TableCell sx={{ py: 2 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1a202c" }}>
                                    {row.name}
                                </Typography>
                                <Typography variant="caption" sx={{ color: "#718096" }}>
                                    {row.email}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 600 }}>
                                    {row.ageGender}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 500 }}>
                                    {row.phone}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 500 }}>
                                    {row.consent}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 500 }}>
                                    {row.consultations}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 500 }}>
                                    {row.lastVisit}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                {row.active ? (
                                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                        <Link to={`/patient-management/${index}/details`} >
                                            <IconButton size="small" sx={{ color: "#2d3748" }}>
                                                <IoEyeOutline fontSize="large" />
                                            </IconButton>
                                        </Link>
                                        <IconButton size="small" sx={{ color: "#f56565" }}>
                                            <LuUserRoundX fontSize="large" />
                                        </IconButton>
                                    </Box>
                                ) : (
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            backgroundColor: "#005492",
                                            borderRadius: "10px",
                                            textTransform: "none",
                                            px: 3,
                                            py: 1,
                                            "&:hover": { backgroundColor: "#00447a" },
                                        }}
                                    >
                                        Activate
                                    </Button>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
}
