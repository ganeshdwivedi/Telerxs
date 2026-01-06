import { useState } from "react"
import {
    Box,
    Typography,
    Chip,
    TextField,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    IconButton,
} from "@mui/material"
import {
    Search

} from "@mui/icons-material"
import { BsBoxSeam, BsCash, BsEye } from "react-icons/bs"
import { TbLocation } from "react-icons/tb"
import { MdOutlineWatchLater } from "react-icons/md"
import { FiTruck } from "react-icons/fi"
import { LuCircleCheckBig } from "react-icons/lu"
import { IoCloseCircleOutline } from "react-icons/io5"
import ProcessRefundModal from "./ProcessRefund"
import SendToPharmacyModal from "./SendToPharmacyModal"
import OrderDetailsDrawer from "./OrderDetailsDrawer"



const mockOrders = [
    {
        orderId: "ORD-001 RX-12345",
        patient: {
            name: "John Doe",
            email: "john.doe@gmail.com",
        },
        doctor: {
            name: "Dr. Sarah Jenkins",
            email: "sarahj@mediprime.com",
        },
        diagnosis: "Bacterial Infection",
        pharmacy: "Central Pharmacy",
        status: "Pending",
        orderDate: "2025-01-15",
    },
    {
        orderId: "ORD-001 RX-12346",
        patient: {
            name: "Mary Smith",
            email: "mary.smith@gmail.com",
        },
        doctor: {
            name: "Dr. Mark Lee",
            email: "markl@mediprime.com",
        },
        diagnosis: "Viral Infection",
        pharmacy: "MediExpress",
        status: "Processing",
        orderDate: "2025-01-15",
    },
    {
        orderId: "ORD-001 RX-12347",
        patient: {
            name: "Robert Williams",
            email: "robert.williams@gmail.com",
        },
        doctor: {
            name: "Dr. Emily Chen",
            email: "emilyc@mediprime.com",
        },
        diagnosis: "Fungal Infection",
        pharmacy: "Central Pharmacy",
        status: "Dispatched",
        orderDate: "2025-12-20",
    },
    {
        orderId: "ORD-001 RX-12348",
        patient: {
            name: "Lisa Brown",
            email: "lisa.brown@gmail.com",
        },
        doctor: {
            name: "Dr. James Wilson",
            email: "jamesw@mediprime.com",
        },
        diagnosis: "Parasitic Infection",
        pharmacy: "MediExpress",
        status: "Delivered",
        orderDate: "2025-12-20",
    },
    {
        orderId: "ORD-001 RX-12349",
        patient: {
            name: "Smith Doe",
            email: "smith.doe@gmail.com",
        },
        doctor: {
            name: "Dr. James Wilson",
            email: "jamesw@mediprime.com",
        },
        diagnosis: "Acute Infection",
        pharmacy: "Central Pharmacy",
        status: "Cancelled",
        orderDate: "2025-12-20",
    },
]

const statusColors = {
    Pending: { bg: "#FFF4E5", text: "#663C00", border: "#FFE0B2" },
    Processing: { bg: "#E3F2FD", text: "#0D47A1", border: "#BBDEFB" },
    Dispatched: { bg: "#F3E5F5", text: "#4A148C", border: "#E1BEE7" },
    Delivered: { bg: "#E8F5E9", text: "#1B5E20", border: "#C8E6C9" },
    Cancelled: { bg: "#FFEBEE", text: "#B71C1C", border: "#FFCDD2" },
}

const orderData = {
    orderNumber: "ORD-2025-00124",
    status: "Processing",
    patientName: "Rahul Sharma",
    patientEmail: "rahul.sharma@gmail.com",
    patientDob: "1996-08-14",
    patientAddress: "Flat 302, Green Valley Apartments, Andheri East, Mumbai, Maharashtra, 400069",
    doctorName: "Dr. Ananya Mehta",
    doctorEmail: "ananya.mehta@healthcare.com",
    date: "2025-01-12",
    medications: [
        "Paracetamol 500mg",
        "Azithromycin 250mg",
        "Vitamin D3 Capsules",
    ],
};


export default function PrescriptionsOrdersPage() {
    const [isProcessRefundOpen, setIsProcessRefundOpen] = useState(false);
    const [isSendToPharmacyOpen, setIsSendToPharmacyOpen] = useState(false);
    const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);

    const openProcessRefund = () => setIsProcessRefundOpen(true);
    const openSendToPharmacy = () => setIsSendToPharmacyOpen(true);
    const openOrderDetails = () => setIsOrderDetailsOpen(true);


    const closeProcessRefund = () => setIsProcessRefundOpen(false);
    const closeSendToPharmacy = () => setIsSendToPharmacyOpen(false);
    const closeOrderDetails = () => setIsOrderDetailsOpen(false);

    const submitProcessRefund = async () => {
        // await processRefundAPI();
        setIsProcessRefundOpen(false);
    };

    const submitSendToPharmacy = async () => {
        // await sendToPharmacyAPI();
        setIsSendToPharmacyOpen(false);
    };

    const submitOrderDetails = () => {
        setIsOrderDetailsOpen(false);
    };


    const getStatusIcon = (status) => {
        switch (status) {
            case "Pending":
                return <MdOutlineWatchLater />
            case "Processing":
                return <BsBoxSeam />
            case "Dispatched":
                return <FiTruck />
            case "Delivered":
                return <LuCircleCheckBig />
            case "Cancelled":
                return <IoCloseCircleOutline />
            default:
                return ""
        }
    }

    return (
        <Box>
            {/* Search */}
            <TextField
                placeholder="Search"
                size="small"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search fontSize="small" sx={{ color: "#a0aec0" }} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    flex: 1,
                    mb: 3,
                    // boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                    maxWidth: "320px",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                        "& fieldset": { borderColor: "#edf2f7" },
                    },
                }}
            />
            {/* Table */}
            <TableContainer
                component={Paper}
                sx={{
                    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Order ID</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Patient</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Doctor</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Diagnosis</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Pharmacy</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Order Date</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#666666", fontSize: "13px", py: 2 }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockOrders.map((order, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "#FAFAFA",
                                    },
                                    borderBottom: "1px solid #F0F0F0",
                                }}
                            >
                                <TableCell sx={{ py: 2, fontSize: "14px", color: "#333333" }}>{order.orderId}</TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Avatar
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                backgroundColor: "#E0E0E0",
                                                fontSize: "14px",
                                                fontWeight: 600,
                                                color: "#666666",
                                            }}
                                        >
                                            {order.patient.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </Avatar>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "#333333" }}>
                                                {order.patient.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px", color: "#999999" }}>{order.patient.email}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Avatar
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                backgroundColor: "#E0E0E0",
                                                fontSize: "14px",
                                                fontWeight: 600,
                                                color: "#666666",
                                            }}
                                        >
                                            {order.doctor.name
                                                .split(" ")
                                                .slice(1)
                                                .map((n) => n[0])
                                                .join("")}
                                        </Avatar>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "#333333" }}>
                                                {order.doctor.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px", color: "#999999" }}>{order.doctor.email}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ py: 2, fontSize: "14px", color: "#333333" }}>{order.diagnosis}</TableCell>
                                <TableCell sx={{ py: 2, fontSize: "14px", color: "#333333" }}>{order.pharmacy}</TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Chip
                                        label={order.status}
                                        icon={getStatusIcon(order.status)}
                                        sx={{
                                            backgroundColor: statusColors[order.status].bg,
                                            color: statusColors[order.status].text,
                                            border: `1px solid ${statusColors[order.status].border}`,
                                            fontWeight: 500,
                                            fontSize: "13px",
                                            height: 28,
                                            "& .MuiChip-icon": {
                                                color: statusColors[order.status].text,
                                                marginLeft: "8px",
                                                marginRight: "-4px",
                                            },
                                        }}
                                    />
                                </TableCell>
                                <TableCell sx={{ py: 2, fontSize: "14px", color: "#333333" }}>{order.orderDate}</TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Box sx={{ display: "flex", gap: 0.5 }}>
                                        <IconButton onClick={openOrderDetails} size="small" sx={{ color: "#666666" }}>
                                            <BsEye style={{ fontSize: 20 }} />
                                        </IconButton>
                                        {order.status === "Cancelled" ? (
                                            <>

                                                <IconButton onClick={openProcessRefund} size="small" sx={{ color: "#666666" }}>
                                                    <BsCash style={{ fontSize: 20 }} />
                                                </IconButton>
                                            </>
                                        ) : (
                                            <IconButton onClick={openSendToPharmacy} size="small" sx={{ color: "#666666" }}>
                                                <TbLocation sx={{ fontSize: 20 }} />
                                            </IconButton>
                                        )}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ProcessRefundModal medicines={'Paracetamol'} onClose={closeProcessRefund} open={isProcessRefundOpen} />
            <SendToPharmacyModal medications={["Paracetamol"]} onClose={closeSendToPharmacy} open={isSendToPharmacyOpen} orderNumber={'#123lnjasndf'} patientData={{ name: "Albert", email: "alber@gmail.com", dob: "12/02/2001", address: "Pune, India" }} />
            <OrderDetailsDrawer onClose={closeOrderDetails} open={isOrderDetailsOpen} orderData={orderData} />
        </Box>
    )
}
