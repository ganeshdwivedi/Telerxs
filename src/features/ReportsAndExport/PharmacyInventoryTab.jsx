import { useState } from "react"
import {
    Box,
    Typography,
    Button,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Avatar,
    Stack,
} from "@mui/material"
import {
    Download as DownloadIcon,
    CheckCircle as CheckCircleIcon,
    Warning as WarningIcon,
    Cancel as CancelIcon,
} from "@mui/icons-material"
import theme from "../../config/ThemeProvider"
import { MdOutlineWatchLater } from "react-icons/md"
import { LuCircleCheckBig } from "react-icons/lu"
import { IoCloseCircleOutline } from "react-icons/io5"
import CustomSelect from "../../components/CustomSelect"
import { FiDownload } from "react-icons/fi"

// interface Medicine {
//     id: string
//     name: string
//     brand: string
//     image: string
//     category: string
//     categoryColor: string
//     dosage: string
//     price: number
//     markup: number
//     stock: number
//     status: "In Stock" | "Low Stock" | "Out of Stock"
// }

const medicines = [
    {
        id: "1",
        name: "Epinastine",
        brand: "Cetaphil",
        image: "🧴",
        category: "Skin & Hair",
        dosage: "Capsule - 500mg",
        price: 49.0,
        markup: 5,
        stock: 450,
        status: "In Stock",
    },
    {
        id: "2",
        name: "Lidocaine",
        brand: "Oals",
        image: "💊",
        category: "Chronic Conditions",
        dosage: "Tablet - 400mg",
        price: 8.49,
        markup: 10,
        stock: 20,
        status: "Low Stock",
    },
    {
        id: "3",
        name: "CeraVe - 30ml",
        brand: "Bioderma",
        image: "🧴",
        category: "Digestive & Travel",
        dosage: "Tablet - 850mg",
        price: 12.99,
        markup: 15,
        stock: 0,
        status: "Out of Stock",
    },
    {
        id: "4",
        name: "Brufen",
        brand: "Himalaya",
        image: "💊",
        category: "Men's Health",
        dosage: "Tablet - 10mg",
        price: 18.5,
        markup: 20,
        stock: 280,
        status: "In Stock",
    },
]

export default function PharmacyInventoryTab() {
    const [dateRange, setDateRange] = useState("last30days")

    const handleExport = (format) => {
        console.log(`Exporting as ${format}`)
    }

    const handleDateChange = (event) => {
        setDateRange(event.target.value)
    }


    const getStatusColor = (status) => {
        switch (status) {
            case "In Stock":
                return {
                    text: theme.palette.brand.green,
                    bg: theme.palette.bg.green,
                };

            case "Low Stock":
                return {
                    text: theme.palette.brand.orange,
                    bg: theme.palette.bg.orange,
                };

            case "Out of Stock":
                return {
                    text: theme.palette.brand.red,
                    bg: theme.palette.bg.red,
                };


        }
    };


    const getStatusIcon = (status) => {
        switch (status) {
            case "Low Stock":
                return <MdOutlineWatchLater fontSize={'large'} />
            case "In Stock":
                return <LuCircleCheckBig fontSize={'large'} />
            case "Out of Stock":
                return <IoCloseCircleOutline fontSize={'large'} />
            default:
                return ""
        }
    }

    return (
        <Box sx={{ p: 2, backgroundColor: "white", borderRadius: '2px', border: '1px solid #efefef' }}>

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
                    Pharmacy Inventory
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

            {/* Table */}
            <TableContainer component={Paper}
                sx={{
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                }
                }>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#FAFAFA" }}>
                            <TableCell sx={{
                                color: "#3D3D3D",
                                fontWeight: 600,
                                fontSize: "0.8rem", color: "#555", py: 2
                            }}>Medicine Name</TableCell>
                            <TableCell sx={{
                                color: "#3D3D3D",
                                fontWeight: 600,
                                fontSize: "0.8rem", color: "#555"
                            }}>Category</TableCell>
                            <TableCell sx={{
                                color: "#3D3D3D",
                                fontWeight: 600,
                                fontSize: "0.8rem", color: "#555"
                            }}>Dosage</TableCell>
                            <TableCell sx={{
                                color: "#3D3D3D",
                                fontWeight: 600,
                                fontSize: "0.8rem", color: "#555"
                            }}>Price</TableCell>
                            <TableCell sx={{
                                color: "#3D3D3D",
                                fontWeight: 600,
                                fontSize: "0.8rem", color: "#555"
                            }}>Markup</TableCell>
                            <TableCell sx={{
                                color: "#3D3D3D",
                                fontWeight: 600,
                                fontSize: "0.8rem", color: "#555"
                            }}>Stock</TableCell>
                            <TableCell sx={{
                                color: "#3D3D3D",
                                fontWeight: 600,
                                fontSize: "0.8rem", color: "#555"
                            }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {medicines.map((medicine) => {
                            const statusStyle = getStatusColor(medicine.status)
                            return (
                                <TableRow
                                    key={medicine.id}
                                    sx={{
                                        "&:hover": { bgcolor: "#F9FAFB" },
                                        borderBottom: "1px solid #F0F0F0",
                                    }}
                                >
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                            <Avatar
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    bgcolor: "#F5F5F5",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                {medicine.image}
                                            </Avatar>
                                            <Box>
                                                <Typography sx={{ fontWeight: 500, color: "#333", fontSize: "14px" }}>
                                                    {medicine.name}
                                                </Typography>
                                                <Typography sx={{ fontSize: "12px", color: "#999", mt: 0.25 }}>{medicine.brand}</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={medicine.category}
                                            sx={{
                                                bgcolor: '#E3F2FD',
                                                color: "#0277BD",
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                height: 28,
                                                borderRadius: "6px",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ fontSize: "14px", }}>{medicine.dosage}</TableCell>
                                    <TableCell sx={{ color: "#333", fontWeight: 500, fontSize: "14px" }}>
                                        ${medicine.price.toFixed(2)}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: "14px" }}>{medicine.markup}%</TableCell>
                                    <TableCell sx={{ color: "#333", fontWeight: 500, fontSize: "14px" }}>{medicine.stock}</TableCell>
                                    <TableCell>
                                        <Chip
                                            icon={getStatusIcon(medicine.status)}
                                            label={medicine.status}
                                            sx={{
                                                bgcolor: statusStyle.bg,
                                                color: statusStyle.text,
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                height: 28,
                                                borderRadius: "16px",
                                                "& .MuiChip-icon": {
                                                    color: statusStyle.text,
                                                },
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box >
    )
}
