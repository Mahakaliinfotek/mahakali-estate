import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

// Centralized Menu With Links
const menuItems = [
    { label: "Our Story", path: "/our-story" },
    { label: "Businesses", path: "/businesses" },
    { label: "Sustainability", path: "/sustainability" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setOpen(false);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <AppBar
                position="absolute"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    px: { xs: 2, md: 6 },
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, cursor: "pointer", color: "white" }}
                        onClick={() => navigate("/")}
                    >
                        Logo
                    </Typography>

                    {/* Desktop Menu */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: 4,
                            alignItems: "center",
                        }}
                    >
                        {menuItems.map((item) => (
                            <Typography
                                key={item.label}
                                onClick={() => handleNavigate(item.path)}
                                sx={{
                                    color: "white",
                                    fontSize: 16,
                                    cursor: "pointer",
                                    "&:hover": { opacity: 0.8 },
                                }}
                            >
                                {item.label}
                            </Typography>
                        ))}

                        {/* CTA Button */}
                        <Button
                            variant="contained"
                            onClick={() => handleNavigate("/contact")}
                            sx={{
                                background: "#0A2E3E",
                                textTransform: "none",
                                fontWeight: 600,
                                "&:hover": { background: "#08303b" },
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        width: "85%",
                        background: "#0c3c52",
                        color: "white",
                    },
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    {menuItems.map((item) => (
                        <ListItemButton
                            key={item.label}
                            onClick={() => handleNavigate(item.path)}
                            sx={{
                                borderBottom: "1px solid rgba(255,255,255,0.2)",
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    fontWeight: 500,
                                }}
                            />
                        </ListItemButton>
                    ))}

                    {/* Contact Us Inside Drawer */}
                    <ListItemButton onClick={() => handleNavigate("/contact")} sx={{ mt: 2 }}>
                        <ListItemText
                            primary="Contact Us"
                            primaryTypographyProps={{
                                fontSize: 18,
                                fontWeight: 600,
                            }}
                        />
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}
