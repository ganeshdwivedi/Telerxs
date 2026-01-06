
import { Box, Card, Typography, styled, LinearProgress, IconButton } from "@mui/material"
import { FaCircle, FaRegMap } from "react-icons/fa"
const StyledCard = styled(Card)({
    background: "white",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: "20px",
})

const RegionBar = styled(Box)({
    marginBottom: "16px",
    "&:last-child": {
        marginBottom: 0,
    },
})

const data = [
    { name: "Northeast", percentage: 85 },
    { name: "New York", percentage: 85 },
    { name: "California", percentage: 70 },
    { name: "Texas", percentage: 45 },
]

export default function PrescriptionsByRegion() {
    return (
        <StyledCard>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Box>
                    <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#1A202C" }}>Prescriptions By Region</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#718096", marginTop: "4px", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <Box sx={{ borderRadius: "8px", color: '#00598D', background: '#c5e1f1ff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaRegMap fontSize={'large'} /></Box>  {" "}High Activity: Northeast
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#EEF2F5",
                    borderRadius: "8px",
                    // padding: "12px",
                    // marginBottom: "20px",
                    textAlign: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ position: "relative", width: "100%", height: 200 }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "200px",
                            borderRadius: "12px",
                            overflow: "hidden",
                        }}
                    >
                        {/* Google Map iframe */}
                        <iframe
                            title="map"
                            src="https://www.google.com/maps?ll=40.7128,-74.0060&z=10&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {/* Overlay UI */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 16,
                                left: 16,
                                backgroundColor: "#2E2E2E",
                                color: "#fff",
                                px: 2,
                                py: 1,
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                boxShadow: 4,
                                opacity: 0.8,
                            }}
                        >
                            <FaCircle style={{ color: "red", fontSize: 12 }} />
                            <Typography variant="body2" fontWeight={500}>
                                High Activity: Northeast
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {data.map((region, idx) => (
                <RegionBar key={idx}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <Typography sx={{ fontSize: "13px", color: "#1A202C", fontWeight: 500 }}>{region.name}</Typography>
                        <Typography sx={{ fontSize: "13px", color: "#0066A1", fontWeight: 700 }}>{region.percentage}%</Typography>
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        value={region.percentage}
                        sx={{
                            height: "8px",
                            borderRadius: "4px",
                            backgroundColor: "#E2E8F0",
                            "& .MuiLinearProgress-bar": {
                                backgroundColor: "#0066A1",
                                borderRadius: "4px",
                            },
                        }}
                    />
                </RegionBar>
            ))}
        </StyledCard>
    )
}
