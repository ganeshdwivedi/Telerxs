import { forwardRef, useImperativeHandle, useState } from "react"
import { Snackbar, Alert } from "@mui/material"

const AppSnackbar = forwardRef((_, ref) => {
    const [state, setState] = useState({
        open: false,
        message: "",
        severity: "success",
    })

    useImperativeHandle(ref, () => ({
        showSuccess: (message) => {
            setState({ open: true, message, severity: "success" })
        },
        showError: (message) => {
            setState({ open: true, message, severity: "error" })
        },
    }))

    const handleClose = () => {
        setState((prev) => ({ ...prev, open: false }))
    }

    return (
        <Snackbar
            open={state.open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert
                onClose={handleClose}
                severity={state.severity}
                variant="filled"
                sx={{ width: "100%" }}
            >
                {state.message}
            </Alert>
        </Snackbar>
    )
})

export default AppSnackbar
