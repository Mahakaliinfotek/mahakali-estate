import { Box, Typography } from "@mui/material";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

export default function GovernanceSection() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 12 },
        textAlign: "center",
        bgcolor: "#F9F9F7",
      }}
    >
      {/* ------ Icon ------ */}
      {/* <Box
        className="material-symbols-outlined"
        sx={{
          fontSize: "40px",
          color: "#0A7A42",
          mb: 2,
        }}
      > */}
        <VerifiedUserOutlinedIcon sx={{fontSize: "60px",color: "#0A7A42",}}/>
      {/* </Box> */}

      {/* ------ Title ------ */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 800,
          color: "#1B1B1B",
          mb: 1,
        }}
      >
        Governance
      </Typography>

      {/* ------ Underline ------ */}
      <Box
        sx={{
          width: "120px",
          height: "4px",
          background: "#0A7A42",
          borderRadius: "4px",
          mx: "auto",
          mb: 4,
        }}
      />

      {/* ------ Description ------ */}
      <Typography
        sx={{
          maxWidth: "800px",
          mx: "auto",
          fontSize: "16px",
          lineHeight: 1.6,
          color: "#4B4B4B",
        }}
      >
        Clear titles, statutory compliance, safety and access standards for tenants 
        and visitors, periodic audits, and defined escalation paths during build 
        and operations.
      </Typography>
    </Box>
  );
}
