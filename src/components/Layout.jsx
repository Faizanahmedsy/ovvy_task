import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
