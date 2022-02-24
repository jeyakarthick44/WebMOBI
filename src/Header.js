import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import LoadingButton from "@mui/lab/LoadingButton";
import AodIcon from "@mui/icons-material/Aod";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{
              color: "black",
              fontFamily: "Poppins",
              fontWeight: "bold"
            }}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Admin Dashboard
          </Typography>
          <LoadingButton
            style={{ backgroundColor: "white", color: "black" }}
            endIcon={<AodIcon />}
            loadingPosition="end"
            variant="contained"
          >
            Preview on :
          </LoadingButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
