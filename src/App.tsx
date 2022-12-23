import React from "react";
import { Home } from "./components";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";

const client = new ApolloClient({
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { padding: theme.spacing(3) } }} />
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
