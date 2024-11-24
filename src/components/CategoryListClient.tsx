"use client";

import Image from "next/image";
import Link from "next/link";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {useRef} from "react";

const CategoryListClient = ({categories}: {categories: any[]}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
    }
  };

  return (
    <div className="relative lg:px-16 xl:px-32 2xl:px-64 text-sm">
      {/* Botão para voltar */}
      <button
        className="lg:hidden absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        onClick={() => scrollContainer("left")}
      >
        <AiOutlineLeft size={24} />
      </button>

      <div
        ref={containerRef}
        className="relative flex lg:px-8 sm:px-0  rounded-md bg-[#f6f6f6] py-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:pl-8"
      >
        {categories.map((item) => (
          <div
            className=" group flex flex-col items-center flex-shrink-0 w-full xm:w-1/2 sm:w-1/3 lg:w-1/5 snap-center"
            key={item._id}
          >
            <Link
              className="relative bg-slate-100 ring-1 ring-rosa w-24 h-24 rounded-full overflow-hidden flex items-center justify-center
            "
              href={`/list?cat=${item.slug}`}
            >
              <Image
                src={item.media?.mainMedia?.image?.url || ""}
                alt="categoria"
                fill
                sizes="80"
                className="object-contain p-6"
              />
            </Link>
            <h1 className="mt-5 font-light text-xl tracking-wide text-nowrap text-center relative">
              {item.name === "All Products" ? "Todos os Produtos" : item.name}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </h1>
          </div>
        ))}
      </div>

      {/* Botão para avançar */}
      <button
        className="lg:hidden absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        onClick={() => scrollContainer("right")}
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
};

export default CategoryListClient;
