"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      title: "Coleção de Verão!",
      description: "Até 50% off!",
      img: "/image-hero1.webp",
      url: "/list",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Coleção de Inverno!",
      description: "Até 70% off!",
      img: "/image-hero2.webp",
      url: "/list",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Coleção de Primavera!",
      description: "Até 80% off!",
      img: "/image-hero3.webp",
      url: "/list",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setEndX(e.changedTouches[0].clientX);

    if (startX - endX > 50) {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (endX - startX > 50) {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <div
      className="h-[calc(100vh-80px)] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{transform: `translateX(-${current * 100}vw)`}}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-2 lg:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/3 xl:w-1/2 lg:h-full flex flex-col items-center justify-center gap-3 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-2xl ring-1 ring-rosa text-rosa py-2 px-4 text-xs hover:bg-rosa hover:text-white w-max transition-colors">
                  Ver coleção
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-2/3 lg:w-4/5 lg:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover xl:object-fill"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
