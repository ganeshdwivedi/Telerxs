import { Box, Button, styled } from "@mui/material"

const TabButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
    borderRadius: "50px",
    padding: "8px 30px",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "0.9rem",

    backgroundColor: active
        ? theme.palette.primary.main
        : theme.palette.common.white,

    color: active
        ? theme.palette.common.white
        : theme.palette.text.secondary,

    // boxShadow: theme.shadows[1],

    "&:hover": {
        backgroundColor: active
            ? theme.palette.primary.dark
            : theme.palette.action.hover,
        boxShadow: theme.shadows[3],
    },
}));

export default function FilterTabs() {
    const tabs = [
        { label: "All", count: 4, active: true },
        { label: "Active", count: 2, active: false },
        { label: "Pending", count: 1, active: false },
        { label: "Suspended", count: 1, active: false },
    ]

    return (
        <Box sx={{ display: "flex", gap: 2, mb: 4, mt: 2 }}>
            {tabs.map((tab) => (
                <TabButton key={tab.label} active={tab?.active}>
                    {tab.label} ({tab.count})
                </TabButton>
            ))}
        </Box>
    )
}
