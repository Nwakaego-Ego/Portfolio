import { FaReact } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const header = () => {
  return (
    <main>
      <div className="bg-veryDarkBlue px-10 py-10 font-burtons">
        <nav className=" mb-12 flex justify-between">
          <p className="text-xl text-white font-semibold">Nwakaego</p>
          <ul className="flex items-center">
            <li>
              <FaMoon color="black" className="text-2xl cursor-pointer" />
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
        <div className="lg:flex lg:justify-between text-center py-6">
          <div>
            <h1 className="text-4xl py-3 text-gray-200 font-bold">
              Nwaekpe Ego
            </h1>
            <h2 className="text-xl font-medium mb-5 text-gray-300">
              Developer and designer
            </h2>

            <Image
              src="/engineer.svg"
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
            <p className="flex leading-6 text-gray-300 mt-5 lg:justify-end lg:w-80">
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get cracking, Freelancer
              providing services for programming and design content needs. Join
              me down below and lets get cracking
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 py-10 font-burtons">
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
    </main>
  );
};

export default header;
