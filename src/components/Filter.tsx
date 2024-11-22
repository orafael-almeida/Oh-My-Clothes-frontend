"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";

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
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
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
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="Valor máximo"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}
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
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
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
