import { Box, Typography } from "@mui/material";
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

export default function WhatWeBuild() {
  const items = [
    { icon: LandscapeOutlinedIcon, label: "Land and Sites" },
    { icon: WarehouseOutlinedIcon, label: "Industrial & Logistics Assets" },
    { icon: LocationCityOutlinedIcon, label: "Business Centres" },
    { icon: ManageAccountsOutlinedIcon, label: "Leasing & Asset Management" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        pb: 5,
        bgcolor: "#F9F9F7",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 800,
          color: "#1B1B1B",
        }}
      >
        What We Build
      </Typography>

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

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Box
              key={index}
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: "260px" },
                maxWidth: "280px",
                height: "220px", // FIXED HEIGHT
                background: "white",
                border: "1px solid #E5ECE8",
                borderRadius: "12px",
                p: 4,
                textAlign: "center",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                "&:hover": {
                  borderColor: "#0A7A42",
                  transform: "translateY(-6px)", // HOVER LIFT
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Icon sx={{ fontSize: "40px", color: "#0A7A42", mb: 2 }} />

              <Typography
                sx={{ fontWeight: 700, fontSize: "16px", color: "#222" }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
