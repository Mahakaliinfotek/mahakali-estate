import { Box, Typography, Button } from "@mui/material";

export default function PartnerWithUsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: "#026B3A",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* ---- Title ---- */}
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "34px" },
          fontWeight: 700,
          mb: 2,
        }}
      >
        Partner with Mahakali Estate
      </Typography>

      {/* ---- Subtitle ---- */}
      <Typography
        sx={{
          maxWidth: "700px",
          fontSize: "16px",
          lineHeight: 1.6,
          mb: 6,
          opacity: 0.95,
        }}
      >
        To explore leasing, joint development, or investment opportunities, 
        connect with our real estate team.
      </Typography>

      {/* ---- CTA Button ---- */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="contained"
          sx={{
            background: "#23B176",
            textTransform: "none",
            px: 4,
            py: 1.2,
            fontWeight: 600,
            borderRadius: "8px",
            "&:hover": { background: "#1c9b66" },
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}
