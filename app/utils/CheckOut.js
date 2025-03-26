const CheckOut = async (data) => {
  const getToken = "RtEidkqe6G_2$vIp";
  const authHeader = "Basic " + btoa("user:" + getToken);

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      "https://bcovan.onrender.com/api/v1/backend/order/store",
      config
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Data:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default CheckOut;

