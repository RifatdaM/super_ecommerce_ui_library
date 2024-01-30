import React from "react";
import Banner1 from "../Banner1/Banner1";

const AllBanner = () => {
  return (
    <div>
      {/* Banner 1 */}
      <h1 className="pb-10 text-3xl font-bold text-transparent md:text-5xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Banner 1
      </h1>
      <Banner1 />
      {/* Banner 2 */}
      <h1 className="pb-10 text-3xl font-bold text-transparent md:text-5xl bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Banner 1
      </h1>
      <Banner1 />
    </div>
  );
};

export default AllBanner;
