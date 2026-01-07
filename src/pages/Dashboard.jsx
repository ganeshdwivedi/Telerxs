import { Box, Grid, Stack, Typography } from "@mui/material"

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined"
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined"
import AIInsightsPanel from "../features/AIInsightsPanel"
import DashboardStatCard from "../components/DashbaordStatsCard"
import PrescriptionsByRegion from "../features/PrescriptionByRegion"
import RecentActivity from "../features/RecentActivity"
import StatCard from "../components/StatCard"
import { LuShoppingBag, LuStethoscope, LuUsers, LuWallet } from "react-icons/lu"
import CustomSelect from "../components/CustomSelect"
import { useState } from "react"
import RevenueChartDuo from "../features/RevenueChartDuo"


export default function Dashboard() {
    const [region, setRegion] = useState("all");
    const [doctor, setDoctor] = useState("all");
    const [medicine, setMedicine] = useState("all");
    const [date, setDate] = useState("30");

    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "space-between", mb: 2 }}>
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
                </Typography><Stack direction="row" spacing={2}>
                    <CustomSelect
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        options={[
                            { label: "All Regions", value: "all" },
                            { label: "North", value: "north" },
                            { label: "South", value: "south" },
                        ]}
                    />

                    <CustomSelect
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        options={[
                            { label: "All Doctors", value: "all" },
                            { label: "Dr. John", value: "john" },
                            { label: "Dr. Smith", value: "smith" },
                        ]}
                    />

                    <CustomSelect
                        value={medicine}
                        onChange={(e) => setMedicine(e.target.value)}
                        options={[
                            { label: "All Medications", value: "all" },
                            { label: "Paracetamol", value: "para" },
                            { label: "Ibuprofen", value: "ibu" },
                        ]}
                    />

                    <CustomSelect
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        options={[
                            { label: "Last 7 Days", value: "7" },
                            { label: "Last 30 Days", value: "30" },
                            { label: "Last 90 Days", value: "90" },
                        ]}
                    />
                </Stack></Box>

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
                <RevenueChartDuo />
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
