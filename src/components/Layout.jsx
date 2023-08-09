/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";
import shape1 from "../assets/shape1.png";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div className="main_layout">
      {/* shape */}
      <Box className="shape1">
        <img src={shape1} alt="" />
      </Box>

      {/* navbar header */}
      <header>
        <Header />
      </header>

      {/* main section */}
      <main className="container">{children}</main>

      {/* footer section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
