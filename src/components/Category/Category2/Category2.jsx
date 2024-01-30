import React from "react";

const Category2 = () => {
  return (
    <div className="grid grid-cols-2 gap-2 pb-10 lg:grid-cols-4 md:gap-5 ">
      <div className="relative overflow-hidden group ">
        <img
          src="https://i.ibb.co/SXzqmqz/Screenshot-2023-12-23-at-1-20-53-PM.png"
          alt=""
          className="h-full duration-300 group-hover:scale-105 "
        />
        <div className="absolute inset-0 rounded-md opacity-50 bg-gradient-to-t from-black"></div>
        <div className="absolute bottom-4 left-2 md:left-7">
          <h1 className="text-sm text-gray-100 duration-300 md:text-3xl lg:text-5xl group-hover:scale-90 font-kalam">
            New Arrival
          </h1>
        </div>
      </div>
      {/* 2 */}
      <div className="space-y-5 ">
        <div>
          <img
            src="https://i.ibb.co/41bCsdC/Z3z-Fd-G73-Fh-FI3qem7-CMDRlo-Z8-TCV9m-GJx06-Jdf-Om.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/41bCsdC/Z3z-Fd-G73-Fh-FI3qem7-CMDRlo-Z8-TCV9m-GJx06-Jdf-Om.jpg"
            alt=""
          />
        </div>
      </div>
      {/* 3 */}
      <div className="space-y-5 ">
        <div>
          <img
            src="https://i.ibb.co/41bCsdC/Z3z-Fd-G73-Fh-FI3qem7-CMDRlo-Z8-TCV9m-GJx06-Jdf-Om.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/41bCsdC/Z3z-Fd-G73-Fh-FI3qem7-CMDRlo-Z8-TCV9m-GJx06-Jdf-Om.jpg"
            alt=""
          />
        </div>
      </div>
      {/* 4 */}
      <div className="space-y-5 ">
        <div>
          <img
            src="https://i.ibb.co/41bCsdC/Z3z-Fd-G73-Fh-FI3qem7-CMDRlo-Z8-TCV9m-GJx06-Jdf-Om.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/41bCsdC/Z3z-Fd-G73-Fh-FI3qem7-CMDRlo-Z8-TCV9m-GJx06-Jdf-Om.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category2;
