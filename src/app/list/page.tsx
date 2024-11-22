import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import {wixClientServer} from "@/lib/wixClientserver";
import Image from "next/image";
import {Suspense} from "react";

const ListPage = async ({searchParams}: {searchParams: any}) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px64 relative">
      {/* CAMPANHA */}
      <div className="hidden md:flex bg-pink-50 px-4 justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Receba até 50% de desconto
            <br /> em produtos selecionados
          </h1>
          <button className="rounded-3xl bg-rosa text-white w-max py-3 px-5 text-sm">
            Ver Promos
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="Woman Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}

      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
