import {
    Box,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    InputAdornment,
} from "@mui/material"
import { Add as AddIcon, Search as SearchIcon, Tune as FilterIcon } from "@mui/icons-material"
import { useState } from "react"

// interface BlogPost {
//     id: number
//     title: string
//     categories: string
//     tags: string
//     date: string
// }

const blogPosts = [
    {
        id: 1,
        title: "Blog title 1",
        categories: "Bacterial Infection",
        tags: "Bacterial, Infection, Pharmacy",
        date: "2025-01-15",
    },
    { id: 2, title: "Blog title 2", categories: "Viral Infection", tags: "Viral, Infection", date: "2025-01-18" },
    { id: 3, title: "Blog title 3", categories: "Fungal Infection", tags: "Infection", date: "2025-12-20" },
    { id: 4, title: "Blog title 4", categories: "Parasitic Infection", tags: "Parasitic, Infection", date: "2025-12-20" },
    { id: 5, title: "Blog title 5", categories: "Acute Infection", tags: "Infection", date: "2025-12-20" },
]

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <Box sx={{ padding: 2, bgcolor: "white", borderRadius: 2, border: '1px solid #E6E8EE' }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px",
                }}
            >
                <Typography sx={{ fontWeight: 700, color: '#3D3D3D', mb: 3 }}>
                    Blogs
                </Typography>

            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#999" }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        width: "200px",
                        "& .MuiInputBase-root": {
                            bgcolor: "#FFFFFF",
                            borderRadius: "4px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#E0E0E0",
                        },
                    }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', justifyContent: 'space-between' }}> <Button
                    startIcon={<FilterIcon />}
                    sx={{
                        color: "#333",
                        textTransform: "none",
                        borderColor: "#E0E0E0",
                        border: "1px solid #E0E0E0",
                        "&:hover": {
                            bgcolor: "#F5F5F5",
                        },
                    }}
                >
                    Filter
                </Button>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{
                            bgcolor: "#00598D",
                            textTransform: "none",
                            "&:hover": {
                                bgcolor: "#0A5FA0",
                            },
                        }}
                    >
                        Add New Post
                    </Button>
                </Box>

            </Box>

            <TableContainer component={Paper} sx={{ bgcolor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <Table>
                    <TableHead sx={{ bgcolor: "#F9F9F9" }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, color: "#333", borderBottom: "1px solid #E0E0E0" }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", borderBottom: "1px solid #E0E0E0" }}>
                                Categories
                            </TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", borderBottom: "1px solid #E0E0E0" }}>Tags</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "#333", borderBottom: "1px solid #E0E0E0" }}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {blogPosts.map((post) => (
                            <TableRow key={post.id} sx={{ "&:hover": { bgcolor: "#F9F9F9" } }}>
                                <TableCell sx={{ color: "#0F7DC1", fontWeight: 500, borderBottom: "1px solid #E0E0E0" }}>
                                    {post.title}
                                </TableCell>
                                <TableCell sx={{ color: "#666", fontSize: "14px", borderBottom: "1px solid #E0E0E0" }}>
                                    {post.categories}
                                </TableCell>
                                <TableCell sx={{ color: "#999", fontSize: "14px", borderBottom: "1px solid #E0E0E0" }}>
                                    {post.tags}
                                </TableCell>
                                <TableCell sx={{ color: "#999", fontSize: "14px", borderBottom: "1px solid #E0E0E0" }}>
                                    {post.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
export default Blog;