import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#4c3575] text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto w-[90%] flex justify-between items-center py-4">
        
        {/* Site Name */}
        <h1 className="text-2xl font-bold text-[#F5558D]">TaskSync <span className="text-white">.</span></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "About Us", "Contact", "Dashboard"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `hover:text-[#F5558D] transition ${
                    isActive ? "text-[#F5558D]" : "text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="hidden md:block px-4 py-2 bg-[#F5558D] text-white rounded-md hover:opacity-80">
          Log In
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4c3575] py-4 absolute top-[60px] left-0 w-full text-center">
          <ul className="space-y-4">
            {["Home", "About Us", "Contact", "Dashboard"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className={({ isActive }) =>
                    `block py-2 hover:text-[#F5558D] transition ${
                      isActive ? "text-[#F5558D]" : "text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <button className="px-4 py-2 bg-[#F5558D] text-white rounded-md hover:opacity-80 w-full">
              Log In
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
