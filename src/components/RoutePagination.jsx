import { Box, Pagination } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"

export default function RoutePagination({ pagination }) {
    const navigate = useNavigate()
    const location = useLocation()

    const { page = 1, limit = 10, pages = 1 } = pagination || {}

    const handleChange = (_, newPage) => {
        const searchParams = new URLSearchParams(location.search || "")

        searchParams.set("page", newPage)
        searchParams.set("limit", limit)

        navigate({
            pathname: location.pathname,
            search: `?${searchParams.toString()}`,
        })
    }

    // Hide pagination if only one page
    if (pages <= 1) return null

    return (
        <Box display="flex" justifyContent="center" mt={3}>
            <Pagination
                count={pages}
                page={page}
                onChange={handleChange}
                color="primary"
                shape="rounded"
                showFirstButton
                showLastButton
            />
        </Box>
    )
}
