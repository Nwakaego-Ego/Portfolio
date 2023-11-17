"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar/navbar";
import Projects from "../components/Projects/project";
import { FaSun, FaMoon } from "react-icons/fa";
import About from "../Pages/About/about";
import Contact from "../Pages/Contact/contact";
import ListDropDown from "../components/ListDropDown/listDropDown";
import { dropDownData } from "@/data";
import MiniSeries from "../components/MiniSeries/miniSeries";
import "./header.css";

const header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <main className={`App ${isDarkMode ? "dark" : "light"}`}>
      <div className="hero">
        <div onClick={toggleDarkMode} className=" lg:px-4 lg:py-2 fixed">
          {isDarkMode ? (
            <FaMoon className="h-6 w-6 text-white text-2xl cursor-pointer" />
          ) : (
            <FaSun className="h-6 w-6 text-black " />
          )}
        </div>

        <Navbar />
        <div className="lg:flex lg:justify-between text-center lg:px-20 lg:mt-20 ">
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
            <div className=" text-gray-400">
              I'm a junior front-end developer, technical writer, and an
              opensource enthusiast
            </div>
            <button className=" btn-hire w-40 h-12 relative mt-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-4">
              {" "}
              <a
                href="https://drive.google.com/file/d/1L7VtZxTMGgRT4xfhg8vjfmt7Eo0ff8oc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Hire me
              </a>
            </button>
            <button className=" btn-blog w-40 h-12 mt-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-4">
              {" "}
              <a
                href="https://ego.hashnode.dev/?source=top_nav_blog_home"
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
                className=" rounded-full w-60 h-60 lg:w-64 lg:h-64 border lg:ml-8 border-transparent absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2"
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <div className="flex flex-col items-center lg:flex-row justify-center mx-auto  lg:space-x-4   lg:ml-0">
        {dropDownData.map((item) => {
          return (
            <ListDropDown
              key={item.id}
              btnText={item.text}
              lists={item.lists}
            />
          );
        })}
      </div>
      <Projects />
      <MiniSeries />
      <Contact />
    </main>
  );
};

export default header;
