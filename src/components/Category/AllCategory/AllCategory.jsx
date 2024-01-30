import React from "react";
import Category1 from "../Category1/Category1";

const AllCategory = () => {
  return (
    <div>
      {/* card 1 */}
      <h1 className="py-10 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Category 1
      </h1>
      <Category1 />
    </div>
  );
};

export default AllCategory;
