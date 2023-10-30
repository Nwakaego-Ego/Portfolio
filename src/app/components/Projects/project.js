import "./project.css";

const projects = () => {
  const tasks = [
    {
      image: "/note_.svg",
      href: "https://stunning-faloodeh-9a1a26.netlify.app/",
      task: "Note App",
    },
    {
      image: "/weath.svg",
      href: "https://stunning-faloodeh-9a1a26.netlify.app/",
      task: "Weather App",
    },
    {
      image: "/blog.svg",
      href: "https://stunning-faloodeh-9a1a26.netlify.app/",
      task: "Blog Post",
    },
    {
      image: "/note_.svg",
      href: "https://stunning-faloodeh-9a1a26.netlify.app/",
      task: "Note App",
    },
  ];

  return (
    <div
      className="flex justify-center items-center h-screen mt-20 mb-20"
      id="project"
    >
      <div className="border p-10 rounded-lg shadow-lg ">
        <div className="grid grid-cols-2 gap-4">
          {tasks.map((task, index) => (
            <div key={index} className="card text-center ">
              <img
                src={task.image}
                alt={`project ${index}`}
                className="image"
              />
              <a href={task.href}>
                <span>Visit Site</span>
              </a>
              <p className="text-center mt-2 font-semibold">{task.task}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
