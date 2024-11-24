import {wixClientServer} from "@/lib/wixClientserver";
import CategoryListClient from "./CategoryListClient";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  // Filtrando os dados no servidor
  const filteredCategories = cats.items.filter(
    (item) => item.name !== "Novos Produtos" && item.name !== "Destaque"
  );

  return <CategoryListClient categories={filteredCategories} />;
};

export default CategoryList;
