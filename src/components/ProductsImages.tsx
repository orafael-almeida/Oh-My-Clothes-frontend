"use client";

import Image from "next/image";
import {useState} from "react";

const ProductsImages = ({items}: {items: any}) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[300px] sm:h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-start gap-4 cursor-pointer">
        {items.map((item: any, i: number) => (
          <div
            className="relative w-1/4 h-32 gap-4 mt-8"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsImages;
