import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function ProductList() {
  const { data } = useLoaderData();
  const products = data?.products || [];

  return (
    <div className="grid grid-cols-1 gap-4 p-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
