import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./lib/theme";

import AppContainer from "./components/app-container/app-container";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
