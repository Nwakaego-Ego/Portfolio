import "./project.css";

const projects = () => {
  const tasks = [
    {
      image: "/note_.svg",
      href: "https://luminous-travesseiro-93a1d7.netlify.app/",
      task: "Note App",
    },
    {
      image: "/todo.svg",
      href: "https://to-do-iota-nine.vercel.app/",
      task: "To do App",
    },
    {
      image: "/blog.svg",
      href: "https://ego.hashnode.dev/?source=top_nav_blog_home",
      task: "Blog Post",
    },
    {
      image: "/cart.svg",
      href: "https://shopping-cart-three-henna.vercel.app/",
      task: "Shopping App",
    },
  ];

  return (
    <div
      className="flex justify-center items-center h-screen  mb-20 p-10 lg:p-1 "
      id="project"
    >
      <div className="border p-10 rounded-lg shadow-lg ">
        <div className="grid grid-cols-2 gap-4">
          {tasks.map((task, index) => (
            <div key={index} className="card text-center text-gray-400 ">
              <img
                src={task.image}
                alt={`project ${index}`}
                className="image"
              />
              <a href={task.href} target="_blank">
                Visit Site
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
