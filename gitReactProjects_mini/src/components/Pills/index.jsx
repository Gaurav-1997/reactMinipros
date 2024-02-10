import React from "react";

const Pills = (props) => {
  return (
    <div className="border-solid rounded-xl bg-blue-200 p-2 m-1 text-white cursor-pointer">
      {props?.state}
    </div>
  );
};

export default Pills;
