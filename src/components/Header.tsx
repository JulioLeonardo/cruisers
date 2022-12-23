import React from "react";
import { Box, styled } from "@mui/material";
import Logo from "../assets/images/cruisers_logo.webp";
import { TypeFilter, ListToggle } from "./";

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <StyledLogo src={Logo} alt="Cruisers logo" />
        <Box sx={{ display: "flex", gap: 2 }}>
          <TypeFilter />
          <ListToggle />
        </Box>
      </Box>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  backgroundColor: theme.palette.background.paper,
  paddingBottom: theme.spacing(2),
}));

const StyledLogo = styled("img")(({ theme: { spacing } }) => ({
  width: spacing(38),
}));

export { Header };
