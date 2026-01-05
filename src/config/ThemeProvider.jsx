import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00598D",
        },
        secondary: {
            main: "#9c27b0",
        },
        brand: {
            secPrimary: "#036FAE",
            blue: "#1976d2",
            green: "#2e7d32",
            orange: "#ed6c02",
            red: "#d32f2f",
        },
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    },
});

export default theme;
