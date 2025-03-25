import getProducts from "@/app/utils/getProducts";

const page = async () => {
  let res = await getProducts();
  console.log(res.success.data);

  return <div>page</div>;
};

export default page;
