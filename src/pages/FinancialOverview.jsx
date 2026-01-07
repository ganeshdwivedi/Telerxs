import { Box, Stack, Typography } from "@mui/material"
import TransactionTable from "../features/patient/PatientTransactionTab"
import RevenueChart from "../features/RevenuesChart"
import DoctorEarningsSummary from "../features/financialOverview/DoctorsEarning"
import RecentTransactions from "../features/financialOverview/RecentTransaction"
import StatCard from "../components/StatCard"
import { LuShoppingBag, LuStethoscope, LuUsers, LuWallet } from "react-icons/lu"
const mockDoctors = [
    {
        id: "1",
        name: "Dr. Sarah Jenkins",
        email: "sarah.jenkins@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        specialty: "Cardiology",
        consultations: 234,
        feesPerHour: 150,
        totalEarnings: 45000,
    },
    {
        id: "2",
        name: "Mark Lee",
        email: "mark.lee@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
        specialty: "Pharmacy",
        consultations: 0,
        feesPerHour: 0,
        totalEarnings: 38500,
    },
    {
        id: "3",
        name: "Dr. Emily Chen",
        email: "e.chen@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        specialty: "Neurology",
        consultations: 200,
        feesPerHour: 200,
        totalEarnings: 28000,
    },
    {
        id: "4",
        name: "Dr. James Wilson",
        email: "j.wilson@medprime.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        specialty: "Gastroenterology",
        consultations: 100,
        feesPerHour: 150,
        totalEarnings: 28500,
    },
    {
        id: "5",
        name: "Dr. James Wilson",
        email: "j.wilson@medprime.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James2",
        specialty: "Infectious Disease",
        consultations: 202,
        feesPerHour: 180,
        totalEarnings: 28000,
    },
]

const mockTransactions = [
    {
        id: "TX-001 RX-12345",
        type: "Consultation",
        doctorName: "Dr. Sarah Jenkins",
        email: "sarah.jenkins@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        amount: 150,
        paymentMethod: "Credit Card",
        date: "2025-01-15, 3:30:00 PM",
        status: "Success",
    },
    {
        id: "TX-002 RX-12346",
        type: "Pharmacy",
        pharmacyName: "HealthFirst Pharmacy",
        amount: 12.99,
        paymentMethod: "Debit Card",
        date: "2025-01-15 4:30:00 PM",
        status: "Pending",
    },
    {
        id: "TX-003 RX-12347",
        type: "Payout",
        doctorName: "Dr. Emily Chen",
        email: "e.chen@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        amount: -2000,
        paymentMethod: "Net Banking",
        date: "2025-12-20 2:30:00 PM",
        status: "Failed",
    },
    {
        id: "TX-004 RX-12348",
        type: "Pharmacy",
        pharmacyName: "MediCare Pharmacy",
        amount: 20.99,
        paymentMethod: "Credit Card",
        date: "2025-12-20 1:30:00 PM",
        status: "Success",
    },
    {
        id: "TX-005 RX-12349",
        type: "Consultation",
        doctorName: "Dr. James Wilson",
        email: "j.wilson@medprime.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        amount: 180,
        paymentMethod: "Credit Card",
        date: "2025-12-20 10:30:00 AM",
        status: "Success",
    },
]

export default function FinancialOverview() {
    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 500,
                    color: "#2d3748",
                    mb: 3,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.5px",
                }}
            >
                Financial Overview
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(4, 1fr)",
                    },
                    gap: 3,
                    mb: 4,
                }}
            >
                <StatCard
                    label="Total Users"
                    value="12,450"
                    trend={5.62}
                    trendLabel="from last month"
                    icon={<LuUsers style={{ fontSize: 20 }} />}
                />

                <StatCard
                    label="Total Revenue"
                    value="$450,200"
                    trend={12}
                    trendLabel="from last month"
                    icon={<LuWallet style={{ fontSize: 20 }} />}
                />

                <StatCard
                    label="Pharmacy Sales"
                    value="$120,000"
                    trend={6}
                    trendLabel="from last month"
                    icon={<LuShoppingBag style={{ fontSize: 20 }} />}
                />

                <StatCard
                    label="Consultations Today"
                    value="340"
                    trend={-2}
                    trendLabel="from last month"
                    icon={<LuStethoscope style={{ fontSize: 20 }} />}
                />
            </Box>
            <RevenueChart />
            <Stack spacing={2}>
                <RecentTransactions transactions={mockTransactions} />
                <DoctorEarningsSummary
                    doctors={mockDoctors}
                    onProcessPayout={(doctorId) => console.log("Process payout for:", doctorId)}
                />

            </Stack>
        </Box>
    )
}
