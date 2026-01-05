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
    IconButton,
    TextField,
    InputAdornment,
    Button,
    styled,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

import StarIcon from "@mui/icons-material/Star"

import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { FiCheckCircle } from "react-icons/fi"
import { CiMoneyBill } from "react-icons/ci"

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #edf2f7",
    backgroundColor: "#ffffff",
    padding: "32px",
    marginTop: "24px",
}))

const HeaderCell = styled(TableCell)({
    color: "#4a5568",
    fontWeight: 700,
    fontSize: "0.75rem",
    borderBottom: "1px solid #edf2f7",
    backgroundColor: "#f7fafc",
    padding: "12px 16px",
})

const StatusChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== "status",
})(({ status }) => {
    const styles = {
        "Active": { bg: "#f0fff4", color: "#38a169", border: "#c6f6d5" },
        // "Low Stock": { bg: "#fffaf0", color: "#d69e2e", border: "#fefcbf" },
        "Suspended": { bg: "#FA343433", color: "#FA3434", border: "#fed7d7" },
    }[status] || { bg: "#f7fafc", color: "#4a5568", border: "#edf2f7" }

    return {
        borderRadius: "50px",
        fontWeight: 700,
        fontSize: "0.75rem",
        height: "32px",
        backgroundColor: styles.bg,
        color: styles.color,
        border: `1.5px solid ${styles.border}`,
        "& .MuiChip-icon": { color: "inherit" },
    }
})

const SpecialtyChip = styled(Chip)({
    borderRadius: "6px",
    backgroundColor: "#ebf8ff",
    color: "#3182ce",
    fontWeight: 600,
    fontSize: "0.7rem",
    height: "26px",
})

const ActionButton = styled(IconButton)({
    color: "#2d3748",
    padding: "6px",
    "&:hover": {
        backgroundColor: "#f7fafc",
    },
})

const providers = [
    {
        name: "Dr. Sarah Jenkins",
        email: "sarah.j@mediprime.com",
        specialty: "General Practice",
        license: "#MD-849201",
        fees: "$150/hr",
        rating: "4.9",
        reviews: "123",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71f153678e?auto=format&fit=crop&q=80&w=100",
    },
    {
        name: "Dr. Mark Lee",
        email: "mark.lee@example.com",
        specialty: "Cardiology",
        license: "#MD-992100",
        fees: "$120/hr",
        rating: "New Provider",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100",
    },
    {
        name: "Dr. Emily Chen",
        email: "e.chen@mediprime.com",
        specialty: "Pediatrics",
        license: "#MD-110022",
        fees: "$180/hr",
        rating: "4.9",
        reviews: "123",
        status: "Suspended",
        avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100",
    },
    {
        name: "Dr. James Wilson",
        email: "j.wilson@mediprime.com",
        specialty: "Dermatology",
        license: "#MD-849201",
        fees: "$150/hr",
        rating: "3.9",
        reviews: "138",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100",
    },
]

export default function ProviderTable() {
    return (
        <StyledTableContainer component={Paper} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
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
                        width: "320px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                            backgroundColor: "#ffffff",
                            "& fieldset": { borderColor: "#edf2f7" },
                            "&:hover fieldset": { borderColor: "#cbd5e0" },
                        },
                    }}
                />
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        backgroundColor: "#005492",
                        borderRadius: "10px",
                        textTransform: "none",
                        fontWeight: 500,
                        padding: "10px 28px",
                        fontSize: "0.9rem",
                        "&:hover": { backgroundColor: "#00447a" },
                    }}
                >
                    Add Doctor
                </Button>
            </Box>

            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <HeaderCell>Provider Profile</HeaderCell>
                        <HeaderCell>Specialty</HeaderCell>
                        <HeaderCell>License Status</HeaderCell>
                        <HeaderCell>Fees/Rating</HeaderCell>
                        <HeaderCell>Status</HeaderCell>
                        <HeaderCell align="right">Actions</HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {providers.map((row, index) => (
                        <TableRow key={index} sx={{ "& td": { borderBottom: "1.5px solid #f7fafc" } }}>
                            <TableCell sx={{ py: 2.5 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Avatar src={row.avatar} sx={{ width: 44, height: 44, borderRadius: "50%" }} />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1a202c", fontSize: "0.95rem" }}>
                                            {row.name}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "#718096", fontSize: "0.8rem", fontWeight: 500 }}>
                                            {row.email}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <SpecialtyChip label={row.specialty} />
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 600 }}>
                                    {row.license}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#1a202c", fontWeight: 500 }}>
                                    {row.fees}
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
                                    {row.rating === "New Provider" ? (
                                        <Typography variant="caption" sx={{ color: "#3D3D3D", fontWeight: 500 }}>
                                            New Provider
                                        </Typography>
                                    ) : (
                                        <>
                                            <StarIcon sx={{ fontSize: "14px", color: "#f6ad55" }} />
                                            <Typography variant="caption" sx={{ color: "#1a202c", fontWeight: 500, fontSize: "0.8rem" }}>
                                                {row.rating}
                                                <Typography
                                                    component="span"
                                                    sx={{ color: "#a0aec0", fontWeight: 500, fontSize: "0.75rem", ml: 0.5 }}
                                                >
                                                    ({row.reviews})
                                                </Typography>
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <StatusChip
                                    label={row.status}
                                    status={row.status}
                                    icon={
                                        row.status === "Active" ? (
                                            <FiCheckCircle fontSize="large" />
                                        ) : (
                                            <HighlightOffIcon fontSize="small" />
                                        )
                                    }
                                />
                            </TableCell>
                            <TableCell align="right">
                                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                    <ActionButton size="small">
                                        <EditOutlinedIcon fontSize="small" />
                                    </ActionButton>
                                    <ActionButton size="small">
                                        <LockOutlinedIcon fontSize="small" />
                                    </ActionButton>
                                    <ActionButton size="small">
                                        <CiMoneyBill fontSize="small" />
                                    </ActionButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
}
