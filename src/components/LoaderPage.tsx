import React from "react";
import { CircularProgress } from "@mui/material";
import { CenterContentContainer } from "./global";

const LoaderPage = (): JSX.Element => (
  <CenterContentContainer sx={{ backgroundColor: "rgba(71,71,71,0.2)" }}>
    <CircularProgress />
  </CenterContentContainer>
);

export { LoaderPage };
