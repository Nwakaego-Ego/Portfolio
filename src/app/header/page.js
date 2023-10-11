"use client";
// import { FaReact } from "react-icons/fa";
// import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/navbar";
import Skills from "../components/skills";
import Education from "../components/education";
import Certifications from "../components/certifications";

const header = () => {
  return (
    <main>
      <div className="hero bg-veryDarkBlue font-burtons">
        <Navbar />
        <div className="lg:flex lg:justify-between text-center lg:px-20 lg:mt-20">
          <div className="relative lg:top">
            <h1 className="text-4xl mb-4  py-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold lg:w-full ">
              <span className="leading-6"> Hello, I'm</span>
              <span className="pt-16">
                <br />
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
                  speed={25}
                  repeat={Infinity}
                  className="block text-[43px]"
                />
              </span>
            </h1>
            <div className="text-white">
              I'm a junior front-end developer, technical writer, and an
              opensource enthusiast
            </div>
            <button className="w-40 relative mt-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-4">
              {" "}
              <a
                href="https://drive.google.com/file/d/1cl-bca6iy1bZs-bv3sjmefBjFBD7gjYN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Hire me
              </a>
            </button>
            <button className="w-40 mt-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-4">
              {" "}
              <a
                href="https://drive.google.com/file/d/1cl-bca6iy1bZs-bv3sjmefBjFBD7gjYN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Blog Post
              </a>
            </button>
          </div>
          <div className="flex justify-center items-center ">
            {" "}
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] mt-40  relative mx-auto text-center">
              <Image
                src="/shee.png"
                alt="Note Image"
                width={300}
                height={200}
                layout="fit"
                objectFit="cover"
                className="rounded-full w-60 h-60 lg:w-64 lg:h-64 border lg:ml-8 border-transparent absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="skills relative lg:flex lg:justify-between  lg:mr-10  lg:px-40   font-burtons bg-veryDarkBlue ">
        <div className="">
          <div
            className="flex justify-center items-center relative bg-gradient-to-b
       mx-auto text-center  overflow-hidden top-4"
          >
            <Image
              src="/bulb.jfif"
              alt="Note Image"
              width={400}
              height={300}
              layout="fit"
              objectFit="cover"
              className="mx-auto rounded mt-10"
            />
          </div>
        </div>
        <div>
          <p className="mt-10 lg:mt-1 text-gray-400 ml-5 text-center lg:text-left">
            About Me
          </p>
          <div className=" lg:py-6 lg:px-6  ">
            <p className="flex leading-6  text-gray-400 mt-5  lg:w-80 lg:pb-6  lg:text-center lg:items-center lg:justify-center">
              I'm a junior front-end developer and writer, blending code and
              words to create compelling digital experiences. With a passion for
              storytelling, I bring creativity and functionality to the web. My
              journey as a developer has been enriched by the open-source
              community, where I've had the privilege to contribute, learn, and
              grow. It's this collaborative spirit that fuels my enthusiasm and
              drives me to continually evolve and improve.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-center mx-auto  lg:space-x-4 bg-veryDarkBlue  lg:ml-0">
        <Skills /> <Education />
        <Certifications />
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
