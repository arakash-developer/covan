const getSingleProduct = async (page = 1, limit = 12, category) => {
  if (category) {
    let response = await fetch(
      `https://dummyjson.com/products?category=${category}&limit=${limit}&page=${page}`
    );
    let blobs = await response.json();
    return blobs;
  } else {
    let response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&page=${page}`
    );
    let blobs = await response.json();
    return blobs;
  }
};

export default getSingleProduct;
