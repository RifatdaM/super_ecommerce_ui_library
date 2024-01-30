import React from "react";
import Banner1 from "../Banner1/Banner1";
import Banner2 from "../Banner2/Banner2";

const AllBanner = () => {
  return (
    <div className="mb-6 ">
      {/* Banner 1 */}
      <h1 className="pb-10 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Banner 1
      </h1>
      <Banner1 />
      {/* Banner 2 */}
      <h1 className="pb-10 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Banner 2
      </h1>
      <Banner2 />
    </div>
  );
};

export default AllBanner;
