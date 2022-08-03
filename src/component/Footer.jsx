import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Container } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ marginTop:"20px", border: "1px solid rgba(0, 0, 0, 0.1)"}}>
      <Box>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="body1" color="initial">
            &copy; Ari Dwiputra
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
