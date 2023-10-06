"use client";
import { FaReact } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/navbar";

const header = () => {
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
        <Navbar />
        <div className="lg:flex  lg:justify-between text-center py-6 lg:px-20 lg:py-20 ">
          <div className="mt-16">
            <h1 className="text-4xl  py-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold lg:w-full mt-6 ">
              Hello, I'm
              <span className="">
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
                  speed={25} // Reduce the speed (adjust the value as needed)
                  // style={{ fontSize: "2em", display: "block" }} // Reduce font size and change display to block
                  repeat={Infinity} // Set repeat to 2 to loop twice on load
                  className=" block text-[43px]"
                />
              </span>
            </h1>
            <div className="text-white">
              I'm a junior front-end developer and writer, blending code
              and...........
            </div>
            {/* <h2 className="text-xl font-medium mb-5 text-gray-300 animate-pulse"></h2> */}
            <button className=" w-40  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-10">
              <a
                href="https://drive.google.com/file/d/1cl-bca6iy1bZs-bv3sjmefBjFBD7gjYN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Hire me
              </a>
            </button>
            <button className=" w-40  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-10 ">
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
          <div className="flex justify-center items-center h-screen">
            <div className="rounded-full   w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto text-center">
              <Image
                src="/shee.png"
                alt="Note Image"
                width={300}
                height={200}
                layout="fit"
                objectFit="cover"
                className="rounded-full w-60 h-60 lg:w-64 lg:h-64 border lg:ml-32  border-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="skills lg:flex lg:justify-between text-center py-6 lg:px-40 lg:py-10  font-burtons bg-veryDarkBlue h-[500px] In my journey through the world of open source, I have had the privilege of collaborating with diverse teams and contributing to real-world projects. This experience has not only sharpened my technical competencies but has also instilled in me a profound understanding of the significance of teamwork and community-driven development.

I am eager to explore these skills and passion to the  objectives of your organisation. I appreciate your consideration of my application and the opportunity to potentially contribute to your esteemed organization.

I look forward to your response.

Best regards "
      >
        <div className="">
          <div
            className=" relative bg-gradient-to-b
       mx-auto text-center  overflow-hidden"
          >
            <Image
              src="/bulb.jfif"
              alt="Note Image"
              width={400}
              height={300}
              layout="fit"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div>
          <p>About Me</p>
          <div className=" lg:py-6 lg:px-6  ">
            <p className="flex leading-6  text-gray-400 mt-5 lg:justify-end lg:w-80 lg:pb-6  ">
              I'm a junior front-end developer and writer, blending code and
              words to create compelling digital experiences. With a passion for
              storytelling, I bring creativity and functionality to the web.
            </p>
          </div>
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
