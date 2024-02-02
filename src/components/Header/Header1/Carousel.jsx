import { useEffect, useState } from "react";

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliderImages = [
    { img: "https://i.ibb.co/VxtF245/Fly-with-macweb-banner-1706763671.jpg" },
    {
      img: "https://i.ibb.co/NVv3S30/02-Infinix-Laptop-Main-Slide-1706763820.jpg",
    },
    {
      img: "https://i.ibb.co/PGqkSvf/ONLINE-ORDER-FREE-HOME-DELIVERY-Main-Slide1-1706763863.jpg",
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );

  // if you don't want to change the slider automatically, then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  return (
    <div className="flex flex-col items-center h-full col-span-8 gap-5 mx-auto overflow-hidden max-w-7xl lg:col-span-5 lg:flex-row lg:gap-10">
      <div className="relative overflow-hidden">
        {/* arrow */}
        <div className="absolute z-50 flex items-center justify-between w-full h-full px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex items-center justify-center w-6 h-6 bg-white rounded-full md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex items-center justify-center w-6 h-6 bg-white rounded-full md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* dots */}
        <div className="absolute z-50 flex items-center justify-center w-full gap-1 rounded-full bottom-4">
          {sliderImages.map((_, inx) => (
            <button
              key={inx}
              onClick={() => {
                setCurrentSlider(inx);
              }}
              className={`rounded-full duration-300 bg-white ${
                currentSlider === inx ? "w-10" : "w-2"
              } h-2`}
            ></button>
          ))}
        </div>
        {/* slider container */}
        <div
          className="relative flex duration-300 ease-linear transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <div key={inx} className="min-w-full duration-200">
              <img
                src={slide.img}
                className=" h-[250px] md:h-fit lg:h-[490px] w-full"
                alt={`Slider - ${inx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
