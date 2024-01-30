import React from "react";
import Category1 from "../Category1/Category1";
import Category2 from "../Category2/Category2";
import Category3 from "../Category3/Category3";

const AllCategory = () => {
  return (
    <div className="px-4 mx-auto md:px-8 max-w-7xl">
      {/* card 1 */}
      <h1 className="py-10 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Category 1
      </h1>
      <Category1 />
      {/* card 2 */}
      <h1 className="py-10 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Category 2
      </h1>
      <Category2 />
      {/* card 2 */}
      <h1 className="py-10 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Category 3
      </h1>
      <Category3 />
    </div>
  );
};

export default AllCategory;
