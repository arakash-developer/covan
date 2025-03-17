import Container from "@/app/component/Container";
import { Prata } from "next/font/google";
import { FaAngleRight } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});
const page = () => {
  return (
    <>
      {/* Shop */}
      <section className="flex justify-center items-center flex-col py-[120px] bg-shop bg-cover bg-no-repeat bg-center">
        <h2
          className={`font-normal text-3xl leading-[120%] uppercase text-center text-[#fff] ${Pratafont.className}`}
        >
          Cart
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-normal text-[0.81rem] leading-[176%] text-[#fff]">
            Home
          </p>
          <FaAngleRight className="font-normal text-[0.81rem] leading-[176%] text-[#fff]" />
          <p className="font-normal text-[0.81rem] leading-[179%] text-[#e7b053]">
            Cart
          </p>
        </div>
      </section>
      {/* Shop */}
      <Container className="mt-[110px] mb-[150px] flex md:flex-row flex-col justify-between items-start">
        <table className="min-w-[700px] border-2 border-[#f5f5f5]">
          <thead className="h-[50px] bg-[#f5f5f5] border-2 border-[#f5f5f5]">
            <tr className="text-left">
              <th>c</th>
              <th
                className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
              >
                Product
              </th>
              <th
                className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
              >
                Quantity
              </th>
              <th
                className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
              >
                price
              </th>
              <th
                className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
              >
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="border-2 border-[#f5f5f5] h-[132px]">
            <tr>
              <td>
                <IoMdCloseCircleOutline />
              </td>
              <td>
                <h3 className="font-normal text-[0.94rem] leading-5 text-[#080808]">
                  Cover FX
                </h3>
              </td>
              <td>c</td>
              <td>d</td>
              <td>e</td>
            </tr>
          </tbody>
        </table>
        <div>page</div>
      </Container>
    </>
  );
};

export default page;
