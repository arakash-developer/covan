const getAllProduct = async () => {
  let response = await fetch(
    "https://dummyjson.com/products/"
  );
  let blobs = await response.json();
  return blobs;
};

export default getAllProduct;
