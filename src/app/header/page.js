import { FaReact } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const header = () => {
  return (
    <main className="px-10 py-10 font-burtons">
      <nav className=" mb-12 flex justify-between">
        <p className="text-xl text-cyan-600 font-semibold">Nwakaego</p>
        <ul className="flex items-center">
          <li>
            <FaMoon color="black" className="text-2xl cursor-pointer" />
          </li>
          <li>
            <a
              href="#"
              className=" bg-gradient-to-r from-blue-400 to-blue-300 text-white px-2 py-2 rounded ml-5 md:ml-8"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center py-10">
        <h1 className="text-5xl py-3 text-cyan-600 font-bold">Nwaekpe Ego</h1>
        <h2 className="text-3xl font-medium mb-5">Developer and designer</h2>
        <p className="leading-8 text-gray-800">
          Freelancer providing services for programming and design content
          needs. Join me down below and lets get cracking, Freelancer providing
          services for programming and design content needs. Join me down below
          and lets get cracking
        </p>
      </div>
      <FaTwitter />
      <FaLinkedin />
      <FaGithub />
    </main>
  );
};

export default header;
