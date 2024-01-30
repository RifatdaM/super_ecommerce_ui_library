import React from "react";

const Card3 = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-sm overflow-hidden border rounded-sm group">
        <img
          src="https://i.ibb.co/PZP8spF/119700093-1395244364007569-4498288726281506922-n.jpg"
          alt="image"
          className="w-full h-full duration-300 scale-105 rounded-sm group-hover:scale-100"
        />
        {/* details */}
        <div className="px-4 ">
          <h1 className="py-4 text-xl font-bold text-gray-700 ">
            Apple Watch 9
          </h1>
          {/* price and button */}
          <div className="flex items-center justify-between pb-4">
            <h1 className="font-bold text-gray-900">BDT 30000</h1>
            {/* button */}
            <div className="flex items-center gap-6">
              <button className="p-3 bg-[#BD808F] rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <button className="p-3  bg-[#E6E7EB] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
