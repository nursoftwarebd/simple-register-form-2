/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="main_layout">
      <header>
        <Header />
      </header>

      <main className="container">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
