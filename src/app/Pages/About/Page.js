import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="skills relative lg:flex lg:justify-between  lg:mr-10  lg:px-40    ">
        <div className="">
          <div
            className="flex justify-center items-center relative 
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
    </>
  );
};

export default About;
