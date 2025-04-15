import React from "react";
import { Link } from "react-router-dom";
import { addToCart, incrementAmount } from "../app/feature/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const isAdded = cart.find((i) => i.id === product.id);

  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        ...product,
        amount: 1,
      })
    );
  };

  return (
    <div className="card  shadow-sm flex flex-col items-center justify-center pb-2.5">
      <Link to={`/product/${product.id}`}>
        <img
          className="bg-base-300 rounded-sm"
          src={product.thumbnail}
          alt=""
        />
        <h1 className="text-base mb-2">{product.title}</h1>
        <h3>Price: {product.price} $</h3>
        <h3>Stock: {product.stock}</h3>
        <h3>Rating: {product.rating}⭐</h3>
      </Link>

      {isAdded && (
        <>
          <button
            className="btn btn-neutral"
            onClick={(e) => {
              e.preventDefault();
              dispatch(incrementAmount(product.id));
            }}
          >
            +
          </button>
          <span>{isAdded.amount}</span>
          <button className="btn btn-neutral">-</button>
        </>
      )}

      {!isAdded && (
        <button className="btn btn-primary" onClick={handleBuy}>
          Buy
        </button>
      )}
    </div>
  );
}

export default Product;
