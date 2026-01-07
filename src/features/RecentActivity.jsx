import { useState } from "react"
import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    styled,
} from "@mui/material"
import { FiArrowUp, FiArrowDown } from "react-icons/fi"
import { LuCircleCheckBig } from "react-icons/lu"
import { MdOutlineWatchLater } from "react-icons/md"
import theme from "../config/ThemeProvider"

const StyledCard = styled(Card)({
    background: "white",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: "20px",
})

const data = [
    {
        user: "Dr. Sarah Jenkins",
        action: "Password Reset Request",
        status: "Completed",
        time: "2 mins ago",
    },
    {
        user: "John Doe (Patient)",
        action: "New Consultation Booking",
        status: "Pending",
        time: "15 mins ago",
    },
    {
        user: "Dr. Mark Lee",
        action: "Payout Batch #402",
        status: "Processing",
        time: "20 mins ago",
    },
    {
        user: "Dr. Emily Chen",
        action: "Password Reset Request",
        status: "Completed",
        time: "40 mins ago",
    },
    {
        user: "Dr. James Wilson",
        action: "Password Reset Request",
        status: "Completed",
        time: "1 hour ago",
    },
]

const getStatusColor = (status) => {
    switch (status) {
        case "Completed":
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
        default:
            return {
                text: theme.palette.brand.blue,
                bg: theme.palette.bg.blue,
            }
    }
}

const getStatusIcon = (status) => {
    switch (status) {
        case "Completed":
            return <LuCircleCheckBig />
        case "Pending":
        case "Processing":
            return <MdOutlineWatchLater />
        default:
            return null
    }
}

export default function RecentActivity() {
    const [orderBy, setOrderBy] = useState("time")
    const [order, setOrder] = useState("desc")

    const handleSort = (column) => {
        if (orderBy === column) {
            setOrder(order === "asc" ? "desc" : "asc")
        } else {
            setOrderBy(column)
            setOrder("asc")
        }
    }

    const sortedData = [...data].sort((a, b) => {
        const valueA = a[orderBy].toLowerCase()
        const valueB = b[orderBy].toLowerCase()

        if (valueA < valueB) return order === "asc" ? -1 : 1
        if (valueA > valueB) return order === "asc" ? 1 : -1
        return 0
    })

    const SortableHeader = ({ label, column }) => (
        <TableCell
            onClick={() => handleSort(column)}
            sx={{
                fontWeight: 700,
                fontSize: "12px",
                color: "#4A5568",
                padding: "8px 0",
                cursor: "pointer",
                userSelect: "none",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {label}
                {orderBy === column &&
                    (order === "asc" ? (
                        <FiArrowUp size={12} />
                    ) : (
                        <FiArrowDown size={12} />
                    ))}
            </Box>
        </TableCell>
    )

    return (
        <StyledCard>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#1A202C",
                    }}
                >
                    Recent Activity
                </Typography>

                <Typography
                    sx={{
                        fontSize: "12px",
                        color: "#0066A1",
                        cursor: "pointer",
                        fontWeight: 600,
                    }}
                >
                    View all
                </Typography>
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <SortableHeader label="User/Doctor" column="user" />
                            <SortableHeader label="Action" column="action" />
                            <SortableHeader label="Status" column="status" />
                            <SortableHeader label="Time" column="time" />
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sortedData.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell
                                    sx={{
                                        fontSize: "13px",
                                        color: "#1A202C",
                                        padding: "12px 0",
                                    }}
                                >
                                    {row.user}
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontSize: "13px",
                                        color: "#1A202C",
                                        padding: "12px 0",
                                    }}
                                >
                                    {row.action}
                                </TableCell>

                                <TableCell sx={{ padding: "12px 0" }}>
                                    <Box
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            padding: "4px 10px",
                                            backgroundColor:
                                                getStatusColor(row.status).bg,
                                            borderRadius: "999px",
                                            "& svg": {
                                                color:
                                                    getStatusColor(row.status)
                                                        .text,
                                                fontSize: "14px",
                                            },
                                        }}
                                    >
                                        {getStatusIcon(row.status)}
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color:
                                                    getStatusColor(row.status)
                                                        .text,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {row.status}
                                        </Typography>
                                    </Box>
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontSize: "13px",
                                        color: "#718096",
                                        padding: "12px 0",
                                    }}
                                >
                                    {row.time}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledCard>
    )
}
