import { Box, Typography } from "@mui/material";
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

export default function WhatWeBuild() {
  const items = [
    {
      icon: LandscapeOutlinedIcon,
      label: "Land and Sites",
    },
    {
      icon: WarehouseOutlinedIcon,
      label: "Industrial & Logistics Assets",
    },
    {
      icon: LocationCityOutlinedIcon,
      label: "Business Centres",
    },
    {
      icon: ManageAccountsOutlinedIcon,
      label: "Leasing & Asset Management",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 12 },
        bgcolor: "#F9F9F7",
        textAlign: "center",
      }}
    >
      {/* ---------------- TITLE ---------------- */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 800,
          color: "#1B1B1B",
        }}
      >
        What We Build
      </Typography>

      {/* Underline */}
      <Box
        sx={{
          width: "120px",
          height: "4px",
          background: "#0A7A42",
          borderRadius: "4px",
          mx: "auto",
          mt: 1,
          mb: 6,
        }}
      />

      {/* ---------------- BOXES ---------------- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              minWidth: { xs: "100%", sm: "260px" },
              maxWidth: "280px",
              background: "white",
              border: "1px solid #E5ECE8",
              borderRadius: "12px",
              p: 4,
              textAlign: "center",
              transition: "0.2s",
              "&:hover": {
                borderColor: "#0A7A42",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* Icon */}
            <Box
              className="material-symbols-outlined"
              sx={{
                fontSize: "40px",
                color: "#0A7A42",
                mb: 2,
              }}
            >
              <item.icon sx={{fontSize:"40px"}} />
            </Box>

            {/* Label */}
            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#222" }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
