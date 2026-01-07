import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Paper } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"

// interface AuditLogEntry {
//     timestamp: string
//     user: string
//     action: string
//     resource: string
//     ipAddress: string
//     status: "Success" | "Denied"
// }

// interface AuditLogTableProps {
//     data: AuditLogEntry[]
// }

export default function AuditLogTable({ data }) {
    return (
        <TableContainer component={Paper} sx={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)" }}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: "#f7fafc" }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 700, color: "#2d3748", fontSize: "13px" }}>Timestamp</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "#2d3748", fontSize: "13px" }}>User</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "#2d3748", fontSize: "13px" }}>Action</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "#2d3748", fontSize: "13px" }}>Resource</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "#2d3748", fontSize: "13px" }}>IP Address</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "#2d3748", fontSize: "13px" }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow key={idx} sx={{ "&:hover": { backgroundColor: "#f9fbfc" } }}>
                            <TableCell sx={{ color: "#4a5568", fontSize: "13px" }}>{row.timestamp}</TableCell>
                            <TableCell sx={{ color: "#4a5568", fontSize: "13px" }}>{row.user}</TableCell>
                            <TableCell sx={{ color: "#4a5568", fontSize: "13px" }}>{row.action}</TableCell>
                            <TableCell sx={{ color: "#4a5568", fontSize: "13px" }}>{row.resource}</TableCell>
                            <TableCell sx={{ color: "#4a5568", fontSize: "13px" }}>{row.ipAddress}</TableCell>
                            <TableCell>
                                <Chip
                                    icon={row.status === "Success" ? <CheckCircleIcon /> : <CancelIcon />}
                                    label={row.status}
                                    sx={{
                                        backgroundColor: row.status === "Success" ? "#e8f5e9" : "#ffebee",
                                        color: row.status === "Success" ? "#00aa44" : "#d32f2f",
                                        fontWeight: 600,
                                        fontSize: "12px",
                                        "& .MuiChip-icon": {
                                            color: row.status === "Success" ? "#00aa44 !important" : "#d32f2f !important",
                                        },
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
