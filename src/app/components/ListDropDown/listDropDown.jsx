import React, { useState } from "react";

const listDropDown = ({ btnText, lists }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
  };

  return (
    <>
      <div className="w-52 h-32 ">
        <button
          onClick={toggleDropDown}
          className="w-40 h-12 block lg:inline-block bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg mb-10"
        >
          {btnText}
        </button>
        {dropDownVisible && (
          <>
            {lists.map((list) => {
              return <p className="text-white">{list} </p>;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default listDropDown;
