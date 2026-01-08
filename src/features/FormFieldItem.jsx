import { Box, IconButton, Typography } from "@mui/material"
// import { Edit2, Trash2 } from "lucide-react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { FiTrash } from "react-icons/fi"
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md"
import { GoGrabber } from "react-icons/go"

// interface FormFieldItemProps {
//     id: string
//     name: string
//     type: string
//     onEdit: () => void
//     onDelete: () => void
// }

export function FormFieldItem({ id, name, type, onEdit, onDelete }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging, isOver } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    }

    return (
        <Box
            ref={setNodeRef}
            style={style}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: "12px 16px",
                border: `1px solid ${isOver ? "#005492" : "#e0e0e0"}`,
                borderRadius: "6px",
                backgroundColor: isDragging ? "#e3f2fd" : isOver ? "#f0f7ff" : "#ffffff",
                opacity: isDragging ? 0.7 : 1,
                cursor: "grab",
                transition: "all 0.2s ease",
                "&:hover": {
                    backgroundColor: "#fafafa",
                    borderColor: "#d0d0d0",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                },
            }}
        >
            {/* Drag Handle */}
            <Box
                {...attributes}
                {...listeners}
                sx={{
                    display: "flex",
                    gap: 0.5,
                    color: "#999",
                    fontSize: "16px",
                    cursor: "grab",
                    userSelect: "none",
                    "&:active": { cursor: "grabbing" },
                }}
            >
                <GoGrabber fontSize={24} />
            </Box>

            {/* Field Info */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, color: "#1a1a1a" }}>
                    {name}
                </Typography>
                <Typography variant="caption" sx={{ color: "#999" }}>
                    {type}
                </Typography>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", gap: 0.5 }}>
                <IconButton
                    size="small"
                    onClick={onEdit}
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
                    onClick={onDelete}
                    sx={{
                        padding: "6px",
                        color: "#d32f2f", "&:hover": { color: "#d32f2f", backgroundColor: "rgba(211, 47, 47, 0.08)" },
                    }}
                >
                    <MdOutlineDeleteOutline size={18} />
                </IconButton>
            </Box>
        </Box>
    )
}
