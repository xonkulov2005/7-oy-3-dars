import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function ProductList() {
  const {
    data: { product },
  } = useLoaderData();
  return (
    <div>
      {product?.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
