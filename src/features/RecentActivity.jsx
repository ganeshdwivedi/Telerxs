
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
        time: "10 mins ago",
    },
    {
        user: "Dr. Mark Lee",
        action: "Payout Batch #502",
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
            return "#10B981"
        case "Pending":
            return "#F59E0B"
        case "Processing":
            return "#3B82F6"
        default:
            return "#6B7280"
    }
}

export default function RecentActivity() {
    return (
        <StyledCard>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#1A202C" }}>Recent Activity</Typography>
                <Typography sx={{ fontSize: "12px", color: "#0066A1", cursor: "pointer", fontWeight: 600 }}>
                    View all
                </Typography>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700, fontSize: "12px", color: "#4A5568", padding: "8px 0" }}>
                                User/Doctor
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "12px", color: "#4A5568", padding: "8px 0" }}>
                                Action
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "12px", color: "#4A5568", padding: "8px 0" }}>
                                Status
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "12px", color: "#4A5568", padding: "8px 0" }}>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell sx={{ fontSize: "13px", color: "#1A202C", padding: "12px 0" }}>{row.user}</TableCell>
                                <TableCell sx={{ fontSize: "13px", color: "#1A202C", padding: "12px 0" }}>{row.action}</TableCell>
                                <TableCell sx={{ padding: "12px 0" }}>
                                    <Box
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            padding: "4px 8px",
                                            backgroundColor: `${getStatusColor(row.status)}15`,
                                            borderRadius: "4px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "6px",
                                                height: "6px",
                                                borderRadius: "50%",
                                                backgroundColor: getStatusColor(row.status),
                                            }}
                                        />
                                        <Typography sx={{ fontSize: "12px", color: getStatusColor(row.status), fontWeight: 600 }}>
                                            {row.status}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ fontSize: "13px", color: "#718096", padding: "12px 0" }}>{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledCard>
    )
}
