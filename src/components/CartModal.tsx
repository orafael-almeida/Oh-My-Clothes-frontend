"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className=""> Carrinho vazio</div>
      ) : (
        <>
          <h2 className="text-xl"> Carrinho de Compras</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8 ">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Nome do Produto</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">R$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">disponível</div>
                </div>
                {/* BOTTON */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qtd.</span>
                  <span className="text-blue-500">Remover</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Nome do Produto</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">R$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">disponível</div>
                </div>
                {/* BOTTON */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qtd. 2</span>
                  <span className="text-blue-500">Remover</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTON */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Total</span>
              <span className="">R$ 49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Valor da entraga calculada no final.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Ver carrinho
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Comprar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
