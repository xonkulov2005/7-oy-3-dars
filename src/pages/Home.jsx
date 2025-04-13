import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async () => {
  const req = await axiosInstance("/product");
  return req;
};
function Home() {
  const {
    data: { products },
  } = useLoaderData();
  return <div>Home</div>;
}

export default Home;
