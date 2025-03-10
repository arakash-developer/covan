const page = async ({ params }) => {
    let { id } = await params;
    return <div>page {id}</div>;
  };
  
  export default page;
  