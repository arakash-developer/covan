const getAllProduct = async () => {
  let response = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl"
  );
  let blobs = await response.json();
  return blobs;
};

export default getAllProduct;
