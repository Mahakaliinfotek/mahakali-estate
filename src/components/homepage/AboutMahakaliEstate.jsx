import { Box, Typography } from "@mui/material";

import img1 from "../../assets/images/aboutme1.png";
import img2 from "../../assets/images/aboutme2.png";

export default function AboutMahakaliEstate() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 12 },
        bgcolor: "#F9F9F7",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 10 },
        alignItems: "flex-start",
      }}
    >
      {/* ---------------- LEFT CONTENT ---------------- */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            fontWeight: 800,
            color: "#1B1B1B",
          }}
        >
          About Mahakali Estate
        </Typography>

        {/* Underline */}
        <Box
          sx={{
            width: "140px",
            height: "4px",
            background: "#005875",
            borderRadius: "4px",
            mt: 1,
            mb: 3,
          }}
        />

        <Typography
          sx={{
            fontSize: "16px",
            color: "#4B4B4B",
            lineHeight: 1.7,
            maxWidth: "520px",
          }}
        >
          Mahakali Estate is the real estate arm of The Mahakali Group. We turn strategically located land into productive assets. Our portfolio spans multi-site land aggregation and development in Rajasthan and business centres that anchor East Coast operations. 
        </Typography>
      </Box>

      {/* ---------------- RIGHT IMAGES ---------------- */}
      <Box
        sx={{
          flex: 1.2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          justifyContent: "center",
        }}
      >
        {/* Image 1 */}
        <Box
          component="img"
          src={img1}
          alt="Building"
          sx={{
            width: "100%",
            maxWidth: "260px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />

        {/* Image 2 */}
        <Box
          component="img"
          src={img2}
          alt="Landscape"
          sx={{
            width: "100%",
            maxWidth: "260px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
}
