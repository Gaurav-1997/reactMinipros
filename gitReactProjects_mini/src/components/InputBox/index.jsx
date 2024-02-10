import React from "react";

const InputBox = (props) => {
  return (
    <div className="flex  relative border-solid border-2 border-sky-500 p-2 flex-wrap">
      <input
        type="text"
        value={props?.searchTerm}
        placeholder="Search here..."
        className="text-xl ml-4 focus:outline-none"
        onChange={(e) => props?.setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
