// const projects = () => {
//   return (
//     <>
//       <div className=" p-10 ">
//         <div className="flex">
//           <div className="border border-[#F48B10] p-10 bg-red-200 rounded-md shadow-md">
//             <img
//               src="/blog.svg"
//               alt="Note Image"
//               className="mt-10  w-[250px] h-[150px]   "
//             />
//           </div>
//           <img
//             src="/blog.svg"
//             alt="Note Image"
//             className="mt-10 w-[250px] h-[150px]"
//           />
//         </div>
//         <div className="flex">
//           <img
//             src="/blog.svg"
//             alt="Note Image"
//             className="mt-10  w-[250px] h-[150px] "
//           />
//           <img
//             src="/blog.svg"
//             alt="Note Image"
//             className="mt-10 w-[250px] h-[150px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };
// export default projects;

const projects = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-10 rounded-lg shadow-lg bg-white">
        <div className="grid grid-cols-2 gap-4">
          {Array(4)
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
