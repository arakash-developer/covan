"use client";
import Product from "./context/product";

const StoreProvider = ({ children }) => {
  return (
    <>
      <Product>{children}</Product>
    </>
  );
};

export default StoreProvider;
