"use client";
import { FaReact } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const header = () => {
  const [currentMode, setCurrentMode] = useState();

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
  // #F3F5FE
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

  return (
    <main>
      <div className="hero bg-veryDarkBlue px-10 py-10 font-burtons ">
        <nav className=" mb-12 flex justify-between">
          <p className="text-xl text-white font-semibold">Nwakaego</p>
          <ul className="flex items-center">
            <li onClick={toggleButton}>
              {/* <FaMoon color="black" className="text-2xl cursor-pointer" /> */}
              {currentMode === "dark" ? (
                <FaMoon className="h-6 w-6 text-white text-2xl cursor-pointer" />
              ) : (
                <FaSun className="h-6 w-6 text-black " />
              )}
            </li>
            <li>
              <a
                href="#"
                className=" bg-gradient-to-r from-normalBlue to-normalBlue text-white px-2 py-2 rounded ml-5 md:ml-8"
              >
                RESUME
              </a>
            </li>
          </ul>
        </nav>
        <div className="lg:flex  lg:justify-between text-center py-6 lg:px-20 lg:py-20 ">
          <div className="">
            <h1 className="text-4xl  py-3 text-gray-200 font-bold lg:w-full ">
              Nwaekpe Nwakaego{" "}
              <span className="hidden md:inline-block">Glory</span>
            </h1>
            <h2 className="text-xl font-medium mb-5 text-gray-300">
              Frontend Developer
            </h2>

            <Image
              src="/Ego.jpg"
              alt="Note Image"
              width={300}
              height={200}
              layout="fit"
              objectFit="cover"
              className="    relative bg-gradient-to-b
        from-darkBlue mt-8 mx-auto rounded-full w-60 h-60 lg:w-80 lg:h-80 overflow-hidden"
            />
          </div>
          <div>
            <div className="lg:max-w-full lg:py-6 lg:px-6 lg:h-48 lg:bg-white shadow-2xl  lg:shadow-2xl lg:rounded-lg  lg:hover:bg-normalBlue lg:hover:text-white lg:transition lg:duration-300 lg:ease-in-out lg:transform lg:hover:scale-105 lg:mt-20">
              <p className="flex leading-6 text-white lg:text-normalBlue mt-5 lg:justify-end lg:w-80 lg:pb-6 hover:bg-normalBlue  hover:text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              </p>
            </div>
            <button className="bg-white hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 text-normalBlue font-bold py-2 px-4 rounded m-8">
              Click to Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="skills lg:flex lg:justify-between text-center py-6 lg:px-40 lg:py-20  font-burtons bg-lightBlueBlue">
        <div className="lg:mt-32">
          <div className="flex gap-20 text-gray-500 text-3xl justify-center py-4">
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
          </div>
          <div
            className=" relative bg-gradient-to-b
        from-darkBlue mt-8 mx-auto rounded-full w-60 h-60 overflow-hidden"
          >
            <Image
              src="/engineer.svg"
              alt="Note Image"
              width={300}
              height={200}
              layout="fit"
              objectFit="cover"
              className="mt-10"
            />
          </div>
        </div>
        <div className=" lg:rounded-lg lg:bg-darkBlue shadow-2xl   text-gray-500 mt-8 text-center ">
          <p className="rounded-lg  mx-20 h-10 bg-white shadow-2xl  hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mt-10 lg:w-52">
            HTML
          </p>
          <p className="rounded-lg  mx-20 h-10 bg-white shadow-2xl  hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mt-10">
            CSS
          </p>
          <p className="rounded-lg  mx-20 h-10 bg-white shadow-2xl  hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mt-10">
            JAVASCRIPT
          </p>
          <p className="rounded-lg  mx-20 h-10 bg-white shadow-2xl  hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mt-10">
            REACT
          </p>
          <p className="rounded-lg  mx-20 h-10 bg-white shadow-2xl  hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mt-10">
            NEXT JS
          </p>
          <p className="rounded-lg  mx-20 h-10 bg-white shadow-2xl  hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mt-10 mb-10">
            TAILWIND
          </p>
        </div>
      </div>
      <section>
        <div className="  text-center shadow-2xl rounded-lg  ">
          <div className=" lg:flex m-10">
            <div className="shadow-2xl  lg:m-5 rounded-lg ">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/note.jpg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10">
                <h2 className="justify-center my-2 text-darkBlue ">
                  Note Project
                </h2>
                <p className="text-sm text-gray-500">
                  down below and lets get cracking Join me down below and lets
                  get cracking, Freelancer providing
                </p>
                <div className="mt-2">
                  <a
                    href="/"
                    class="text-darkBlue hover:opacity-70 underline font-bold text-lg"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-2xl  lg:m-5 rounded-lg">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/weath.jpg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10">
                <h2 className="justify-center my-2 text-darkBlue ">
                  Weather Project
                </h2>
                <p className="text-sm text-gray-500">
                  down below and lets get cracking Join me down below and lets
                  get cracking, Freelancer providing
                </p>
                <div className="mt-2">
                  <a
                    href="/"
                    class="text-darkBlue hover:opacity-70 underline font-bold text-lg"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:flex">
            <div className="shadow-2xl lg:m-5 rounded-lg">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/dir.jpg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10">
                <h2 className="justify-center my-2 text-darkBlue ">
                  Pidgin Project
                </h2>
                <p className="text-sm text-gray-500">
                  down below and lets get cracking Join me down below and lets
                  get cracking, Freelancer providing
                </p>
                <div className="mt-2">
                  <a
                    href="/"
                    class="text-darkBlue hover:opacity-70 underline font-bold text-lg"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-2xl lg:m-5 rounded-lg">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/note_.jpg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10">
                <h2 className="justify-center my-2 text-darkBlue ">
                  Note Project
                </h2>
                <p className="text-sm text-gray-500">
                  down below and lets get cracking Join me down below and lets
                  get cracking, Freelancer providing
                </p>
                <div className="mt-2">
                  <a
                    href="/"
                    class="text-darkBlue hover:opacity-70 underline font-bold text-lg"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">Have a project in mind? Let's collaborate!</p>
          <a
            href="mailto:contact@example.com"
            className="text-blue-500 hover:text-blue-300 transition duration-300"
          >
            contact@example.com
          </a>
          <div className="mt-4">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition duration-300 mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition duration-300 mx-2"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition duration-300 mx-2"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default header;
