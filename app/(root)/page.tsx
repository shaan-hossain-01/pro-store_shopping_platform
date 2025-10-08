import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/Product/product-list";

const Homepage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList data={sampleData.products} title="Featured Products" limit={4} />
    </>
  );
};

export default Homepage;
