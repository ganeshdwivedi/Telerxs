import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Chip,
    Button,
    Typography,
    Stack,
} from "@mui/material"
import { FaChevronRight } from "react-icons/fa"


// interface Doctor {
//   id: string
//   name: string
//   email: string
//   avatar: string
//   specialty: string
//   consultations: number
//   feesPerHour: number
//   totalEarnings: number
// }

// interface DoctorEarningsSummaryProps {
//   doctors: Doctor[]
//   onProcessPayout: (doctorId: string) => void
// }



export default function DoctorEarningsSummary({ doctors, onProcessPayout }) {

    return (
        <Box sx={{ p: 2, border: '1px solid #E0E0E0', background: 'white', borderRadius: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600 }}>
                    Doctor Earnings Summary
                </Typography>
                <Button endIcon={<FaChevronRight fontSize={2} />}
                    component="a"
                    href="#"
                    sx={{
                        textTransform: 'capitalize',
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        color: "#3D3D3D",
                        "&:hover": { textDecoration: "underline" },
                    }}
                >
                    View all
                </Button>
            </Stack>

            <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #E0E0E0" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
                            <TableCell sx={{ fontWeight: 600, color: "#333", width: "20%" }}>Doctor</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", width: "15%" }}>Specialty</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", width: "15%" }}>Consultations</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", width: "15%" }}>Fees/Hr</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", width: "15%" }}>Total Earnings</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", width: "20%" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctors.map((doctor) => (
                            <TableRow key={doctor.id} sx={{ "&:hover": { backgroundColor: "#FAFAFA" } }}>
                                <TableCell>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar src={doctor.avatar} alt={doctor.name} sx={{ width: 40, height: 40 }} />
                                        <Box>
                                            <Typography sx={{ fontSize: "0.875rem", fontWeight: 500 }}>{doctor.name}</Typography>
                                            <Typography sx={{ fontSize: "0.75rem", color: "#999" }}>{doctor.email}</Typography>
                                        </Box>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={doctor.specialty}
                                        size="small"
                                        sx={{
                                            backgroundColor: '#DAF1FB', color: "#0F7DC1",
                                            fontWeight: 500,
                                        }}
                                    />
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.875rem" }}>{doctor.consultations}</TableCell>
                                <TableCell sx={{ fontSize: "0.875rem" }}>${doctor.feesPerHour.toFixed(2)}</TableCell>
                                <TableCell sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
                                    ${doctor.totalEarnings.toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => onProcessPayout(doctor.id)}
                                        sx={{
                                            backgroundColor: "#00598D",
                                            "&:hover": { backgroundColor: "#03507dff" },
                                            textTransform: "none",
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                            py: 1,
                                            px: 2,
                                            borderRadius: 2,
                                        }}
                                    >
                                        Process Payout
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
