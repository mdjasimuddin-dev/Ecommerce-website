import { Outlet } from "react-router";
import Navbar from "./../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow lg:w-7xl mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
