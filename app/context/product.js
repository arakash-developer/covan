import { createContext, useContext, useState } from "react";

// Create a Context for the product
export const ProductContext = createContext();

// Create a provider component
 const product = ({ children }) => {
  let [image, setImage] = useState(null);

  return (
    <ProductContext.Provider value={{ image, setImage }}>
      {children}
    </ProductContext.Provider>
  );
};

export default product;