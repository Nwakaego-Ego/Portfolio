import { FaReact } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const header = () => {
  const [currentMode, setCurrentMode] = useState;
  return (
    <main>
      <div className="bg-veryDarkBlue px-10 py-10 font-burtons">
        <nav className=" mb-12 flex justify-between">
          <p className="text-xl text-white font-semibold">Nwakaego</p>
          <ul className="flex items-center">
            <li>
              <button>
                {" "}
                <FaMoon color="black" className="text-2xl cursor-pointer" />
              </button>
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
        <div className="lg:flex lg:justify-between text-center py-6 lg:px-20 lg:py-20 ">
          <div className="">
            <h1 className="text-4xl py-3 text-gray-200 font-bold lg:w-full ">
              Nwaekpe Nwakaego <span className="hidden md:block">Glory</span>
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
              <p className="flex leading-6 text-white lg:text-normalBlue mt-5 lg:justify-end lg:w-80 lg:pb-6   hover:text-white">
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
      <div className="px-10 py-10 font-burtons bg-veryLightBlue">
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
        <section className=" leading-6 text-gray-500 mt-8 text-center ">
          <p className="text-black font-bold">Services I Offer</p>
          Freelancer providing services for{" "}
          <span className="text-lightBlue">programming </span>and design content
          needs. Join me down below and lets get cracking, Freelancer providing
          services for programming and{" "}
          <span className="text-lightBlue">design</span> content needs. Join me
          down below and lets get cracking Join me down below and lets get
          cracking, Freelancer providing
          <p>
            Freelancer providing services for programming and design content
          </p>
        </section>
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
    </main>
  );
};

export default header;
