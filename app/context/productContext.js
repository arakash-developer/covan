import { createContext, useState } from "react";

// Create a Context for the product
export const Context = createContext();

// Create a provider component
const productContext = ({ children }) => {
  let [productImage, setProductImage] = useState([]);
  let [products, setProduct] = useState([
    {
      id: 1,
      count: 4,
      title: "Default Essence Mascara Lash Princess",
      price: 9.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
  ]);

  let [wishlist, setWishlist] = useState([]);

  return (
    <Context.Provider
      value={{ productImage, setProductImage, setProduct, products, wishlist, setWishlist }}
    >
      {children}
    </Context.Provider>
  );
};

export default productContext;
