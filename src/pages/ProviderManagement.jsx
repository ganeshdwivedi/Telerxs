import { Box, createTheme, Grid, Typography, styled } from "@mui/material"
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import StatCard from "../components/StatCard"
import FilterTabs from "../features/FilterTabs"
import ProviderTable from "../features/ProviderTable"
import { LuUsers } from "react-icons/lu"

const Footer = styled(Box)(({ theme }) => ({
    width: "100%",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#e2f0f9", // exact footer blue
    marginTop: "auto",
    borderTop: "1px solid #d1e6f4",
}))

export default function ProviderManagement() {
    return (
        <Box component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
                variant="h4"
                sx={{
                    // fontWeight: 800,
                    color: "#2d3748",
                    mb: 3,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.5px",
                }}
            >
                Provider Management
            </Typography>

            <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                    <StatCard
                        label="Total Providers"
                        value="1,242"
                        trend={5.62}
                        trendLabel="from last month"
                        icon={<LuUsers style={{ fontSize: "20px" }} />}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatCard
                        label="Payouts Pending"
                        value="$12,450"
                        trend={0}
                        trendLabel="For 14 providers"
                        icon={<WalletOutlinedIcon sx={{ fontSize: "22px" }} />}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatCard
                        label="Avg Provider Rating"
                        value="4.8"
                        trend={5.62}
                        trendLabel="increase"
                        icon={<StarBorderOutlinedIcon sx={{ fontSize: "22px" }} />}
                    />
                </Grid>
            </Grid>

            <FilterTabs />
            <ProviderTable />

        </Box>
    )
}
