import Container from "@/app/component/Container";

const page = async ({ params }) => {
  let { cat } = await params;
  return (
    <>
      <Container>
        <div>page -{cat}</div>
      </Container>
    </>
  );
};

export default page;
