import { CiMail, CiSearch } from "react-icons/ci";
import {
  FaPhoneVolume,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaFacebook, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchbox = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#fc5c65] text-white py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <CiMail size={16} />
            <span className="text-sm">info@mjsoftbd.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneVolume size={16} />
            <span className="text-sm">01784293797</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="#" className="hover:text-gray-200">
            <FaFacebook size={18} />
          </Link>
          <Link to="#" className="hover:text-gray-200">
            <FaYoutube size={18} />
          </Link>
          <Link to="#" className="hover:text-gray-200">
            <FaTwitter size={18} />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white shadow-md px-2 py-2 md:py-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#fc5c65] rounded-full flex items-center justify-center">
              <span className="font-bold text-white">MJ</span>
            </div>
            <span className="text-2xl font-bold text-[#fc5c65]">Shop</span>
          </div>
          <a
            href="#"
            className="text-gray-700 hover:text-[#fc5c65] font-medium"
          >
            Home
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            {isOpen && (
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}

            <button
              onClick={handleSearchbox}
              className="bg-white border border-l-1  border-gray-300 text-gray-500 py-2 md:px-4 rounded-r-md hover:bg-gray-100"
            >
              <CiSearch size={20} />
            </button>
          </div>

          <button className="text-gray-700 hover:text-[#fc5c65]">
            <FaRegHeart size={24} />
          </button>

          <button className="relative text-gray-700 hover:text-[#fc5c65]">
            <FaShoppingBag size={24} />
            <span className="absolute -top-1 -right-1 bg-[#fc5c65] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>

          <button className="bg-[#fc5c65] text-white font-medium py-2 px-6 rounded-md hover:bg-[#fc5c65] transition duration-300">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
