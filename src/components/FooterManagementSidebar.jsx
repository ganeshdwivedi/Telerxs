import { Box, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"

// interface FooterPage {
//     id: string
//     label: string
//     lastEdited: string
// }

// interface FooterManagementSidebarProps {
//     pages: FooterPage[]
//     selectedPageId: string
//     onPageSelect: (pageId: string) => void
// }

export const footerPages = [
    { id: "logo", label: "Logo", lastEdited: "Last edited 2hr ago" },
    { id: "about-us", label: "About Us", lastEdited: "Last edited 2hr ago" },
    { id: "how-works", label: "How Works", lastEdited: "Last edited 1hr ago" },
    { id: "leadership", label: "Leadership", lastEdited: "Last edited 1hr ago" },
    { id: "faq", label: "FAQ", lastEdited: "Last edited 1hr ago" },
    { id: "careers", label: "Careers", lastEdited: "Last edited 2hr ago" },
    { id: "support", label: "Support", lastEdited: "Last edited 2hr ago" },
    { id: "blogs", label: "Blogs", lastEdited: "Last edited 2hr ago" },
    { id: "shipping-returns", label: "Shipping & Returns", lastEdited: "Last edited 2hr ago" },
    { id: "privacy-policy", label: "Privacy Policy", lastEdited: "Last edited 2hr ago" },
    { id: "terms-conditions", label: "Terms & Conditions", lastEdited: "Last edited 2hr ago" },
    { id: "consent-telehealth", label: "Consent to Telehealth", lastEdited: "Last edited 2hr ago" },
    { id: "contact", label: "Contact", lastEdited: "Last edited 2hr ago" },
    { id: "address", label: "Address", lastEdited: "Last edited 28hrs ago" },
    { id: "social-media", label: "Social Media", lastEdited: "Last edited 28hrs ago" },
]

const FooterManagementSidebar = ({ selectedPageId, onPageSelect }) => {

    return (
        <Paper
            sx={{
                minWidth: 250,
                height: "-webkit-fill-available",
                overflowY: "auto",
                background: "white",
                p: 2,
                borderRadius: 2,
                border: '1px solid #DBDBDB40'
            }}
        >
            <List sx={{ padding: 0 }}>
                {footerPages.map((page) => (
                    <Box key={page.id}>
                        <ListItemButton
                            onClick={() => onPageSelect(page.id)}
                            selected={selectedPageId === page.id}
                            sx={{
                                mb: "12px",
                                borderRadius: "10px",
                                border: "1px solid",
                                borderColor: selectedPageId === page.id ? "transparent" : "#E6E6E6",

                                px: "16px",
                                py: "4px",

                                backgroundColor: selectedPageId === page.id ? "#045D8C" : "#FFFFFF",
                                color: selectedPageId === page.id ? "#FFFFFF" : "#2D2D2D",

                                transition: "all 0.2s ease",

                                "&:hover": {
                                    backgroundColor: selectedPageId === page.id ? "#045D8C" : "#F7F7F7",
                                },

                                "&.Mui-selected": {
                                    backgroundColor: "#045D8C",
                                },

                                "&.Mui-selected:hover": {
                                    backgroundColor: "#045D8C",
                                },
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontSize: 14, }}>
                                    {page.label}
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: 12, color: '#707070', color: selectedPageId === page.id ? "#FFFFFF" : "#2D2D2D" }}>
                                    {page.lastEdited}
                                </Typography>
                            </Box>
                        </ListItemButton>
                    </Box>
                ))
                }
            </List >
        </Paper >
    )
}
export default FooterManagementSidebar;

