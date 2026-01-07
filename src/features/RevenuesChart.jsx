import { Box, styled, MenuItem, Select } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useState } from "react"

const ChartContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
    marginBottom: "24px",
    border: "1px solid #E8E8E8",
}))

const ChartTitle = styled(Box)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}))

const data = [
    { month: "Jan", revenue: 45 },
    { month: "Feb", revenue: 38 },
    { month: "Mar", revenue: 36 },
    { month: "Apr", revenue: 52 },
    { month: "May", revenue: 49 },
    { month: "Jun", revenue: 42 },
    { month: "Jul", revenue: 35 },
    { month: "Aug", revenue: 58 },
    { month: "Sep", revenue: 52 },
    { month: "Oct", revenue: 48 },
    { month: "Nov", revenue: 55 },
    { month: "Dec", revenue: 62 },
]

export default function RevenueChart() {
    const [year, setYear] = useState("2025")

    return (
        <ChartContainer>
            <ChartTitle>
                <span>Revenue</span>
                <Select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    sx={{
                        fontSize: "14px",
                        color: "#666666",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                    size="small"
                >
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2025">2025</MenuItem>
                    <MenuItem value="2026">2026</MenuItem>
                </Select>
            </ChartTitle>
            <ResponsiveContainer width="100%" height={280}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" stroke="#999999" style={{ fontSize: "12px" }} />
                    <YAxis
                        stroke="#999999"
                        style={{ fontSize: "12px" }}
                        label={{ value: "k", angle: 90, position: "insideLeft", offset: -5 }}
                    />
                    <Tooltip
                        formatter={(value) => `${value}k`}
                        contentStyle={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e0e0e0",
                            borderRadius: "4px",
                        }}
                    />
                    <Bar barSize={20} dataKey="revenue" fill="#005492" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}
