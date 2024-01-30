import React from "react";
import Header1 from "../Header1/Header1";

const AllHeader = () => {
  return (
    <div>
      {/* card 1 */}
      <h1 className="py-10 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Header 1
      </h1>
      <Header1 />
    </div>
  );
};

export default AllHeader;
