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
      <nav className="navbar ">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold lg:text-[35px]">
            Ego
          </a>

          <div className="md:hidden">
            <button className="menu-button" onClick={toggleMenu}>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </button>
          </div>

          <div
            className={`md:flex space-x-4 ${
              isOpen ? "block" : "hidden"
            } m-10 lg:flex lg:space-x-4 `}
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
            <a href="#about" className="lg:px-4 lg:py-2">
              {" "}
              About
            </a>
            <a href="#project" className="lg:px-4 lg:py-2">
              {" "}
              Projects
            </a>
            <a href="#contact" className="lg:px-4 lg:py-2">
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
