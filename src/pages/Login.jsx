import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"
import Logo from "../components/Logo"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login attempt:", { email, rememberMe })
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#E0E0E0",
                padding: 10,
            }}
        >
            <Card
                sx={{
                    maxWidth: 640,
                    width: "100%",
                    borderRadius: 3,
                    boxShadow: "0 0px 0px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent
                    sx={{
                        padding: "0px 64px 20px",
                        "&:last-child": { paddingBottom: "40px" },
                    }}
                >
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Logo sx={{ width: '140px', height: '100%', }} />
                    </Box>


                    {/* Heading */}
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            color: "#00598D",
                            fontSize: "24px",
                            mb: 0.5,
                        }}
                    >
                        Sign in
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#6B7280",
                            fontSize: "14px",
                            mb: 4,
                        }}
                    >
                        Access the admin dashboard
                    </Typography>

                    {/* Form */}
                    <Box component="form" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#374151",
                                mb: 1,
                                fontWeight: 500,
                                fontSize: "14px",
                            }}
                        >
                            Email
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                mb: 2,
                                "& .MuiOutlinedInput-root": {
                                    bgcolor: "#FAFAFA",
                                    borderRadius: "8px",
                                    "& fieldset": {
                                        borderColor: "#E5E7EB",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#D1D5DB",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#0EA5E9",
                                        borderWidth: "1px",
                                    },
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "14px 16px",
                                    fontSize: "15px",
                                },
                            }}
                        />

                        {/* Password Field */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#374151",
                                mb: 1,
                                fontWeight: 500,
                                fontSize: "14px",
                            }}
                        >
                            Password
                        </Typography>
                        <TextField
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePassword} edge="end" sx={{ color: "#9CA3AF" }}>
                                            {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                mb: 2,
                                "& .MuiOutlinedInput-root": {
                                    bgcolor: "#FAFAFA",
                                    borderRadius: "8px",
                                    "& fieldset": {
                                        borderColor: "#E5E7EB",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#D1D5DB",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#0EA5E9",
                                        borderWidth: "1px",
                                    },
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "14px 16px",
                                    fontSize: "15px",
                                },
                            }}
                        />

                        {/* Remember Me */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    sx={{
                                        color: "#0EA5E9",
                                        padding: "6px",
                                        "&.Mui-checked": {
                                            color: "#0EA5E9",
                                        },
                                    }}
                                />
                            }
                            label={
                                <Typography variant="body2" sx={{ color: "#374151", fontSize: "14px", fontWeight: 400 }}>
                                    Remember Me
                                </Typography>
                            }
                            sx={{ mb: 4, ml: -0.5 }}
                        />

                        {/* Sign In Button */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                color: "#FFFFFF",
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                padding: "14px",
                                borderRadius: "8px",
                                background: "linear-gradient(180deg, #2CBEFF 0%, #00598D 100%)",
                                boxShadow: "0px 8px 20px rgba(0, 89, 141, 0.35)",
                                "&:hover": {
                                    background: "linear-gradient(180deg, #29B4F2 0%, #004F80 100%)",
                                    boxShadow: "0px 10px 24px rgba(0, 89, 141, 0.45)",
                                },
                            }}
                        >
                            Sign in
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
