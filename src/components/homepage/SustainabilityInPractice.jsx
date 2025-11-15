import { Box, Typography } from "@mui/material";

export default function SustainabilityInPractice() {
  const items = [
    {
      icon: "🌱",
      title: "Green Initiatives",
      text: "Implementing eco-friendly construction practices and preserving local biodiversity.",
    },
    {
      icon: "💧",
      title: "Water Management",
      text: "Utilizing rainwater harvesting and water recycling systems to conserve resources.",
    },
    {
      icon: "💡",
      title: "Energy Efficiency",
      text: "Integrating solar power and energy-efficient designs to reduce our carbon footprint.",
    },
    {
      icon: "📱",
      title: "Digital-first",
      text: "Leveraging technology for smart building management and operational efficiency.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 12 },
        textAlign: "center",
        background: "linear-gradient(135deg, #0B8A55, #027A42)",
        color: "white",
      }}
    >
      {/* ---------------- TITLE ---------------- */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 800,
        }}
      >
        Sustainability in Practice
      </Typography>

      {/* Underline */}
      <Box
        sx={{
          width: "140px",
          height: "3px",
          background: "#CDEFE0",
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
          alignItems: "stretch",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              minWidth: { xs: "100%", sm: "260px" },
              maxWidth: "280px",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "12px",
              p: 4,
              color: "white",
              textAlign: "left",
              backdropFilter: "blur(6px)",
            }}
          >
            {/* Icon */}
            <Typography
              sx={{
                fontSize: "28px",
                mb: 1,
              }}
            >
              {item.icon}
            </Typography>

            {/* Title */}
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "18px",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>

            {/* Description */}
            <Typography sx={{ fontSize: "15px", lineHeight: 1.6 }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
