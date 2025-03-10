import { createContext, useContext, useState } from "react";

// Create a Context for the product
export const Context = createContext();

// Create a provider component
 const productContext = ({ children }) => {
  let [productImage, setProductImage] = useState([]);

  return (
    <Context.Provider value={{ productImage, setProductImage }}>
      {children}
    </Context.Provider>
  );
};

export default productContext;