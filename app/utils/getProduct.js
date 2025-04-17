const getProduct = async (id) => {
    let getToken = "C7w%e6G_2Eidkq";
    const authHeader = "Basic " + btoa("user:" + getToken);
    const config = {
      method: "GET",
      headers: {
        Authorization: authHeader,
      },
    };
    const response = await fetch(
      `https://www.seoumi.com/api/v1/frontend/product/view/${id}`, 
      config
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 
    let blobs = await response.json();
    return blobs;
  };
  
  export default getProduct;
  