import { FormControl, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomSelect = ({ value, onChange, options }) => {
    return (
        <FormControl>
            <Select
                value={value}
                onChange={onChange}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                    minWidth: 170,
                    height: 44,
                    px: 2,

                    borderRadius: "999px",
                    backgroundColor: "#ffffff",
                    fontSize: "0.9rem",
                    color: "#1a202c",
                    border: "none",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e2e8f0",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cbd5e0",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cbd5e0",
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomSelect;
