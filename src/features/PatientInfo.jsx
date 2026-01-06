import React from "react"
import {
    Box,
    Typography,
    Card,
    Avatar,
    Stack,
    Tabs,
    Tab,
    styled,

} from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined"
import PatientHealthHistory from "./patient/PatientHealthHistoryTab"
import PrescriptionTable from "./patient/PatientPrescriptionTab"
import TransactionTable from "./patient/PatientTransactionTab"

const BackLink = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#718096",
    cursor: "pointer",
    marginBottom: "16px",
    "&:hover": {
        color: "#2d3748",
    },
}))

const ProfileCard = styled(Card)(({ theme }) => ({
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginBottom: "32px",
}))

const PillTab = styled(Tab)(({ theme }) => ({
    textTransform: "none",
    borderRadius: "24px",
    minHeight: "44px",
    padding: "8px 24px",
    marginRight: "16px",
    color: "#4a5568",
    backgroundColor: "#ffffff",
    fontWeight: 500,
    "&.Mui-selected": {
        color: "#ffffff",
        backgroundColor: "#005492",
    },
}))


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function PatientDetails() {
    const [tabValue, setTabValue] = React.useState(0)


    return (
        <>
            <BackLink>
                <ArrowBackIosNewIcon sx={{ fontSize: "14px" }} />
                <Typography variant="h5">Patient Details</Typography>
            </BackLink>

            <ProfileCard>
                <Avatar src="/placeholder.svg?height=100&width=100" sx={{ width: 100, height: 100, borderRadius: "16px" }} />
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: "#2d3748" }}>
                        John Doe
                    </Typography>
                    <Stack spacing={0.5}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <MailOutlineIcon sx={{ fontSize: "18px", color: "#718096" }} />
                            <Typography sx={{ color: "#718096", fontSize: "14px" }}>sarah.j@mediprime.com</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <LocalPhoneOutlinedIcon sx={{ fontSize: "18px", color: "#718096" }} />
                            <Typography sx={{ color: "#718096", fontSize: "14px" }}>+1 (555) 123-4567</Typography>
                        </Stack>
                        <Typography sx={{ color: "#718096", fontSize: "14px", mt: 0.5 }}>
                            Patient ID: #99281 • Male • 34yo
                        </Typography>
                    </Stack>
                </Box>
            </ProfileCard>

            <Tabs
                value={tabValue}
                onChange={(_, v) => setTabValue(v)}
                TabIndicatorProps={{ style: { display: "none" } }}
                sx={{ mb: 3 }}
            >
                <PillTab label="Health History(03)" />
                <PillTab label="Prescription (02)" />
                <PillTab label="Transaction (05)" />

            </Tabs>
            <TabPanel value={tabValue} index={0} > <PatientHealthHistory /></TabPanel>
            <TabPanel value={tabValue} index={1} > <PrescriptionTable /></TabPanel>
            <TabPanel value={tabValue} index={2} > <TransactionTable /></TabPanel>

        </>
    )
}

