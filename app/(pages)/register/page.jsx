"use client";
import Container from "@/app/component/Container";
import { Prata } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const Register = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State to handle errors
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form data before submission
  const validateForm = () => {
    const newErrors = { username: "", password: "" };

    if (!formData.username) {
      newErrors.username = "Username or email address is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, log the form data
      console.log(formData);
    }
  };

  return (
    <Container className="pt-[130px] pb-[123px]">
      <h2 className="font-normal text-[1.56rem] leading-[120%] text-[#080808]">
        Register
      </h2>
      <form
        action=""
        className="mt-2 flex flex-col gap-y-4 max-w-[570px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-[#666] font-normal text-sm leading-[175%]"
          >
            Email address *
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="h-9 border border-[#ddd] placeholder:px-2 pl-4 pr-4 outline-none"
          />
          {errors.username && (
            <p className="text-red-500 text-xs">{errors.username}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-[#666] font-normal text-sm leading-[175%]"
          >
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="h-9 border border-[#ddd] placeholder:px-2 pl-4 pr-4 outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>

        <div className="flex gap-2">
          <input type="checkbox" name="remember" id="remember" />
          <p className="font-normal text-sm leading-[175%] text-[#666]">
            Remember Me
          </p>
        </div>

        <div>
          <button
            type="submit"
            className={`px-[30px] py-[11px] bg-[#e7b053] inline-block font-normal text-[0.81rem] leading-[146%] uppercase text-center text-[#fff] ${Pratafont.className} hover:bg-[#080808] leading-[20px]`}
          >
            Register
          </button>
        </div>
        <p className="font-normal text-sm leading-[175%] text-[#080808]">
          <Link href="/login" className="text-[#e7b053]">
            Login
          </Link>{" "}
          or Lost your password?
        </p>
      </form>
    </Container>
  );
};

export default Register;
