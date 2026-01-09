import { Box, Typography } from "@mui/material"
import { useState } from "react"
import FooterManagementSidebar from "../components/FooterManagementSidebar"
import FooterLogoPage from "../features/footer/FooterLogo"
import FooterAboutUsPage from "../features/footer/AboutUs"
import { useNavigate, useSearchParams } from "react-router-dom"
import Blog from "../features/footer/Blogs"
import Contact from "../features/footer/Contact"
import Address from "../features/footer/Adress"
import SocialMedia from "../features/footer/SocialMedia"
import FAQ from "../features/footer/FAQ"


const TextEditorPages = [
    "about-us",
    "how-works",
    "leadership",
    "careers",
    "support",
    "shipping-returns",
    "privacy-policy",
    "terms-conditions",
    "consent-telehealth",
]


export default function FooterManagementPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get('active')


    const renderPage = () => {
        if (TextEditorPages.includes(activeTab)) {
            return <FooterAboutUsPage />
        }

        switch (activeTab) {
            case "logo":
                return <FooterLogoPage />
            case "blogs":
                return <Blog />
            case "contact":
                return <Contact />
            case "address":
                return <Address />
            case "social-media":
                return <SocialMedia />
            case 'faq':
                return <FAQ />
            default:
                return <FooterLogoPage />
        }
    }

    const handleRedirect = (string) => {
        navigate(`/footer-management?active=${string}`);
        setSelectedPage(string);
    }

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#F1FAFE", gap: 2 }}>

            <FooterManagementSidebar selectedPageId={activeTab} onPageSelect={handleRedirect} />
            <Box sx={{ flex: 1, overflowY: "auto", }}>{renderPage()}</Box>
        </Box>
    )
}
