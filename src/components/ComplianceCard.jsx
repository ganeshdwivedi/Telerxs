import { Box, Card, CardContent, Typography, Chip, Stack } from "@mui/material"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"

// interface ComplianceCardProps {
//     title: string
//     description: string
//     features: string[]
//     active?: boolean
//     icon?: React.ReactNode
//     bgColor?: string
// }

export default function ComplianceCard({
    title,
    description,
    features,
    active = true,
    icon,
    bgColor = "white",
}) {
    return (
        <Card
            sx={{
                borderRadius: "12px",
                border: "1px solid #e0e8f0",
                backgroundColor: bgColor,
                height: "100%",
                position: "relative",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardContent sx={{ pb: 2, flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {icon && (
                            <Box
                                sx={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "6px",
                                    backgroundColor: "#138015",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    flexShrink: 0,
                                }}
                            >
                                {icon}
                            </Box>
                        )}
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "16px", color: "#3D3D3D" }}>
                            {title}
                        </Typography>
                    </Box>
                    {active && (
                        <Chip
                            label="Active"
                            icon={<CheckCircleIcon sx={{ color: "#00aa44 !important" }} />}
                            sx={{
                                backgroundColor: "#e8f5e9",
                                color: "#00aa44",
                                fontWeight: 600,
                                fontSize: "12px",
                                height: "26px",
                            }}
                        />
                    )}
                </Box>

                <Typography variant="body2" sx={{ color: "#718096", mb: 1.5, fontSize: "14px" }}>
                    {description}
                </Typography>

                <Stack spacing={0.8}>
                    {features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                            <CheckCircleIcon
                                sx={{
                                    width: "18px",
                                    height: "18px",
                                    color: "#00aa44",
                                    mt: 0.3,
                                    flexShrink: 0,
                                }}
                            />
                            <Typography variant="body2" sx={{ color: "#4a5568", fontSize: "13px" }}>
                                {feature}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    )
}
