import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/sidebarContext";
import Header from "./pages/Header";
// import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

// import Topbar from "./pages/global/Topbar";

// import Dashboard from "./pages/dashboard";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Form from "./pages/form";
// import Calendar from "./pages/calendar";
// import Bar from "./pages/bar";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";

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
              <BrowserRouter>
              <Routes>
                <Route path="/" element={""} />
                {/* <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} /> */}
              </Routes>
              </BrowserRouter>
            </main>
          </div>
          
        </MyProSidebarProvider>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
