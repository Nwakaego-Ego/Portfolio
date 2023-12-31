const Contact = () => {
  return (
    <>
      <footer className=" text-white py-8" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Get in Touch
          </h2>
          <p className="mb-6 text-blue-500">
            Have a project in mind? Let's collaborate!
          </p>
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
          <p className="text-blue-500 mt-4">
            <a href="/" target="_blank">
              Back to Home Page
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
