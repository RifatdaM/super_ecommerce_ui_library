import React, { useEffect, useRef, useState } from "react";

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="px-8 py-5 mx-auto text-white bg-black max-w-[1920px] relative">
      {/* first col */}
      <div className="justify-center hidden gap-5 text-center lg:flex">
        {/* number div */}
        <div className="flex items-center justify-center gap-2 duration-300 cursor-pointer hover:text-lime-500 ">
          <div className="p-1 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
          <h1>+880123456789</h1>
        </div>
        {/* mail div */}
        <div className="flex items-center justify-center gap-2 duration-300 cursor-pointer hover:text-lime-500">
          <div className="p-1 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h1>info@mail.com</h1>
        </div>
      </div>
      {/* second column -> logo, search bar, icons */}
      <div className="grid grid-cols-3 gap-20 py-5">
        <div>
          <img
            src="https://i.ibb.co/VpwcW0R/Official-Logo-of-Ryans-Computers-Limited.png"
            alt=""
            className=" w-28"
          />
        </div>
        <div className="flex items-center justify-center ">
          <input
            placeholder="Enter Your Keyword"
            type="text"
            className="w-full p-2 rounded-l-md"
          />
          <button className="px-8 py-2 text-white bg-lime-500 rounded-r-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        {/* 3rd row */}
        <div className="flex items-center justify-between ">
          <div className="hidden  lg:block">
            <h1 className="px-4 py-2 text-xl rounded-md font-bold text-yellow-500 before:block before:absolute hover:before:bg-lime-500 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-top-2 before:-left-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white \-transparent border-2 overflow-hidden border-lime-500 duration-500 cursor-pointer ">
              PC Builder
            </h1>
          </div>
          <div className="flex gap-4">
            {/* cart */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 duration-300 cursor-pointer hover:text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {/* love */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 duration-300 cursor-pointer hover:text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            {/* arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 duration-300 cursor-pointer hover:text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>

            {/* profile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 duration-300 cursor-pointer hover:text-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Third column - all navigate item */}
      <div>
        <ul className="flex items-center justify-between text-lg font-semibold text-white">
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </li>
          <div ref={dropdownRef}>
            <li
              onMouseEnter={handleMouseEnter}
              onClick={() => setIsOpen((prev) => !prev)}
              className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105"
            >
              Desktop
            </li>
            {isOpen && (
              <ul className="absolute left-0 grid w-screen grid-cols-6 gap-5 p-8 top-[186px] bg-lime-500">
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 duration-300 w-fit">
                  Asus
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Apple
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Acer
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Lenevo
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  MSI
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Huawei
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Xiaomi
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Realme
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Walton
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Dell
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Gigabyte
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  HP
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Microsoft
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  LG
                </li>
                <li className="px-5 py-1.5 rounded-md cursor-pointer hover:bg-gray-100/30 w-fit duration-300">
                  Monster
                </li>
              </ul>
            )}
          </div>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Monitor
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Gaming
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Tablet
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Printer
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Camera
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Network
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Security
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Speaker
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Software
          </li>
          <li className="duration-300 cursor-pointer hover:text-lime-500 hover:scale-105">
            Store
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header1;
