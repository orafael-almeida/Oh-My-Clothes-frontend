import {wixClientServer} from "@/lib/wixClientserver";
import {products} from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import {FaRegHeart, FaStar} from "react-icons/fa";
import {IoEyeOutline} from "react-icons/io5";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery = productQuery.ascending(sortBy);
    } else if (sortType === "desc") {
      productQuery = productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();
  return (
    <div className="mt-12 flex gap-y-6 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={`/${product.slug}`}
          className="w-[45%] flex flex-col xs:gap-1 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-[20vh] sm:h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt="Imagem do Produto"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
            <div className="p-1 m-1 rounded-full absolute top-0 right-0 h-8 w-8 bg-slate-200/30 z-20 flex items-center justify-center">
              <FaRegHeart
                className=" text-red-600/50 hover:scale-110"
                size={20}
              />
            </div>
          </div>

          <div className="flex-col">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-center">{product.name}</span>
              <IoEyeOutline
                className="hidden sm:block mr-2 text-gray-500"
                size={20}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex">
                {Array.from({length: 5}, (_, index) => (
                  <FaStar key={index} className={`text-yellow-500 text-xs `} />
                ))}
              </div>
              <div className="preco">
                <span className="text-xs">R$ </span><span className="text-base sm:text-2xl">{product.price?.price}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <Pagination
        currentPage={res.currentPage || 0}
        hasPrev={res.hasPrev()}
        hasNext={res.hasNext()}
      />
    </div>
  );
};

export default ProductList;
