const getFilterProduct = async (category, page = 1, limit = 12) => {
  
  if (!category) {
    let response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&page=${page}`
    );
    let blobs = await response.json();
    return blobs;
  } else {
    let response = await fetch(
      `https://dummyjson.com/products?category=${category}&limit=${limit}&page=${page}`
    );
    let blobs = await response.json();
    return blobs;
  }
};

export default getFilterProduct;
