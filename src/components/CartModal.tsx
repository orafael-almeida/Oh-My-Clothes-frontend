"use client";

import {useCartStore} from "@/hooks/useCartStore";
import Image from "next/image";
import {media as wixMedia} from "@wix/sdk";
import {useWixClient} from "@/hooks/useWixClient";

const CartModal = () => {
  // TEMPORARY
  // const cartItems = true;

  const wixClient = useWixClient();
  const {cart, isLoading, removeItem} = useCartStore();

  return (
    <div className="w-max absolute p-2 xxs:p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col xxs:gap-6 z-20 top-8 -right-[62px]">
      {!cart.lineItems ? (
        <div className="">
          <h2 className="text-xl">Carrinho de Compras</h2>
          <div className="flex items-center justify-center font-semibold">
            <span className="text-sm text-gray-400 text-center py-6">
              Carrinho vazio :(
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
              Ver carrinho
            </button>
            <button
              className="rounded-md px-2 w-max sm:py-3 sm:px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
              disabled={isLoading}
            >
              Comprar
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-xl">Carrinho de Compras</h2>
          {/* LIST */}
          <div className="flex flex-col gap-2 md:gap-8 ">
            {/* ITEM */}
            {cart.lineItems.map((item) => (
              <div className="flex flex-row gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex flex-col md:items-center md:justify-between md:gap-8 w-max">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-white rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        R$ {item.price?.amount}
                      </div>
                    </div>
                    {/* DESC */}
                  </div>
                  {/* BOTTON */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qtd. {item.quantity}</span>
                    <span
                      className="text-red-400"
                      style={{cursor: isLoading ? "not-allowed" : "pointer"}}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(wixClient, item._id!);
                      }}
                    >
                      Remover
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTON */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Total</span>
              <span className="">R$ {cart.subtotal.amount} </span>
            </div>
            <p className="hidden xs:flex text-gray-500 text-sm mt-2 mb-4">
              Valor da entrega calculada no final.
            </p>
            <div className="flex justify-between text-sm mt-3">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Ver carrinho
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
              >
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
