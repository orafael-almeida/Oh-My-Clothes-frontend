"use client";

import Image from "next/image";
import {useState} from "react";

const images = [
  {
    id: 1,
    url: "https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_v2/main_image/cfcbe31bb7edd5784c60544b6aede33a.webp",
  },
  {
    id: 2,
    url: "https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_art/final_image/a63299dace17d50924b52af1d9fbd224.webp",
  },
  {
    id: 3,
    url: "https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_art/final_image/4c72b88e474d9eb0df12d8090b3703ef.webp",
  },
  {
    id: 4,
    url: "https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_art/final_image/2858637b90e0686c0f968e74827d07a3.webp",
  },
];

const ProductsImgages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {images.map((img, i) => (
          <div
            className="relative w-1/4 h-32 gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
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

export default ProductsImgages;
