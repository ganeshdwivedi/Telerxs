import { useState } from "react"
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Button,
    Select,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Paper,
} from "@mui/material"
import { FileDownload as ExcelIcon, Description as CsvIcon, PictureAsPdf as PdfIcon } from "@mui/icons-material"
import ConsultationTable from "./ReportsAndExport/ConsultationTab"
import TabPanel from "../components/TabPanel"
import CustomTab from "../components/Tab"
import PharmacyInventoryTab from "./ReportsAndExport/PharmacyInventoryTab"
import PrescriptionsOrdersTab from "./ReportsAndExport/PrescriptionsOrdersTab"
import FinancialSettlementTab from "./ReportsAndExport/FinancialSettlementTab"


export default function ReportsExports() {
    const [activeTab, setActiveTab] = useState(0)
    const [dateRange, setDateRange] = useState("last30days")

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue)
    }

    const handleDateRangeChange = (event) => {
        setDateRange(event.target.value)
    }

    const handleExport = (format) => {
        console.log(`Exporting as ${format}`)
    }

    const tabData = [
        {
            label: "Consultation Activity",
            value: 0,
        },
        {
            label: "Prescriptions & Orders",
            value: 1,
        },
        {
            label: "Financial Settlement",
            value: 2,
        },
        {
            label: "Pharmacy Inventory",
            value: 3,
        },
    ];

    return (
        <Box >

            {/* Tabs */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                    // width: "100%",
                    mb: 3,
                    display: "grid",
                    minHeight: "auto",
                    /* Disable MUI flex layout */
                    // "& .MuiTabs-flexContainer": {
                    //     display: "contents",
                    // },
                    "& .MuiTabs-indicator": {
                        display: "none",
                    },
                }}
            >
                {tabData.map((tab) => (
                    <CustomTab
                        key={tab.value}
                        label={tab.label}
                        sx={{
                            width: "24%",
                            // maxWidth: "100%",
                        }}
                    />
                ))}
            </Tabs>




            <TabPanel value={activeTab} index={0} > <ConsultationTable /></TabPanel>
            <TabPanel value={activeTab} index={1} > <PrescriptionsOrdersTab /></TabPanel>
            <TabPanel value={activeTab} index={2} > <FinancialSettlementTab /></TabPanel>
            <TabPanel value={activeTab} index={3} > <PharmacyInventoryTab /></TabPanel>


        </Box>
    )
}
