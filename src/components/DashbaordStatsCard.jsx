import { Box, Card, Typography, styled } from "@mui/material"


const StyledCard = styled(Card)({
    background: "white",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 0px 0px rgba(0, 0, 0, 0.08)",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100% !important",
})

const IconWrapper = styled(Box)(({ theme }) => ({
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F4F8",
    flexShrink: 0,
    "& svg": {
        color: "#0066A1",
        fontSize: "24px",
    },
}))

export default function DashboardStatCard({ icon, value, label, color = "#0066A1" }) {
    return (
        <StyledCard>
            <IconWrapper>{icon}</IconWrapper>
            <Box>
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#00598D",
                        lineHeight: 1,
                    }}
                >
                    {value}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "12px",
                        color: "#718096",
                        marginTop: "4px",
                        fontWeight: 500,
                    }}
                >
                    {label}
                </Typography>
            </Box>
        </StyledCard>
    )
}
