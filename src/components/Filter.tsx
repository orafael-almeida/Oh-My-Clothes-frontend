"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {BsSortDown} from "react-icons/bs";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const {name, value} = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex mt-6 sm:mt-12 sm:flex justify-between">
      <div className="flex gap-2 sm:gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="hidden xs:flex py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option disabled selected>
            Tipo
          </option>
          <option value="physical">Físico</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Valor mínimo"
          className="hidden sm:flex text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="Valor máximo"
          className="hidden sm:flex text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option disabled selected>
            Categoria
          </option>
          <option value="categoria-1">Camisetas</option>
          <option value="regatas">Regatas</option>
          <option value="sueters">Casacos</option>
          <option value="moletoms">Moletons</option>
        </select>
      </div>
      <div className="relative">
        <BsSortDown className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <select
          name="sort"
          id="sort"
          className="appearance-none py-2 pl-8 pr-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option disabled selected>
            Ordenar por
          </option>
          <option value="asc price">Menor preço</option>
          <option value="desc price">Maior preço</option>
          <option value="asc lastUpdated">Novidades</option>
          <option value="desc lastUpdated">Mais antigos</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
