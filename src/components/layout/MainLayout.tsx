import { Outlet, ScrollRestoration } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
    <ScrollRestoration />
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
