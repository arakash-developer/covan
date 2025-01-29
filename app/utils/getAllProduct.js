const getAllProduct = async () => {
  let response = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  );
  let blobs = await response.json();
  return blobs;
};

export default getAllProduct;
