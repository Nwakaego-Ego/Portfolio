import { FaReact } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const header = () => {
  return (
    <nav className="px-10 py-10">
      <header className=" mb-12 flex justify-between">
        <p className="text-xl">Developed by Nwakaego</p>
        <ul className="flex items-center">
          <li>
            <FaMoon color="black" className="text-2xl cursor-pointer" />
          </li>
          <li>
            <a
              href="#"
              className=" bg-gradient-to-r from-blue-400 to-teal-500 text-white px-2 py-2 rounded ml-5 md:ml-8"
            >
              RESUME
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default header;
