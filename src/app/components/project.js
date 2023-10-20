const projects = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-10">
        <div className="flex">
          <div className="border border-[#F48B10] p-10 bg-red-200 rounded-md shadow-md">
            <img
              src="/blog.svg"
              alt="Note Image"
              className="mt-10  w-[250px] h-[150px]   "
            />
          </div>
          <img
            src="/blog.svg"
            alt="Note Image"
            className="mt-10 w-[250px] h-[150px]"
          />
        </div>
        <div className="flex">
          <img
            src="/blog.svg"
            alt="Note Image"
            className="mt-10  w-[250px] h-[150px] "
          />
          <img
            src="/blog.svg"
            alt="Note Image"
            className="mt-10 w-[250px] h-[150px]"
          />
        </div>
      </div>
    </>
  );
};
export default projects;
