"use client";

import {useCartStore} from "@/hooks/useCartStore";
import {useWixClient} from "@/hooks/useWixClient";
import {useState} from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  // // TEMPORARY
  // const inStock = 4;

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "inc" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const {addItem, isLoading} = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Quantidade</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="p-1 cursor-pointer text-xl"
              onClick={() => handleQuantity("dec")}
            >
              -
            </button>
            {quantity}
            <button
              className="p-1 cursor-pointer text-xl"
              onClick={() => handleQuantity("inc")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-sm"> Produto esgotado</div>
          ) : (
            <div className="text-sm">
              Últimas{" "}
              <span className="text-orange-500">{stockNumber} unidades.</span>
              <br /> Garanta a sua!
            </div>
          )}
        </div>
        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading}
          className="w-36 text-sm rounded-3xl ring-1 ring-rosa text-rosa py-2 px-4 hover:bg-rosa hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0
        "
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Add;
