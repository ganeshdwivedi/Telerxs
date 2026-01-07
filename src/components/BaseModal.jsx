import { Dialog, DialogTitle, DialogContent, Button, Box } from "@mui/material"


export default function BaseModal({
    open,
    onClose,
    title,
    onCancel,
    onAction,
    actionLabel,
    cancelLabel = "Cancel",
    children,
    maxWidth = "md",
}) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: "8px",
                    overflow: "hidden",
                },
            }}
        >
            {/* Teal Header */}
            <DialogTitle
                sx={{
                    backgroundColor: "#00598D",
                    color: "white",
                    padding: "16px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box sx={{ fontSize: "20px", fontWeight: 550 }}>{title}</Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                        onClick={onCancel}
                        variant="outlined"
                        sx={{
                            color: "white",
                            borderColor: "white",
                            textTransform: "none",
                            fontSize: "14px",
                            padding: "6px 24px",
                            borderRadius: "6px",
                            "&:hover": {
                                borderColor: "white",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        {cancelLabel}
                    </Button>
                    <Button
                        onClick={onAction}
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "#00607C",
                            textTransform: "none",
                            fontSize: "14px",
                            padding: "6px 24px",
                            borderRadius: "6px",
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                            },
                        }}
                    >
                        {actionLabel}
                    </Button>
                </Box>
            </DialogTitle>

            {/* Content */}
            <DialogContent
                sx={{
                    backgroundColor: "#FAFAFA",
                    padding: "24px",
                }}
            >
                {children}
            </DialogContent>
        </Dialog>
    )
}
