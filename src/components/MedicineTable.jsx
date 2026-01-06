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
    Switch,
    styled,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from "@mui/icons-material/Add"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { FiCheckCircle } from "react-icons/fi"
import AddMedicineModal from "../features/AddMedicineModale";
import { useState } from "react";



const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#00598D',
                ...theme.applyStyles('dark', {
                    backgroundColor: '#00598D',
                }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
        ...theme.applyStyles('dark', {
            backgroundColor: 'rgba(255,255,255,.35)',
        }),
    },
}));


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
    textTransform: "capitalize",
})

const StatusChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== "status",
})(({ status }) => {
    const styles = {
        "In Stock": { bg: "#f0fff4", color: "#38a169", border: "#c6f6d5" },
        "Low Stock": { bg: "#EDBC4A80", color: "#624F25", border: "#fefcbf" },
        "Out of Stock": { bg: "#FA343433", color: "#FA3434", border: "#fed7d7" },
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

const CategoryChip = styled(Chip)({
    borderRadius: "6px",
    backgroundColor: "#ebf8ff",
    color: "#3182ce",
    fontWeight: 600,
    fontSize: "0.7rem",
    height: "26px",
})

const medicines = [
    {
        name: "Epinastine",
        brand: "Cetaphil",
        category: "Skin & Hair",
        dosage: "Capsule - 500mg",
        price: "$49.00",
        markup: "5%",
        stock: "450",
        status: "In Stock",
        visibility: true,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=100",
    },
    {
        name: "Lidocaine",
        brand: "Cipla",
        category: "Chronic Conditions",
        dosage: "Tablet - 400mg",
        price: "$8.49",
        markup: "10%",
        stock: "20",
        status: "Low Stock",
        visibility: true,
        image: "https://images.unsplash.com/photo-1576073719710-aa465fec2d59?auto=format&fit=crop&q=80&w=100",
    },
    {
        name: "CeraVe - 30ml",
        brand: "Ranbaxy",
        category: "Digestive & Travel",
        dosage: "Tablet - 850mg",
        price: "$12.99",
        markup: "15%",
        stock: "0",
        status: "Out of Stock",
        visibility: false,
        image: "https://images.unsplash.com/photo-1550573105-df2672438fa6?auto=format&fit=crop&q=80&w=100",
    },
    {
        name: "Brufen",
        brand: "Himalaya",
        category: "Men's Health",
        dosage: "Tablet - 10mg",
        price: "$18.50",
        markup: "20%",
        stock: "280",
        status: "In Stock",
        visibility: true,
        image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?auto=format&fit=crop&q=80&w=100",
    },
]

export default function MedicineTable() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleSubmit = (data) => {
        console.log("Submitted Medicine Data:", data);
    };
    return (
        <StyledTableContainer component={Paper} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, gap: 2 }}>
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
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="outlined"
                        startIcon={<TuneIcon />}
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
                    <Button
                        onClick={handleOpen}
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{
                            backgroundColor: "#005492",
                            borderRadius: "10px",
                            textTransform: "none",
                            fontWeight: 500,
                            padding: "10px 24px",
                            "&:hover": { backgroundColor: "#00447a" },
                        }}
                    >
                        Add Medicine
                    </Button>
                </Box>
            </Box>

            <Table>
                <TableHead>
                    <TableRow>
                        <HeaderCell>Medicine Name</HeaderCell>
                        <HeaderCell>Category</HeaderCell>
                        <HeaderCell>Dosage</HeaderCell>
                        <HeaderCell>Price</HeaderCell>
                        <HeaderCell>Markup</HeaderCell>
                        <HeaderCell>Stock</HeaderCell>
                        <HeaderCell>Status</HeaderCell>
                        <HeaderCell>Visibility</HeaderCell>
                        <HeaderCell align="right">Actions</HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {medicines.map((row, index) => (
                        <TableRow key={index} sx={{ "& td": { borderBottom: "1.5px solid #f7fafc" } }}>
                            <TableCell sx={{ py: 2 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Avatar src={row.image} sx={{ width: 40, height: 40, borderRadius: "8px" }} />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1a202c" }}>
                                            {row.name}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "#718096" }}>
                                            {row.brand}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <CategoryChip label={row.category} />
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 500 }}>
                                    {row.dosage}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#1a202c", fontWeight: 500 }}>
                                    {row.price}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: 500 }}>
                                    {row.markup}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2" sx={{ color: "#1a202c", fontWeight: 500 }}>
                                    {row.stock}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <StatusChip
                                    label={row.status}
                                    status={row.status}
                                    icon={
                                        row.status === "In Stock" ? (
                                            <FiCheckCircle fontSize="large" />
                                        ) : row.status === "Low Stock" ? (
                                            <AccessTimeIcon fontSize="small" />
                                        ) : (
                                            <CancelOutlinedIcon fontSize="small" />
                                        )
                                    }
                                />
                            </TableCell>
                            <TableCell>
                                <AntSwitch
                                    checked={row.visibility}
                                    size="large"
                                />
                            </TableCell>
                            <TableCell align="right">
                                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                    <IconButton size="small" sx={{ color: "#2d3748" }}>
                                        <EditOutlinedIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small" sx={{ color: "#f56565" }}>
                                        <DeleteOutlineIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <AddMedicineModal open={modalOpen} onClose={handleClose} onSubmit={handleSubmit} />
        </StyledTableContainer>
    )
}
