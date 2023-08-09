import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout.jsx";
import "./index.css";
import App from "./pages/App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
