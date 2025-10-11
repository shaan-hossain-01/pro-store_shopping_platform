import ProductList from "@/components/shared/Product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Featured Products" />
    </>
  );
};

export default Homepage;
