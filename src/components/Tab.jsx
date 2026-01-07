import { styled, Tab } from '@mui/material'
import React from 'react'

const CustomTab = styled(Tab)(({ theme }) => ({
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

export default CustomTab