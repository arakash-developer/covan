const CheckOut = async (data) => {
  const getToken = "KzHk6G_YS!X3weTsj81";
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
      "https://api.seoumi.com/api/v1/backend/order/store",
      config
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

export default CheckOut;
