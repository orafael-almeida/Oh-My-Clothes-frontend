"use client";

import {products} from "@wix/stores";
import {useState} from "react";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionsSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({...prev, [optionType]: choice}));
  };

  const isVariantInStock = (choices: {[key: string]: string}) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  console.log(variants);

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4 " key={option.name}>
          <h4 className="font-medium">Escolha a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionsSelect(option.name!, choice.description!);

              return option.name === "colors" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300  relative"
                  key={choice.description}
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-500 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-rosa text-rosa rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {/* COLOR */}
      {/* <h4 className="font-medium">Cor do produto</h4>
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-black">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-800"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-800">
              <div className="absolute w-10 h-[2px] bg-red-500 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </li>
          </ul> */}
      {/* OTHERS */}
      {/* <h4 className="font-medium">Tamanho</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-rosa text-rosa rounded-md py-1 px-4 text-sm cursor-pointer">
          P
        </li>
        <li className="ring-1 ring-rosa text-white bg-rosa rounded-md py-1 px-4 text-sm cursor-pointer">
          M
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          G
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
