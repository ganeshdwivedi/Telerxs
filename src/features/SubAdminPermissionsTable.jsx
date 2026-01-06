import { useState } from "react"
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    IconButton,
    Button,
    Chip,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import styled from "@emotion/styled"
import { GoPencil } from "react-icons/go"
import { MdOutlineDelete } from "react-icons/md"
import CreateSubAdminModal from "./CreateSubAdmin"
import ManagePermissionsModal from "./ManagePermissionModal"

const subAdmins = [
    {
        id: "1",
        name: "Floyd Miles",
        role: "Medicine Manager",
        email: "dianna.curtis@example.com",
        activePermissions: "4 / 9 modules",
        createdDate: "2020-07-23",
        avatar: "/floyd-miles.jpg",
    },
    {
        id: "2",
        name: "Devon Lane",
        role: "Chief Manager",
        email: "tim.jennings@example.com",
        activePermissions: "5 / 9 modules",
        createdDate: "2020-05-06",
        avatar: "/devon-lane.jpg",
    },
    {
        id: "3",
        name: "Jacob Jones",
        role: "Lab Admin",
        email: "debra.holt@example.com",
        activePermissions: "9 / 9 modules",
        createdDate: "2020-05-30",
        avatar: "/jacob-jones.jpg",
    },
    {
        id: "4",
        name: "Leslie Alexander",
        role: "Sub-Admin",
        email: "jackson.graham@example.com",
        activePermissions: "4 / 9 modules",
        createdDate: "2020-06-29",
        avatar: "/leslie-alexander.jpg",
    },
    {
        id: "5",
        name: "Robert Fox",
        role: "Sub-Admin",
        email: "jessica.hanson@example.com",
        activePermissions: "4 / 9 modules",
        createdDate: "2020-07-15",
        avatar: "/robert-fox.jpg",
    },
]

const HeaderCell = styled(TableCell)({
    color: "#4a5568",
    fontWeight: 700,
    fontSize: "0.75rem",
    borderBottom: "1px solid #edf2f7",
    backgroundColor: "#f7fafc",
    padding: "12px 16px",
    textTransform: "capitalize",
})

const StyledTableContainer = styled(TableContainer)({
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #edf2f7",
    backgroundColor: "#ffffff",
    padding: "24px",
    marginTop: "24px",
})

export default function SubAdminPermissionsTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isManagePermissionOpen, setIsManagePermissionOpen] = useState(false);
    const [isCreateSubAdminOpen, setIsCreateSubAdminOpen] = useState(false);

    const openManagePermission = () => {
        setIsManagePermissionOpen(true);
    }

    const closeManagePermission = () => {
        setIsManagePermissionOpen(false);
    }


    const openCreateSubAdmin = () => {
        setIsCreateSubAdminOpen(true);
    }

    const closeCreateSubAdmin = () => {
        setIsCreateSubAdminOpen(false);
    }
    const handleSubmit = (data) => {
        console.log(data);
        // Handle create sub-admin logic here
    }

    const filteredSubAdmins = subAdmins.filter(
        (admin) =>
            admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            admin.role.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <Box
            sx={{
                backgroundColor: "white",
                borderRadius: 2,
                p: 3,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
        >

            {/* Search and Add Button */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                    gap: 2,
                }}
            >
                <TextField
                    placeholder="Search"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        width: "250px",
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "white",
                            "& fieldset": {
                                borderColor: "#E0E0E0",
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#9E9E9E", fontSize: 20 }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <Button onClick={openCreateSubAdmin}
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        backgroundColor: "#00607C",
                        color: "white",
                        textTransform: "none",
                        borderRadius: 1,
                        px: 3,
                        py: 1,
                        fontWeight: 500,
                        "&:hover": {
                            backgroundColor: "#004d63",
                        },
                    }}
                >
                    Add Sub-Admin
                </Button>
            </Box>

            {/* Table */}
            <StyledTableContainer component={Paper} elevation={0}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <HeaderCell
                                sx={{
                                    fontWeight: 600,
                                    color: "#666",
                                    fontSize: "13px",
                                    borderBottom: "2px solid #E0E0E0",
                                }}
                            >
                                Doctor
                            </HeaderCell>
                            <HeaderCell
                                sx={{
                                    fontWeight: 600,
                                    color: "#666",
                                    fontSize: "13px",
                                    borderBottom: "2px solid #E0E0E0",
                                }}
                            >
                                Email
                            </HeaderCell>
                            <HeaderCell
                                sx={{
                                    fontWeight: 600,
                                    color: "#666",
                                    fontSize: "13px",
                                    borderBottom: "2px solid #E0E0E0",
                                }}
                            >
                                Active Permissions
                            </HeaderCell>
                            <HeaderCell
                                sx={{
                                    fontWeight: 600,
                                    color: "#666",
                                    fontSize: "13px",
                                    borderBottom: "2px solid #E0E0E0",
                                }}
                            >
                                Created Date
                            </HeaderCell>
                            <HeaderCell
                                align="right"
                                sx={{
                                    fontWeight: 600,
                                    color: "#666",
                                    fontSize: "13px",
                                    borderBottom: "2px solid #E0E0E0",
                                }}
                            >
                                Actions
                            </HeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSubAdmins.map((admin) => (
                            <TableRow
                                key={admin.id}
                                sx={{
                                    border: '1px solid #edf2f7',
                                    "&:hover": {
                                        backgroundColor: "#F9FAFB",
                                    },
                                }}
                            >
                                <TableCell sx={{ borderBottom: "1px solid #F0F0F0", }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Avatar src={admin.avatar} alt={admin.name} sx={{ width: 40, height: 40 }} />
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: "14px",
                                                    color: "#1a1a1a",
                                                }}
                                            >
                                                {admin.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "12px",
                                                    color: "#9E9E9E",
                                                }}
                                            >
                                                {admin.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ borderBottom: "1px solid #F0F0F0" }}>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: "#666",
                                        }}
                                    >
                                        {admin.email}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: "1px solid #F0F0F0" }}>
                                    <Chip
                                        label={admin.activePermissions}
                                        sx={{
                                            backgroundColor: "#E3F2FD",
                                            color: "#1976D2",
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            height: "24px",
                                            borderRadius: "4px",
                                        }}
                                    />
                                </TableCell>
                                <TableCell sx={{ borderBottom: "1px solid #F0F0F0" }}>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: "#666",
                                        }}
                                    >
                                        {admin.createdDate}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right" sx={{ borderBottom: "1px solid #F0F0F0" }}>
                                    <IconButton onClick={openManagePermission}
                                        size="small"
                                        sx={{
                                            color: "black",
                                            "&:hover": {
                                                color: "#00607C",
                                            },
                                        }}
                                    >
                                        <GoPencil fontSize="large" />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            color: "#d32f2f",
                                            "&:hover": {
                                                color: "#d32f2f",
                                            },
                                        }}
                                    >
                                        <MdOutlineDelete fontSize="large" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
            <CreateSubAdminModal onClose={closeCreateSubAdmin} onCreate={handleSubmit} open={isCreateSubAdminOpen} />
            <ManagePermissionsModal onClose={closeManagePermission} onUpdate={handleSubmit} open={isManagePermissionOpen} />
        </Box>
    )
}
