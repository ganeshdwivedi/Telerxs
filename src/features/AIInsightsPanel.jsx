"use client"

import { Box, Card, Typography, styled } from "@mui/material"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import { BsStars } from "react-icons/bs"
import { PiStarFour } from "react-icons/pi"

const StyledCard = styled(Card)({
    // background: "#00547A",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: "16px",
})

const InsightItem = styled(Box)({
    backgroundColor: "#00547A",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "12px",
    "&:last-child": {
        marginBottom: 0,
    },
})

function InsightAlert({ text }) {
    return (
        <InsightItem>
            <Typography sx={{ fontSize: "14px", color: "#E8F4F8", lineHeight: 1.4 }}>{text}</Typography>
        </InsightItem>
    )
}

export default function AIInsightsPanel() {
    return (
        <StyledCard>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: 2,
                        backgroundColor: "#E7F0FF",
                    }}
                >
                    <PiStarFour style={{ fontSize: "18px" }} />
                </Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 700, }}>AI Insights</Typography>
            </Box>
            <InsightAlert text="Trend Alerts: Flu medication demand is up 15% in the Northeast region compared to last week." />
            <InsightAlert text="Recommendation: 35% of Doctor Payouts are pending approval. Review batch #502 to speed up." />
            <InsightAlert text="Trend Alerts: Flu medication demand is up 15% in the Northeast region compared to last week." />
        </StyledCard>
    )
}
