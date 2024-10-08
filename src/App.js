import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { MyProSidebarProvider } from "./pages/sidebarContext";
import Header from "./pages/Header";
import "./App.css"
import PublicRoute from "./router/PublicRoute";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";


const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Header />
              <PublicRoute />
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
