
import { Box, Typography } from "@mui/material"


// interface TFABadgeProps {
//     icon: React.ReactNode
//     label: string
//     value: string
//     bgColor: string
//     iconBgColor: string
// }

export default function TFABadge({ icon, label, value, bgColor, iconBgColor }) {
    return (
        <Box
            sx={{
                backgroundColor: bgColor,
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
            }}
        >
            <Box
                sx={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: iconBgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                }}
            >
                {icon}
            </Box>
            <Typography variant="body2" sx={{ color: "#718096", fontSize: "13px", fontWeight: 500 }}>
                {label}
            </Typography>
            <Typography variant="h6" sx={{ color: "#1a202c", fontWeight: 700, fontSize: "18px" }}>
                {value}
            </Typography>
        </Box>
    )
}
