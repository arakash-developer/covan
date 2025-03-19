"use client";
import Container from "@/app/component/Container";

const page = () => {
  return (
    <section className="my-[110px]">
      <Container>
        <form className="w-full">
          <label
            htmlFor="floating_email"
            className="font-normal text-md leading-[175%]"
          >
            Email address
          </label>
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#e7b053] peer"
            placeholder=" "
            required
          />
        </form>
      </Container>
    </section>
  );
};

export default page;
