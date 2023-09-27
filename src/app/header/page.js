"use client";
import { FaReact } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const header = () => {
  const [currentMode, setCurrentMode] = useState();
  // const [repeat, setRepeat] = useState(2);

  // const sequence = [
  //   "Nwaekpe Glory Nwakaego",
  //   1000,
  //   "Frontend Developer",
  //   1000,
  //   "Technical Writer",
  //   1000,
  //   "Opensource Enthusiast",
  //   1000,
  // ];

  // const handleSequenceEnd = () => {
  //   if (repeat === 0) {

  //     return sequence.join(" ");
  //   } else {

  //     setRepeat(repeat - 1);
  //   }
  // };

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

  const techStack = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NEXTJS",
    "TAILWIND",
  ];

  return (
    <main>
      <div className="hero bg-veryDarkBlue  font-burtons ">
        <nav className=" mb-12 flex justify-between fixed w-full bg-blur p-8 shadow-2xl z-10">
          <Link href="/header">
            <p className="text-xl text-darkBlue font-semibold ">Nwakaego</p>
          </Link>
          <ul className="flex items-center">
            <li onClick={toggleButton}>
              {/* <FaMoon color="black" className="text-2xl cursor-pointer" /> */}
              {currentMode === "dark" ? (
                <FaMoon className="h-6 w-6 text-white text-2xl cursor-pointer" />
              ) : (
                <FaSun className="h-6 w-6 text-black " />
              )}
            </li>

            <li className=" w-32  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold  px-8  py-2 rounded ml-5">
              <a
                href="https://ego.hashnode.dev/?source=top_nav_blog_home"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                BLOG
              </a>
            </li>
          </ul>
        </nav>
        <div className="lg:flex  lg:justify-between text-center py-6 lg:px-20 lg:py-20 ">
          <div className="">
            <h1 className="text-4xl  py-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold lg:w-full mt-20 ">
              Hello 👋
              {/* Hello 👋 I am Nwaekpe Glory Nwakaego{" "}
              <span className="hidden md:inline-block">Glory</span> */}
              <TypeAnimation
                sequence={[
                  "Nwaekpe Glory Nwakaego",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Technical Writer",
                  1000,
                  "Opensource Enthusiast",
                  1000,
                ]}
                speed={25} // Reduce the speed (adjust the value as needed)
                style={{ fontSize: "1em", display: "block" }} // Reduce font size and change display to block
                repeat={2} // Set repeat to 2 to loop twice on load
              />
            </h1>
            <h2 className="text-xl font-medium mb-5 text-gray-300 animate-pulse">
              {/* Frontend Developer and Writer */}
            </h2>
            <div>
              <div className="rounded-full bg-[#181818]  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto text-center">
                <Image
                  src="/anime.jpg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  layout="fit"
                  objectFit="cover"
                  className="rounded-full w-44 h-44 lg:w-64 lg:h-64 border border-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="lg:max-w-full lg:py-6 lg:px-6 lg:h-48 lg:bg-white shadow-2xl lg:rounded-lg group lg:hover:bg-normalBlue lg:transition lg:duration-300 lg:ease-in-out lg:transform lg:hover:scale-105 lg:mt-52">
              <p className="flex leading-6 lg:text-normalBlue text-gray-400 mt-5 lg:justify-end lg:w-80 lg:pb-6  transition duration-300 ease-in-out group-hover:text-white">
                I'm a junior front-end developer and writer, blending code and
                words to create compelling digital experiences. With a passion
                for storytelling, I bring creativity and functionality to the
                web.
              </p>
            </div>
            <button className=" w-32  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded m-10">
              <a
                href="https://drive.google.com/file/d/1cl-bca6iy1bZs-bv3sjmefBjFBD7gjYN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Hire me
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="skills lg:flex lg:justify-between text-center py-6 lg:px-40 lg:py-10  font-burtons  bg-veryLightBlue">
        <div className="lg:mt-20">
          <div className="flex gap-20 text-gray-500 text-3xl justify-center py-4">
            <a
              href="https://twitter.com/GloryNwaekpe"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/glory-nwaekpe/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Nwakaego-Ego"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaGithub />
            </a>
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
        <div>
          {techStack.map((stack, index) => {
            return (
              <div
                className="mx-20 lg:w-52 cursor-pointer h-10 flex flex-row text-black  items-center justify-center text-center shadow-2xl rounded-lg bg-white mt-10   hover:bg-normalBlue hover:text-white transition duration-300 ease-in-out transform hover:scale-105 animate-bounce"
                key={index}
              >
                <ul>
                  <li>{stack}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <section>
        <div className="  text-center shadow-2xl rounded-lg  ">
          <div className=" lg:flex m-10">
            <div className="shadow-2xl  lg:m-5 rounded-3xl max-w-xl">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/note_.svg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10 bg-darkBlue rounded-b-2xl">
                <h2 className="justify-center my-2 text-white   ">
                  Note Project
                </h2>
                <p className="text-sm text-gray-300">
                  I created a note-taking app, streamlining organization and
                  productivity by capturing and managing ideas with ease and
                  efficiency.
                </p>
                <div className="mt-2">
                  <a
                    href="https://luminous-travesseiro-93a1d7.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:opacity-70 underline font-bold text-lg cursor-pointer"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-2xl  lg:m-5 mt-10 rounded-lg max-w-xl">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/weath.svg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10  bg-darkBlue rounded-b-2xl">
                <h2 className="justify-center my-2 text-white ">
                  Weather Project
                </h2>
                <p className="text-sm text-gray-300">
                  I developed a weather project, offering real-time forecasts,
                  enhancing user experience through accurate and accessible
                  weather information.
                </p>
                <div className="mt-2">
                  <a
                    href="https://fabulous-gnome-dc91ba.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:opacity-70 underline font-bold text-lg cursor-pointer"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:flex">
            <div className="shadow-2xl lg:m-5 m-8 rounded-lg max-w-xl">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/dir.svg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10  bg-darkBlue rounded-b-2xl">
                <h2 className="justify-center my-2 text-white ">
                  Pidgin Project
                </h2>
                <p className="text-sm text-gray-300">
                  I designed a local slang directory, celebrating linguistic
                  diversity and preserving community expressions for an
                  authentic cultural experience.
                </p>
                <div className="mt-2">
                  <a
                    href="https://velvety-sable-9ec5c6.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:opacity-70 underline font-bold text-lg"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-2xl lg:m-5 m-8 rounded-lg max-w-xl">
              <div className=" flex justify-center items-center ">
                <Image
                  src="/blog.svg"
                  alt="Note Image"
                  width={300}
                  height={200}
                  className="mt-10 "
                />
              </div>
              <div className="mt-10  bg-darkBlue rounded-b-2xl">
                <h2 className="justify-center my-2 text-white ">Blog Posts</h2>
                <p className="text-sm text-gray-300">
                  I specialize in technical writing, simplifying complex
                  concepts and making information accessible for clear and
                  effective communication in various fields.
                </p>
                <div className="mt-2">
                  <a
                    href="/"
                    class="text-white hover:opacity-70 underline font-bold text-lg"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-veryDarkBlue text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">Have a project in mind? Let's collaborate!</p>
          <a
            href="mailto:glorynwaekpe@gmail.com"
            className="text-blue-500 hover:text-blue-300 transition duration-300"
          >
            glorynwaekpe@gmail.com
          </a>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/glory-nwaekpe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition duration-300 mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Nwakaego-Ego"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition duration-300 mx-2"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/GloryNwaekpe"
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
