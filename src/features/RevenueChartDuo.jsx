
import { Box, Card, Typography, styled } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { month: "Jan", primary: 4000, secondary: 1300 },
    { month: "Feb", primary: 3200, secondary: 1000 },
    { month: "Mar", primary: 3000, secondary: 900 },
    { month: "Apr", primary: 4400, secondary: 1100 },
    { month: "May", primary: 4200, secondary: 700 },
    { month: "Jun", primary: 3600, secondary: 600 },
    { month: "Jul", primary: 2800, secondary: 800 },
    { month: "Aug", primary: 5000, secondary: 900 },
    { month: "Sep", primary: 2500, secondary: 2400 },
    { month: "Oct", primary: 2100, secondary: 2600 },
    { month: "Nov", primary: 1700, secondary: 300 },
    { month: "Dec", primary: 3800, secondary: 600 },
];


const StyledCard = styled(Card)({
    background: "white",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: "20px",
})

export default function RevenueChartDuo() {
    return (
        <StyledCard>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#1A202C" }}>Revenue vs Payouts</Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 12px",
                        backgroundColor: "#F7FAFC",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    <Typography sx={{ fontSize: "12px", color: "#4A5568", fontWeight: 500 }}>2025</Typography>
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barCategoryGap="40%"
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#E2E8F0"
                        />

                        <XAxis
                            dataKey="month"
                            interval={0}                // 👈 forces ALL months to show
                            tick={{
                                fontSize: 12,
                                fill: "#718096",
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{ fontSize: 12, fill: "#718096" }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(v) => `${v / 1000}k`}
                        />

                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{
                                backgroundColor: "#1A202C",
                                border: "none",
                                borderRadius: 8,
                                color: "#fff",
                                fontSize: 12,
                            }}
                        />

                        {/* Bottom (dark) */}
                        <Bar
                            dataKey="primary"
                            stackId="a"
                            fill="#004E7C"
                            barSize={20}
                            radius={[4, 4, 0, 0]}
                        />

                        {/* Top (light) */}
                        <Bar
                            dataKey="secondary"
                            stackId="a"
                            fill="#E2E8F0"
                            barSize={20}
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </StyledCard>
    )
}
