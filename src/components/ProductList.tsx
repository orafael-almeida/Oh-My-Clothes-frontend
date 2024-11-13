import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/16004744/pexels-photo-16004744/free-photo-of-maca-camera-maquina-iphone.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$49</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button
          className="rounded-2xl ring-1 ring-rosa text-rosa py-2 px-4 text-xs hover:bg-rosa hover:text-white w-max
        "
        >
          Adicionar
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/16004744/pexels-photo-16004744/free-photo-of-maca-camera-maquina-iphone.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$49</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button
          className="rounded-2xl ring-1 ring-rosa text-rosa py-2 px-4 text-xs hover:bg-rosa hover:text-white w-max
        "
        >
          Adicionar
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/16004744/pexels-photo-16004744/free-photo-of-maca-camera-maquina-iphone.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$49</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button
          className="rounded-2xl ring-1 ring-rosa text-rosa py-2 px-4 text-xs hover:bg-rosa hover:text-white w-max
        "
        >
          Adicionar
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/16004744/pexels-photo-16004744/free-photo-of-maca-camera-maquina-iphone.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$49</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button
          className="rounded-2xl ring-1 ring-rosa text-rosa py-2 px-4 text-xs hover:bg-rosa hover:text-white w-max
        "
        >
          Adicionar
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
