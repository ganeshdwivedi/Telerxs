import { useState } from "react"
import {
    Box,
    Container,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Tabs,
} from "@mui/material"
import { FormAccordion } from "../features/FormAccordion"
import CustomTab from "../components/Tab"
import TabPanel from "../components/TabPanel"

// interface Field {
//     id: string
//     name: string
//     type: "Text" | "Number" | "Email" | "Date" | "Phone" | "Dropdown" | "Checkbox"
// }

// interface Section {
//     id: string
//     title: string
//     fields: Field[]
// }

export default function FormBuilder() {
    const [tabValue, setTabValue] = useState(0)
    const [sections, setSections] = useState([
        {
            id: "1",
            title: "Basic Information",
            fields: [
                { id: "1-1", name: "Full Name", type: "Text" },
                { id: "1-2", name: "Last Name", type: "Text" },
                { id: "1-3", name: "Middle Initial", type: "Text" },
                { id: "1-4", name: "Gender", type: "Text" },
                { id: "1-5", name: "DOB", type: "Date" },
                { id: "1-6", name: "Email ID", type: "Email" },
                { id: "1-7", name: "Mobile Number", type: "Number" },
                { id: "1-8", name: "Work Phone Number", type: "Number" },
            ],
        },
        {
            id: "2",
            title: "Emergency Contact",
            fields: [
                { id: "2-1", name: "Contact Name", type: "Text" },
                { id: "2-2", name: "Relationship", type: "Text" },
                { id: "2-3", name: "Phone Number", type: "Phone" },
                { id: "2-4", name: "Email", type: "Email" },
                { id: "2-5", name: "Address", type: "Text" },
            ],
        },
        {
            id: "3",
            title: "Medical Question",
            fields: [
                { id: "3-1", name: "Medical History", type: "Text" },
                { id: "3-2", name: "Allergies", type: "Text" },
                { id: "3-3", name: "Current Medications", type: "Text" },
                { id: "3-4", name: "Last Check-up", type: "Date" },
                { id: "3-5", name: "Doctor Name", type: "Text" },
            ],
        },
    ])

    const [editingSectionId, setEditingSectionId] = useState(null)
    const [sectionTitle, setSectionTitle] = useState("")
    const [openSectionDialog, setOpenSectionDialog] = useState(false)

    const handleAddField = (sectionId, field) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.id === sectionId ? { ...section, fields: [...section.fields, field] } : section,
            ),
        )
    }

    const handleEditField = (sectionId, field) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.id === sectionId
                    ? {
                        ...section,
                        fields: section.fields.map((f) => (f.id === field.id ? field : f)),
                    }
                    : section,
            ),
        )
    }

    const handleDeleteField = (sectionId, fieldId) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.id === sectionId ? { ...section, fields: section.fields.filter((f) => f.id !== fieldId) } : section,
            ),
        )
    }

    const handleEditSection = (sectionId) => {
        const section = sections.find((s) => s.id === sectionId)
        if (section) {
            setEditingSectionId(sectionId)
            setSectionTitle(section.title)
            setOpenSectionDialog(true)
        }
    }

    const handleSaveSection = () => {
        if (!sectionTitle.trim() || !editingSectionId) return
        setSections((prevSections) =>
            prevSections.map((section) => (section.id === editingSectionId ? { ...section, title: sectionTitle } : section)),
        )
        setOpenSectionDialog(false)
    }

    const handleDeleteSection = (sectionId) => {
        if (confirm("Are you sure you want to delete this section?")) {
            setSections((prevSections) => prevSections.filter((s) => s.id !== sectionId))
        }
    }

    return (
        <Container component="main" sx={{ flex: 1, overflow: "hidden" }}>
            <Box sx={{ marginBottom: "24px" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: "8px", color: "#1a1a1a" }}>
                    Form Builder
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                    Organize and manage your form fields by section
                </Typography>
            </Box>

            <Tabs
                value={tabValue}
                onChange={(_, v) => setTabValue(v)}
                variant="fullWidth"
                sx={{
                    mb: 3,
                    minHeight: "auto",
                    width: "100%",
                    "& .MuiTabs-indicator": {
                        display: "none",
                    },
                }}
            >
                <CustomTab
                    label="New Intake"
                    sx={{
                        flex: 1,
                        minHeight: "40px",
                    }}
                />
                <CustomTab
                    label="Refill Intake"
                    sx={{
                        flex: 1,
                        minHeight: "40px",
                    }}
                />
            </Tabs>

            <TabPanel value={tabValue} index={0} >   <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {sections.map((section) => (
                    <FormAccordion
                        key={section.id}
                        title={section.title}
                        fields={section.fields}
                        onFieldAdd={(field) => handleAddField(section.id, field)}
                        onFieldEdit={(field) => handleEditField(section.id, field)}
                        onFieldDelete={(fieldId) => handleDeleteField(section.id, fieldId)}
                        onAccordionEdit={() => handleEditSection(section.id)}
                        onAccordionDelete={() => handleDeleteSection(section.id)}
                    />
                ))}
            </Box></TabPanel>

            {/* Sections */}




            {/* Section Edit Dialog */}

        </Container>
    )
}
