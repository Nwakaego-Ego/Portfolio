// import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar mb-16  lg:p-2 lg:mb-1 ">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className=" text-xl  font-bold lg:text-[35px] p-8 lg:p-1 text-gray-400"
          >
            Ego
          </a>

          <div className="md:hidden p-8 lg:p-1 ">
            <button className="menu-button" onClick={toggleMenu}>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </button>
          </div>

          <div
            className={`md:flex space-x-4 ${
              isOpen ? "block" : "hidden"
            } m-10 lg:flex lg:space-x-4 text-sm lg:text-xl `}
          >
            {/* <div onClick={toggleDarkMode} className=" lg:px-4 lg:py-2">
              {currentMode === "dark" ? (
                <FaMoon className="h-6 w-6 text-white text-2xl cursor-pointer" />
              ) : (
                <FaSun className="h-6 w-6 text-black " />
              )}
            </div> */}
            {/* <Link href="/about" className="lg:px-4 lg:py-2">
              About
            </Link> */}
            <a href="#about" className="lg:px-4 lg:py-2 text-gray-400">
              {" "}
              About
            </a>
            <a href="#project" className="lg:px-4 lg:py-2 text-gray-400">
              {" "}
              Projects
            </a>
            <a href="#contact" className="lg:px-4 lg:py-2 text-gray-400">
              {" "}
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
