"use client";
import Container from "@/app/component/Container";
import { Context } from "@/app/context/productContext";
import Bdcity from "@/app/lib/BdCity";
import { Prata } from "next/font/google";
import { useContext, useEffect, useState } from "react";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});
const page = () => {
  let [totalCount, totalsetCount] = useState(0);
  let [price, setPrice] = useState(0);
  let { products } = useContext(Context);
  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [companyName, setCompanyName] = useState();
  let [country, setCountry] = useState();
  let [city, setCity] = useState();
  let [streetAddress, setStreetAddress] = useState();
  let [apartment, setApartment] = useState();
  let [phone, setPhone] = useState();
  let [email, setEmail] = useState();
  let [orderNotes, setOrderNotes] = useState();
  let [Error, setError] = useState("Fill up the Form");
  console.log(Bdcity.length);

  useEffect(() => {
    let count = products.reduce((total, product) => total + product.count, 0);
    totalsetCount(count);
    let price = products.reduce((total, product) => total + product.price, 0);
    setPrice(price);
  }, [products]);

  let handlerCheckOut = () => {
    console.log("Checkout");
    if (!firstName) {
      setError("First Name is required");
    } else if (!country) {
      setError("Country is required");
    } else if (!city) {
      setError("City is required");
    } else if (!streetAddress) {
      setError("Street Address is required");
    } else if (!phone) {
      setError("Phone is required");
    } else if (!email) {
      setError("Email is required");
    } else {
      setError("Success");
    }
  };
  return (
    <section className="my-[110px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between gap-5 items-start">
          <form className="flex flex-col w-full gap-y-[30px]">
            <h2 className="text-[#080808] text-xl font-normal leading-[120%] mb-[30px] uppercase">
              Billing details
            </h2>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  First name
                </label>
                <span className="text-[#e42234] text-md font-normal inline-block leading-[175%] underline"></span>
              </div>
              <input
                type="text"
                name="first_name"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=" "
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Last name
                </label>
              </div>
              <input
                type="text"
                name="last_name"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=" "
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="item">
              <div className="">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Company name (optional)
                </label>
              </div>
              <input
                type="text"
                name="company_name"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=" "
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Country/Region
                </label>
                <span className="text-[#e42234] text-md font-normal inline-block leading-[175%] underline">
                  *
                </span>
              </div>
              <select
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-500 text-sm w-full appearance-none block cursor-pointer focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                defaultValue="bangladesh"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="bangladesh">Bangladesh</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Town / City 
                </label>
                <span className="text-[#e42234] text-md font-normal inline-block leading-[175%] underline">
                  *
                </span>
              </div>
              <select
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-500 text-sm w-full appearance-none block cursor-pointer focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                defaultValue="bangladesh"
                onChange={(e) => setCity(e.target.value)}
              >
                {Bdcity.map((city, index) => (
                  <option
                    key={index}
                    value="bangladesh"
                    className={`${Pratafont.className}`}
                  >
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Street address 
                </label>
                <span className="text-[#e42234] text-md font-normal inline-block leading-[175%] underline">
                  *
                </span>
              </div>
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=" "
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Apartment, suite, unit, etc. (optional)
                </label>
                <span className="text-[#e42234] text-md font-normal inline-block leading-[175%] underline"></span>
              </div>
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=" "
                onChange={(e) => setApartment(e.target.value)}
              />
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Phone 
                </label>
                <span className="text-[#e42234] text-md font-normal inline-block leading-[175%] underline">
                  *
                </span>
              </div>
              <input
                type="text"
                name="phone_number"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=" "
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Email Address
                </label>
                <span className="text-[#e42234] text-md font-normal inline-block leading-[175%] underline">
                  *
                </span>
              </div>
              <input
                type="text"
                name="phone_number"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=" "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="item">
              <div className="flex gap-[2px] items-center">
                <label className="text-md capitalize font-normal leading-[175%]">
                  Order notes (optional)
                </label>
              </div>
              <input
                type="text"
                name="phone_number"
                id="floating_email"
                className="bg-transparent border-[#ddd] border-0 border-b-2 text-gray-900 text-sm w-full appearance-none block focus:border-[#e7b053] focus:outline-none focus:ring-0 peer px-0 py-2.5"
                placeholder=""
                onChange={(e) => setOrderNotes(e.target.value)}
              />
            </div>
          </form>
          <div className="w-[600px]">
            <h2 className="text-[#080808] text-xl font-normal leading-[120%] mb-[30px] uppercase">
              Your order
            </h2>
            <div className="bg-[#f5f5f5] border border-transparent">
              <div className={`bg-[#fff] m-5 ${Pratafont.className}`}>
                <div className="grid grid-cols-2 border-b gap-[10px] pl-2 py-4">
                  <h3 className="text-[#080808] text-md capitalize font-bold leading-[200%]">
                    Product
                  </h3>
                  <h3 className="text-[#080808] text-md capitalize font-bold leading-[200%]">
                    SubTotal
                  </h3>
                </div>
                {products.length > 0 ? (
                  <>
                    {products.map((data) => (
                      <div key={data.id} className="w-full">
                        <div className="grid grid-cols-2 border-b gap-[10px] pl-2 py-4">
                          <h3 className="text-[#666] text-sm font-bold leading-[200%]">
                            {data.title.slice(0, 16)}
                            <span> X 1</span>
                          </h3>
                          <div className="">
                            <h3 className="text-[#080808] text-sm font-bold leading-[200%]">
                              $ {(data.price * data.count).toFixed(2)}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <></>
                )}
                <div className="grid grid-cols-2 border-b gap-[10px] pl-2 py-4">
                  <h3 className="text-[#080808] text-sm font-normal leading-[200%]">
                    Shipping: Pharmark
                  </h3>
                  <form className="">
                    <div className="flex cursor-pointer gap-1 items-center">
                      <input
                        id="radio1"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="bg-gray-100 border-gray-300 h-4 w-4 cursor-pointer focus:ring-2"
                      />
                      <label
                        htmlFor="radio1"
                        className="text-[#666]captialize text-sm font-normal leading-[200%]"
                      >
                        FreeShipping
                      </label>
                    </div>
                    <div className="flex cursor-pointer gap-1 items-center">
                      <input
                        id="radio2"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="bg-gray-100 border-gray-300 h-4 w-4 cursor-pointer focus:ring-2"
                      />
                      <label
                        htmlFor="radio2"
                        className="text-[#666]captialize text-sm font-normal leading-[200%]"
                      >
                        Flat rate
                      </label>
                    </div>
                    <p className="text-[#666] text-sm font-normal leading-[200%]">
                      Shipping to
                      <span className="text-[#080808] text-sm font-normal leading-[200%] ml-1">
                        Bangladesh
                      </span>
                    </p>
                  </form>
                </div>
                <div className="grid grid-cols-2 border-b gap-[10px] pl-2 py-4">
                  <h3 className="text-[#080808] text-sm font-normal leading-[200%]">
                    Shipping: Phavalin
                  </h3>
                  <form className="">
                    <div className="flex gap-1 items-center">
                      <input
                        id="radio3"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="bg-gray-100 border-gray-300 h-4 w-4 cursor-pointer focus:ring-2"
                      />
                      <label
                        htmlFor="radio3"
                        className="text-[#666]captialize text-sm font-normal leading-[200%]"
                      >
                        FreeShipping
                      </label>
                    </div>
                    <div className="flex gap-1 items-center">
                      <input
                        id="radio4"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="bg-gray-100 border-gray-300 h-4 w-4 cursor-pointer focus:ring-2"
                      />
                      <label
                        htmlFor="radio4"
                        className="text-[#666]captialize text-sm font-normal leading-[200%]"
                      >
                        Flat rate
                      </label>
                    </div>
                    <p className="text-[#666] text-sm font-normal leading-[200%]">
                      Shipping to
                      <span className="text-[#080808] text-sm font-normal leading-[200%] ml-1">
                        Bangladesh
                      </span>
                    </p>
                  </form>
                </div>

                <div className="grid grid-cols-2 border-b gap-[10px] pl-2 py-4">
                  <h3 className="text-[#080808] text-sm font-normal leading-[200%]">
                    Total
                  </h3>
                  <div className="">
                    <h3 className="text-[#e7b053] text-2xl font-normal leading-[200%]">
                      $ {(price * totalCount).toFixed(2)}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mx-5 my-8">
                <div className="flex cursor-pointer gap-2 items-center">
                  <input
                    id="cod"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className="bg-gray-100 border-gray-300 h-4 w-4 cursor-pointer focus:ring-2"
                  />
                  <label
                    htmlFor="cod"
                    className="text-[#666]captialize text-sm font-normal leading-[200%]"
                  >
                    Cash on delivery
                  </label>
                </div>
                <p
                  htmlFor="cod"
                  className="text-[#e7b053] captialize text-md font-normal leading-[200%]"
                >
                  {Error}
                </p>
                <div className="mt-10 cursor-pointer" onClick={handlerCheckOut}>
                  <h3
                    className={`bg-[#080808] text-[#fff] text-md text-center font-normal inline-block  px-[50px] py-[17px] uppercase hover:bg-[#e7b053] transition-all ease-in-out duration-[0.3s] ${Pratafont.className}`}
                  >
                    Place Order
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
