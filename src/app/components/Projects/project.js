import "./project.css";

const projects = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-10 rounded-lg shadow-lg bg-white">
        <div className="grid grid-cols-2 gap-4">
          {/* {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="border p-6 rounded-md shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <img
                  src="/blog.svg"
                  alt={`Note Image ${index + 1}`}
                  className="w-[250px] h-[150px]"
                />
              </div>
            ))} */}

          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="card">
              <img
                src="/blog.svg"
                alt={`Note Image ${index}`}
                className="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
