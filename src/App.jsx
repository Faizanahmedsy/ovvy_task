import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Toaster } from "sonner";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.jsx";
import AppRoutes from "./components/shared/AppRoutes.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" richColors />
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
