"use client";

import {useState} from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  const inStock = 4

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "inc" && quantity < inStock) {
      setQuantity((prev) => prev + 1);
    }
  };

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
          <div className="text-sm">
            Últimas <span className="text-orange-500">4 unidades.</span>
            <br /> Garanta a sua!
          </div>
        </div>
        <button
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
