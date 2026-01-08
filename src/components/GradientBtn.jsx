import { Button } from "@mui/material"

export default function GradientButton({
    children,
    onClick,
    fullWidth = false,
    disabled = false,
    sx = {},
    ...props
}) {
    return (
        <Button
            variant="contained"
            fullWidth={fullWidth}
            disabled={disabled}
            onClick={onClick}
            sx={{
                borderRadius: 2,
                textTransform: "none",
                color: "#FFFFFF",
                fontWeight: 600,

                background: "linear-gradient(180deg, #27B1E6 0%, #0A6FA8 100%)",
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",

                "&:hover": {
                    background: "linear-gradient(180deg, #1EA4D8 0%, #085E8F 100%)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.18)",
                },

                "&:active": {
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                },

                "&.Mui-disabled": {
                    background: "#B0BEC5",
                    boxShadow: "none",
                    color: "#FFFFFF",
                },

                ...sx, // allow overrides
            }}
            {...props}
        >
            {children}
        </Button>
    )
}
