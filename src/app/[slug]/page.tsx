import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductsImgages from "@/components/ProductsImgages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 realtive flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 top-20 h-max">
        <ProductsImgages />
      </div>
      {/* TEXTOS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Nome do Produto</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          autem obcaecati minus suscipit laudantium aliquid nihil sequi, dolores
          perspiciatis soluta quia est nobis porro tempore voluptatem corrupti
          repudiandae odit dolorem.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">R$ 97</h3>
          <h2 className="font-medium text-2xl">R$ 47</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Título</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit tenetur beatae repellendus. Saepe quia voluptatibus
            minus pariatur iste reprehenderit odit laboriosam dolore a, eligendi
            atque magnam similique voluptates vero neque.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Título</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit tenetur beatae repellendus. Saepe quia voluptatibus
            minus pariatur iste reprehenderit odit laboriosam dolore a, eligendi
            atque magnam similique voluptates vero neque.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Título</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit tenetur beatae repellendus. Saepe quia voluptatibus
            minus pariatur iste reprehenderit odit laboriosam dolore a, eligendi
            atque magnam similique voluptates vero neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
