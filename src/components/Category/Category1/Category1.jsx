import React from "react";

const Category1 = () => {
  return (
    <div className="flex flex-wrap mx-auto overflow-x-scroll md:flex-auto gap-7 max-w-7xl">
      {/* 1 */}
      <div className="flex flex-col items-center justify-center object-cover gap-3 overflow-hidden group">
        <div className="overflow-hidden border-2 rounded-full ">
          <img
            src="https://i.ibb.co/t8nRd9g/Pixel-Watch-2-Champagne-Gold-2809.jpg"
            alt=""
            className="object-cover w-full transition duration-500 cursor-pointer max-w-14 md:max-w-20 lg:max-w-36 group-hover:scale-110"
          />
        </div>
        <h1 className="hidden md:block">Watch</h1>
      </div>
      {/* 2 */}
      <div className="flex flex-col items-center justify-center object-cover gap-3 overflow-hidden group">
        <div className="overflow-hidden border-2 rounded-full ">
          <img
            src="https://i.ibb.co/XVPd6XG/Pixel-7a-Charcoal-7252.jpg"
            alt=""
            className="object-cover w-full transition duration-500 cursor-pointer max-w-14 md:max-w-20 lg:max-w-36 group-hover:scale-110"
          />
        </div>
        <h1 className="hidden md:block">Phone</h1>
      </div>
      {/* 3 */}
      <div className="flex flex-col items-center justify-center object-cover gap-3 overflow-hidden group">
        <div className="overflow-hidden border-2 rounded-full ">
          <img
            src="https://i.ibb.co/1XzhVY5/2543-64161.jpg"
            alt=""
            className="object-cover w-full transition duration-500 cursor-pointer max-w-14 md:max-w-20 lg:max-w-36 group-hover:scale-110"
          />
        </div>
        <h1 className="hidden md:block">Laptop</h1>
      </div>
      {/* 4 */}
      <div className="flex flex-col items-center justify-center object-cover gap-3 overflow-hidden group">
        <div className="overflow-hidden border-2 rounded-full ">
          <img
            src="https://i.ibb.co/v3rmfX2/Pixel-Tablet-2-4031.jpg"
            alt=""
            className="object-cover w-full transition duration-500 cursor-pointer max-w-14 md:max-w-20 lg:max-w-36 group-hover:scale-110"
          />
        </div>
        <h1 className="hidden md:block">Tablet</h1>
      </div>
      {/* 5 */}
      <div className="flex flex-col items-center justify-center object-cover gap-3 overflow-hidden group">
        <div className="overflow-hidden border-2 rounded-full ">
          <img
            src="https://i.ibb.co/JQ2shNv/1973-91000.jpg"
            alt=""
            className="object-cover w-full transition duration-500 cursor-pointer max-w-14 md:max-w-20 lg:max-w-36 group-hover:scale-110"
          />
        </div>
        <h1 className="hidden md:block">Tablet</h1>
      </div>
      {/* 6 */}
      <div className="flex flex-col items-center justify-center object-cover gap-3 overflow-hidden group">
        <div className="overflow-hidden border-2 rounded-full ">
          <img
            src="https://i.ibb.co/Fwk36Ms/1848-85648.jpg"
            alt=""
            className="object-cover w-full transition duration-500 cursor-pointer max-w-14 md:max-w-20 lg:max-w-36 group-hover:scale-110"
          />
        </div>
        <h1 className="hidden md:block">Earphone</h1>
      </div>
      {/* 7 */}
      <div className="flex flex-col items-center justify-center object-cover gap-3 overflow-hidden group">
        <div className="overflow-hidden border-2 rounded-full ">
          <img
            src="https://i.ibb.co/Mk38w5P/1969-24552.jpg"
            alt=""
            className="object-cover w-full transition duration-500 cursor-pointer max-w-14 md:max-w-20 lg:max-w-36 group-hover:scale-110"
          />
        </div>
        <h1 className="hidden md:block">Earbuds</h1>
      </div>
    </div>
  );
};

export default Category1;
