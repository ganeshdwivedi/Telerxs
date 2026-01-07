import { Box, Card, CardContent, Typography, Stack } from "@mui/material"
import { FiShield } from "react-icons/fi"
import { FaRegCircleCheck } from "react-icons/fa6"

// interface EncryptionFeature {
//     text: string
// }

// interface EncryptionInfoCardProps {
//     features: EncryptionFeature[]
//     title?: string
// }

export default function EncryptionInfoCard({ features, title = "Encrypted Data Management" }) {
    return (
        <Card
            sx={{
                backgroundColor: "#DAF1FB",
                border: "1px solid #bbdefb",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
            }}
        >
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Box
                        sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "8px",
                            backgroundColor: "#00598D",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                        }}
                    >
                        <FiShield style={{ width: "24px", height: "24px" }} />
                    </Box>
                    <Typography sx={{ fontWeight: 600, color: "#1a202c", fontSize: "18px" }}>
                        {title}
                    </Typography>
                </Box>

                <Stack mt={2} spacing={1}>
                    {features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                            <FaRegCircleCheck
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    color: "#00598D",
                                    mt: 0.3,
                                    flexShrink: 0,
                                }}
                            />
                            <Typography variant="body2" sx={{ color: "#3D3D3D", fontSize: "13px" }}>
                                {feature.text}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    )
}
