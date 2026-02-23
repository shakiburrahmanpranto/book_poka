import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Root;
