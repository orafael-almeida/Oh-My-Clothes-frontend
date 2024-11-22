import {wixClientServer} from "@/lib/wixClientserver";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();
  console.log(cats.items);

  return (
    <div className="px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 text-sm">
      <div className="flex md:justify-between md:items-center md:gap-8 rounded-md bg-[#f6f6f6] py-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:pl-8">
        {cats.items
          .filter(
            (item) => item.name !== "Novos Produtos" && item.name !== "Destaque"
          )
          .map((item) => (
            <Link
              href={`/list?cat=${item.slug}`}
              className="group flex flex-col items-center flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 snap-center"
              key={item._id}
            >
              <div className="relative bg-slate-100 w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={item.media?.mainMedia?.image?.url || ""}
                  alt="categoria"
                  fill
                  sizes="160px"
                  className="object-contain p-6"
                />
              </div>
              <h1 className="mt-5 font-light text-xl tracking-wide text-center relative">
                {item.name === "All Products" ? "Todos os Produtos" : item.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
