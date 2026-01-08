import { useState } from "react"
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Typography,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Select,
    MenuItem,
    Button,
} from "@mui/material"
import { FormFieldItem } from "../features/FormFieldItem"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { FiTrash } from "react-icons/fi"
import { GoGrabber } from "react-icons/go"
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md"
import { FaChevronDown } from "react-icons/fa"

// interface Field {
//     id: string
//     name: string
//     type: "Text" | "Number" | "Email" | "Date" | "Phone" | "Dropdown" | "Checkbox"
// }

// interface FormAccordionProps {
//     title: string
//     fields: Field[]
//     onFieldAdd: (field: Field) => void
//     onFieldEdit: (field: Field) => void
//     onFieldDelete: (fieldId: string) => void
//     onFieldsReorder: (fields: Field[]) => void
//     onAccordionEdit: () => void
//     onAccordionDelete: () => void
// }

export function FormAccordion({
    title,
    fields,
    onFieldAdd,
    onFieldEdit,
    onFieldDelete,
    onFieldsReorder,
    onAccordionEdit,
    onAccordionDelete,
}) {
    const [expanded, setExpanded] = useState(false)
    const [openFieldDialog, setOpenFieldDialog] = useState(false)
    const [editingField, setEditingField] = useState(null)
    const [fieldName, setFieldName] = useState("")
    const [fieldType, setFieldType] = useState("Text")

    const sensors = useSensors(
        useSensor(PointerSensor, {
            distance: 8,
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    )

    const handleOpenFieldDialog = (field) => {
        if (field) {
            setEditingField(field)
            setFieldName(field?.name)
            setFieldType(field?.type)
        } else {
            setEditingField(null)
            setFieldName("")
            setFieldType("Text")
        }
        setOpenFieldDialog(true)
    }

    const handleSaveField = () => {
        if (!fieldName.trim()) return

        const newField = {
            id: editingField?.id || `field-${Date.now()}`,
            name: fieldName,
            type: fieldType,
        }

        if (editingField) {
            onFieldEdit(newField)
        } else {
            onFieldAdd(newField)
        }

        setOpenFieldDialog(false)
    }

    const handleFieldDelete = (fieldId) => {
        if (confirm("Are you sure you want to delete this field?")) {
            onFieldDelete(fieldId)
        }
    }

    const handleDragEnd = (event) => {
        const { active, over } = event

        if (over && active.id !== over.id) {
            const oldIndex = fields.findIndex((f) => f.id === active.id)
            const newIndex = fields.findIndex((f) => f.id === over.id)

            if (oldIndex !== -1 && newIndex !== -1) {
                const reorderedFields = arrayMove(fields, oldIndex, newIndex)
                onFieldsReorder(reorderedFields)
            }
        }
    }

    return (
        <>
            <Accordion
                expanded={expanded}
                onChange={() => setExpanded(!expanded)}
                sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    marginBottom: "12px",
                    backgroundColor: "#ffffff",
                    "&:before": { display: "none" },
                }}
            >
                <AccordionSummary
                    // expandIcon={<ChevronDown size={20} />}
                    sx={{
                        // padding: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        "&:hover": { backgroundColor: "#fafafa" },
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
                        <Box sx={{ display: "flex", gap: 0.5, color: "#999", fontSize: "16px" }}>
                            <GoGrabber fontSize={24} />
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: "#3D3D3D" }}>
                            {title}
                        </Typography>
                        <Chip
                            label={`${fields.length} Fields`}
                            size="small"
                            sx={{
                                backgroundColor: "#e3f2fd",
                                color: "#005492",
                                fontWeight: 500,
                                height: "24px",
                            }}
                        />
                    </Box>

                    {/* Accordion Header Actions */}
                    <Box onClick={(e) => e.stopPropagation()} sx={{ display: "flex", gap: 0.5, }}>
                        <IconButton
                            size="small"
                            onClick={onAccordionEdit}
                            sx={{
                                padding: "6px",
                                color: "#666",
                                "&:hover": { color: "#005492", backgroundColor: "rgba(0, 84, 146, 0.08)" },
                            }}
                        >
                            <MdOutlineEdit size={18} />
                        </IconButton>
                        <IconButton
                            size="small"
                            onClick={onAccordionDelete}
                            sx={{
                                padding: "6px",
                                color: "#d32f2f",
                                "&:hover": { color: "#d32f2f", backgroundColor: "rgba(211, 47, 47, 0.08)" },
                            }}
                        >
                            <MdOutlineDeleteOutline size={18} />
                        </IconButton>
                        <IconButton
                            size="small"
                            sx={{
                                padding: "6px",
                                color: "#666",
                                "&:hover": { backgroundColor: "#f0f0f0" },
                            }}
                        >
                            <FaChevronDown size={16} />
                        </IconButton>
                    </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: "16px", backgroundColor: "#fafafa", borderTop: "1px solid #e0e0e0" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {/* Add Field Button */}

                        {/* Field List with dnd-kit Drag and Drop */}
                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext items={fields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    {fields.map((field) => (
                                        <FormFieldItem
                                            key={field.id}
                                            id={field.id}
                                            name={field.name}
                                            type={field.type}
                                            onEdit={() => handleOpenFieldDialog(field)}
                                            onDelete={() => handleFieldDelete(field.id)}
                                        />
                                    ))}
                                </Box>
                            </SortableContext>
                        </DndContext>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Field Dialog */}

        </>
    )
}
