import React from "react";

const Banner1 = () => {
  return (
    <div className="grid grid-cols-12 gap-3 pb-10 mx-auto lg:gap-6 max-w-7xl">
      {/* --------cols 1-------- */}
      <div className="relative col-span-12 lg:col-span-7 ">
        <img
          src="https://i.ibb.co/c3h4MJ9/element5-digital-ce-Wg-SMd8rv-Q-unsplash.jpg"
          alt=""
          className="h-full rounded-md "
        />
        <div className="absolute inset-0 bg-gray-900 rounded-md opacity-50"></div>
        {/* text */}
        <div className="absolute inset-x-6 inset-y-10 md:inset-x-10 md:inset-y-20 lg:inset-x-16 lg:inset-y-24">
          <p className="text-sm text-white md:text-xl ">30% off</p>
          <h1 className=" font-kalam py-2 md:py-6 text-2xl md:text-4xl lg:text-6xl text-white leading-8 md:leading-[55px] lg:leading-[70px]">
            Most Popular <br /> Makeup
          </h1>
          <button className="mt-6 text-sm text-white border-b-2 md:text-base lg:text-lg">
            Shop Now
          </button>
        </div>
      </div>
      {/* ----------cols 2--------- */}
      <div className="col-span-12 space-y-3 lg:col-span-5 lg:space-y-6">
        {/* image 1 */}
        <div className="relative ">
          <img
            src="https://i.ibb.co/zHW9bcy/karly-jones-W6s-LRR4-E9xs-unsplash.jpg"
            alt=""
            className="w-full h-auto rounded-md max-h-[228px] "
          />
          <div className="absolute inset-0 bg-gray-900 rounded-md opacity-50"></div>
          {/* text */}
          <div className="absolute top-6 right-4 text-end">
            <p className="text-white ">30% off</p>
            <h1 className="py-3 text-2xl text-white md:text-3xl md:py-4 font-kalam ">
              Most Popular <br /> skin care
            </h1>
            <button className="mt-4 text-white border-b-2 ">Shop Now</button>
          </div>
        </div>
        {/* image 2 */}
        <div className="relative ">
          <img
            src="https://i.ibb.co/2yhS9pW/hitesh-dewasi-9-YW-W7cj-Hkg-unsplash.jpg"
            alt=""
            className="w-full h-auto rounded-md md:max-h-[228px] object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 rounded-md opacity-50"></div>
          {/* text */}
          <div className="absolute top-6 right-4 text-end">
            <p className="text-white ">45% off</p>
            <h1 className="py-3 text-2xl text-white md:text-3xl md:py-4 font-kalam ">
              Most Popular <br /> Body oil
            </h1>
            <button className="mt-4 text-white border-b-2 ">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
