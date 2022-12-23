import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Divider } from "@mui/material";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Divider sx={{ margin: (theme) => `${theme.spacing(3)} 0px` }} />
      <Main />
    </>
  );
};

export { Home };
