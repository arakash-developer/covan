import { createContext, useContext, useState } from 'react';

// Create a Context for the product
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Create a custom hook to use the ProductContext
export const useProduct = () => {
  return useContext(ProductContext);
};

