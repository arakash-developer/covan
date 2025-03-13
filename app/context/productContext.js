import { createContext, useState } from "react";

// Create a Context for the product
export const Context = createContext();

// Create a provider component
const productContext = ({ children }) => {
  let [productImage, setProductImage] = useState([]);
  let [products, setProduct] = useState([]);

  return (
    <Context.Provider
      value={{ productImage, setProductImage, setProduct, products }}
    >
      {children}
    </Context.Provider>
  );
};

export default productContext;
