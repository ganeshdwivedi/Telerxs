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
            blue: "#0B3977",
            green: "#138015",
            orange: "#624F25",
            red: "#FA3434",
            purple: "#6938EF"
        },
        bg: {
            orange: "#EDBC4A80",
            green: "#B1FEB280",
            blue: "#BAD7FF80",
            red: "#FA343433",
            purple: "#6938EF1A",
        }
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    },
});

export default theme;
