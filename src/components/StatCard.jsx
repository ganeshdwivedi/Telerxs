import { Box, Paper, Typography, styled } from "@mui/material"
import NorthEastIcon from "@mui/icons-material/NorthEast"
import SouthWestIcon from "@mui/icons-material/SouthWest"

// Custom styled component for the card container
const CardWrapper = styled(Paper)(({ theme }) => ({
    position: "relative",
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden", // Necessary for the corner notch
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
    border: "1px solid #f0f4f8",
    minWidth: "280px",
}))

// The distinctive blue corner notch
const CornerNotch = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "24px",
    height: "24px",
    backgroundColor: "#005691", // Deep blue matching the sidebar
    clipPath: "polygon(0 0, 100% 0, 0 100%)",
    // Adding a slight curve to match the image precisely
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "0 0 100% 0",
        transform: "translate(-20%, -20%)",
    },
})

// Alternative notch approach using a svg-like shape for better accuracy
const StyledNotch = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "20px",
    height: "40px",
    backgroundColor: "#005691",
    borderRadius: "0 0 20px 0",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "40px",
        height: "20px",
        backgroundColor: "#005691",
        borderRadius: "0 0 0 20px",
    },
})

const IconCircle = styled(Box)({
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    border: "1.5px solid #005691",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#005691",
    flexShrink: 0,
    background: "#DAF1FB"
})


export default function StatCard({ label, value, trend, trendLabel, icon }) {
    const isPositive = trend >= 0

    return (
        <CardWrapper elevation={0}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "32px",
                    height: "32px",
                    bgcolor: "#005691",
                    clipPath: "path('M0 0 H24 C12 0 0 12 0 24 V0 Z')",
                }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "4px", justifyContent: "space-between", alignItems: "center", }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="body2" sx={{ color: "#718096", fontWeight: 500 }}>
                            {label}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: "#1a202c", my: "2px" }}>
                            {value}
                        </Typography>

                    </Box>
                    <IconCircle>{icon}</IconCircle>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {isPositive ? (
                        <NorthEastIcon sx={{ fontSize: "14px", color: "#48bb78", rotate: '-90deg' }} />
                    ) : (
                        <SouthWestIcon sx={{ fontSize: "14px", color: "#f56565", rotate: '-90deg' }} />
                    )}
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: 600,
                            color: isPositive ? "#48bb78" : "#f56565",
                        }}
                    >
                        {Math.abs(trend)}%
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#718096" }}>
                        {trendLabel}
                    </Typography>
                </Box>
            </Box>


        </CardWrapper>
    )
}
