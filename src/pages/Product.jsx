import { axiosInstance } from "../utils";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/products/${params.id}`); // <- "products" (ko'plik)
  return req.data;
};

function Product() {
  const data = useLoaderData();
  if (!data) return <div>Loading...</div>;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="card bg-base-100 w-96 shadow-sm">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p>{data.description}</p>
          <h3>Category: {data.category}</h3>
          <p className="mb-0.5">Price: {data.price}$</p>
          <p className="mb-0.5">Rating: {data.rating}⭐</p>
          <p className="mb-0.5">Qolgan: {data.stock}</p>
          <p className="mb-0.5">
            DiscountPercentage: {data.discountPercentage}
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
