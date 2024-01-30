import React from "react";
import { NavLink } from "react-router-dom";

const ComponentsBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-8 space-x-6 md:pt-14 lg:pt-20 lg:gap-5 lg:space-x-10">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " px-6 py-2 text-sm md:text-xl text-white duration-300 rounded-md bg-sky-700 hover:scale-95 "
            : "px-6 py-2 text-sm md:text-xl text-white duration-300 rounded-md bg-green-600 hover:scale-95"
        }
        to={"/"}
      >
        Cards
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " px-6 py-2 text-sm md:text-xl text-white duration-300 rounded-md bg-sky-700 hover:scale-95 "
            : "px-6 py-2 text-sm md:text-xl text-white duration-300 rounded-md bg-green-600 hover:scale-95"
        }
        to={"/banner"}
      >
        Banner
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " px-6 py-2 text-sm md:text-xl text-white duration-300 rounded-md bg-sky-700 hover:scale-95 "
            : "px-6 py-2 text-sm md:text-xl text-white duration-300 rounded-md bg-green-600 hover:scale-95"
        }
        to={"/category"}
      >
        Category
      </NavLink>
    </div>
  );
};

export default ComponentsBar;
