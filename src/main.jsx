import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout.jsx";
import "./index.css";
import App from "./pages/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
