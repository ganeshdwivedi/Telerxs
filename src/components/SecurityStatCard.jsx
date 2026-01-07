import { Box, Card, Typography, Stack } from "@mui/material"

// interface SecurityStatCardProps {
//     icon: ReactNode
//     metric: string
//     label: string
//     iconColor: string
// }

export default function SecurityStatCard({ icon, metric, label, iconColor }) {


    return (
        <Card
            sx={{
                flex: 1,
                minWidth: 220,
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 3,
                backgroundColor: "#F5F7FA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
            }}
        >
            {/* Icon Container */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    backgroundColor: iconColor,
                    color: "white",
                    flexShrink: 0,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                    }}
                >
                    {icon}
                </Box>
            </Box>


            {/* Content */}
            <Stack spacing={0.5}>
                <Typography
                    sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#00598D",
                        lineHeight: 1,
                    }}
                >
                    {metric}
                </Typography>
                <Typography
                    sx={{
                        fontSize: 13,
                        color: "#707070",
                        fontWeight: 500,
                    }}
                >
                    {label}
                </Typography>
            </Stack>
        </Card>
    )
}
