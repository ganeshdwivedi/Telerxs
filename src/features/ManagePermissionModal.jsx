import { useState } from "react"
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Button,
} from "@mui/material"
import BaseModal from "../components/BaseModal"

// interface PermissionRow {
//     module: string
//     view: boolean
//     add: boolean
//     edit: boolean
//     delete: boolean
// }

// interface ManagePermissionsModalProps {
//     open: boolean
//     onClose: () => void
//     onUpdate?: (permissions: PermissionRow[]) => void
// }

export default function ManagePermissionsModal({ open, onClose, onUpdate }) {
    const [permissions, setPermissions] = useState([
        {
            module: "Dashboard",
            view: false,
            add: false,
            edit: false,
            delete: false,
        },
        {
            module: "Provider Management",
            view: true,
            add: true,
            edit: true,
            delete: true,
        },
        {
            module: "Medicine Management",
            view: true,
            add: true,
            edit: true,
            delete: true,
        },
        {
            module: "Patient Management",
            view: true,
            add: false,
            edit: false,
            delete: false,
        },
        {
            module: "Prescription & Order Management",
            view: true,
            add: false,
            edit: false,
            delete: false,
        },
        {
            module: "Financial Overview",
            view: false,
            add: false,
            edit: false,
            delete: false,
        },
        {
            module: "Compliance & Security",
            view: false,
            add: false,
            edit: false,
            delete: false,
        },
        {
            module: "Marketing & Notifications",
            view: false,
            add: false,
            edit: false,
            delete: false,
        },
        {
            module: "Reports & Exports",
            view: false,
            add: false,
            edit: false,
            delete: false,
        },
    ])

    const handleCheckboxChange = (index, field) => {
        const updatedPermissions = [...permissions]
        updatedPermissions[index][field] = !updatedPermissions[index][field]
        setPermissions(updatedPermissions)
    }

    const handleUpdate = () => {
        onUpdate?.(permissions)
        onClose()
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Manage Permissions"
            onCancel={onClose}
            onAction={handleUpdate}
            actionLabel="Update Permissions"
            maxWidth="md"
        >
            <Box sx={{ p: 2 }}>
                <TableContainer
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow
                                sx={{
                                    backgroundColor: "#F5F5F5",
                                }}
                            >
                                <TableCell
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#333",
                                        padding: "16px 24px",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Module
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#333",
                                        padding: "16px 24px",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    View
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#333",
                                        padding: "16px 24px",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Add
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#333",
                                        padding: "16px 24px",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Edit
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#333",
                                        padding: "16px 24px",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Delete
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {permissions.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#FAFAFA",
                                        },
                                    }}
                                >
                                    <TableCell
                                        sx={{
                                            fontSize: "14px",
                                            color: "#333",
                                            padding: "16px 24px",
                                            borderBottom: index === permissions.length - 1 ? "none" : "1px solid #F0F0F0",
                                        }}
                                    >
                                        {row.module}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            padding: "16px 24px",
                                            borderBottom: index === permissions.length - 1 ? "none" : "1px solid #F0F0F0",
                                        }}
                                    >
                                        <Checkbox
                                            checked={row.view}
                                            onChange={() => handleCheckboxChange(index, "view")}
                                            sx={{
                                                color: "#D0D0D0",
                                                "&.Mui-checked": {
                                                    color: "#0090C1",
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            padding: "16px 24px",
                                            borderBottom: index === permissions.length - 1 ? "none" : "1px solid #F0F0F0",
                                        }}
                                    >
                                        <Checkbox
                                            checked={row.add}
                                            onChange={() => handleCheckboxChange(index, "add")}
                                            sx={{
                                                color: "#D0D0D0",
                                                "&.Mui-checked": {
                                                    color: "#0090C1",
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            padding: "16px 24px",
                                            borderBottom: index === permissions.length - 1 ? "none" : "1px solid #F0F0F0",
                                        }}
                                    >
                                        <Checkbox
                                            checked={row.edit}
                                            onChange={() => handleCheckboxChange(index, "edit")}
                                            sx={{
                                                color: "#D0D0D0",
                                                "&.Mui-checked": {
                                                    color: "#0090C1",
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            padding: "16px 24px",
                                            borderBottom: index === permissions.length - 1 ? "none" : "1px solid #F0F0F0",
                                        }}
                                    >
                                        <Checkbox
                                            checked={row.delete}
                                            onChange={() => handleCheckboxChange(index, "delete")}
                                            sx={{
                                                color: "#D0D0D0",
                                                "&.Mui-checked": {
                                                    color: "#0090C1",
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </BaseModal>
    )
}
