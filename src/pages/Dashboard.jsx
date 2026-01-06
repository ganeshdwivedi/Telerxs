import { Box, Grid, Typography } from "@mui/material"

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined"
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined"
import AIInsightsPanel from "../features/AIInsightsPanel"
import DashboardStatCard from "../components/DashbaordStatsCard"
import PrescriptionsByRegion from "../features/PrescriptionByRegion"
import RevenueChart from "../features/RevenueChart"
import RecentActivity from "../features/RecentActivity"
import StatCard from "../components/StatsCard"
import { LuShoppingBag, LuStethoscope, LuUsers, LuWallet } from "react-icons/lu"


export default function Dashboard() {
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
                Dashboard
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


            <Box sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "3fr 3fr 3fr 3fr",
                },
                gap: 3,
                mb: 4,
            }}>
                <DashboardStatCard value="45" label="Active Consultations" icon={<PeopleAltOutlinedIcon />} />

                <DashboardStatCard value="120" label="Prescriptions Issued" icon={<AssignmentOutlinedIcon />} />

                <DashboardStatCard value="85" label="Orders Processing" icon={<ShoppingBagOutlinedIcon />} />

                <DashboardStatCard value="200" label="Completed Deliveries" icon={<LocalShippingOutlinedIcon />} />

            </Box>

            {/* Revenue chart and AI Insights side by side */}
            <Box sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",          // Mobile: stacked
                    md: "8fr 4fr",      // Desktop: 8/12 + 4/12
                },
                gap: 3,
                mb: 4,
            }}>
                <RevenueChart />
                <AIInsightsPanel />
            </Box>

            {/* Recent Activity and Prescriptions by Region */}
            <Box sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",          // Mobile: stacked
                    md: "6fr 6fr",      // Desktop: 8/12 + 4/12
                },
                gap: 3,
                mb: 4,
            }}>
                <RecentActivity />
                <PrescriptionsByRegion />
            </Box>
        </Box>
    )
}
