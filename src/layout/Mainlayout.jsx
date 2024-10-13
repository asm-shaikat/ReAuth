import { Outlet } from "react-router-dom";
import './MainLayout.css';
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
  );
};

export default MainLayout;
