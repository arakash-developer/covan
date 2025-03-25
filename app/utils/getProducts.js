const getProducts = async () => {
  let getToken = "C7w%e6G_2Eidkq";
  const authHeader = "Basic " + btoa("user:" + getToken);
  const config = {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  };
  const response = await fetch(
    "https://bcovan.onrender.com/api/v1/frontend/product/all",
    config
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } 
  let blobs = await response.json();
  return blobs;
};

export default getProducts;
