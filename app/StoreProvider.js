"use client";
import Product from "./context/productContext";

const StoreProvider = ({ children }) => {
  return (
    <>
      <Product>{children}</Product>
    </>
  );
};

export default StoreProvider;
