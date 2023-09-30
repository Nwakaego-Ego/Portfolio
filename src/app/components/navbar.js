import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [currentMode, setCurrentMode] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const setHeroBg = (bgColor) => {
    const herobg = document.querySelector(".hero");
    herobg.style.backgroundColor = bgColor;
  };

  const setSkillsBg = (bgColor) => {
    const heroSkillsBg = document.querySelector(".skills");
    heroSkillsBg.style.backgroundColor = bgColor;
  };

  const setDarkMode = () => {
    setHeroBg("transparent");
    setSkillsBg("transparent");
    document.querySelector("body").setAttribute("data-theme", "dark");
    setCurrentMode("dark");
  };

  const setLightMode = () => {
    setHeroBg("#010C48");
    setSkillsBg("#F3F5FE");
    document.querySelector("body").setAttribute("data-theme", "light");
    setCurrentMode("light");
  };

  const toggleButton = (event) => {
    if (currentMode === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white p-12 h-20 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Ego
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className={`md:flex space-x-4  ${isOpen ? "block" : "hidden"} m-10`}
        >
          <div onClick={toggleButton} className="">
            {currentMode === "dark" ? (
              <FaMoon className="h-6 w-6 text-white text-2xl cursor-pointer" />
            ) : (
              <FaSun className="h-6 w-6 text-black " />
            )}
          </div>
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
