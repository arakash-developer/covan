const getSingleProduct = async (id) => {
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let blobs = await response.json();
  return blobs;
};

export default getSingleProduct;
