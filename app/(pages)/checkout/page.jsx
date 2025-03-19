"use client";
import Container from "@/app/component/Container";

const page = () => {
  return (
    <section className="my-[110px]">
      <Container>
        <form className="w-full flex flex-col gap-y-[30px]">
          <div className="item">
            <div className="flex items-center gap-[2px]">
              <label
                htmlFor="floating_email"
                className="font-normal text-md leading-[175%] capitalize"
              >
                First name
              </label>
              <span className="text-[#e42234] font-normal text-md leading-[175%] inline-block underline">
                *
              </span>
            </div>
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ddd] appearance-none  focus:outline-none focus:ring-0 focus:border-[#e7b053] peer"
              placeholder=" "
              required
            />
          </div>
          <div className="item">
            <div className="flex items-center gap-[2px]">
              <label
                htmlFor="floating_email"
                className="font-normal text-md leading-[175%] capitalize"
              >
                Last name
              </label>
              <span className="text-[#e42234] font-normal text-md leading-[175%] inline-block underline">
                *
              </span>
            </div>
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ddd] appearance-none  focus:outline-none focus:ring-0 focus:border-[#e7b053] peer"
              placeholder=" "
              required
            />
          </div>
          <div className="item">
            <div className="">
              <label
                htmlFor="floating_email"
                className="font-normal text-md leading-[175%] capitalize"
              >
                Company name (optional)
              </label>
            </div>
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ddd] appearance-none  focus:outline-none focus:ring-0 focus:border-[#e7b053] peer"
              placeholder=" "
              required
            />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default page;
