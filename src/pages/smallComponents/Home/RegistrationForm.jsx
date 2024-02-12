import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import InputError from "./InputError";

const RegistrationForm = () => {
  const navigate = useNavigate();
  // implement show/hide password functionality
  const [isHide, setIsHide] = useState(true);
  const [isConfirmPasswordHide, setIsConfirmPasswordHide] = useState(true);
  const handlePasswordEyeButton = () => {
    setIsHide(!isHide);
  };
  const handleConfirmPasswordEyeButton = () => {
    setIsConfirmPasswordHide(!isConfirmPasswordHide);
  };
  // input validation using zod
  const validation = z
    .object({
      username: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
      email: z.string().email(),
      password: z.string().min(6),
      cPassword: z.string().min(6),
      terms: z.boolean().refine((value) => value === true, {
        message: "Terms must be accepted!",
        path: ["terms"],
      }),
    })
    .refine((data) => data.password === data.cPassword, {
      message: "Password did not match !",
      path: ["cPassword"],
    });
  // use react hook form for getting input value from registration form
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validation) });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-3 text-gray-400 p-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>
      </div>
      {errors.username && (
        <InputError text="Username is required! Only contains letters, numbers, and underscore(_). Starts with letters or _" />
      )}
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-3 text-gray-400 p-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
      </div>
      {errors.email && <InputError text="Email is required !" />}
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="password"
          type={isHide ? "password" : "text"}
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <div className="absolute left-0 inset-y-0 flex items-center">
          {isHide ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 .1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          )}
        </div>
        <div className="absolute right-0 inset-y-0 flex items-center">
          {isHide ? (
            <AiFillEyeInvisible
              onClick={handlePasswordEyeButton}
              className="text-[#9CA3AF] mr-3 cursor-pointer"
              size={22}
            />
          ) : (
            <AiFillEye
              onClick={handlePasswordEyeButton}
              className="text-[#9CA3AF] mr-3 cursor-pointer"
              size={22}
            />
          )}
        </div>
      </div>
      {errors.password && (
        <InputError text="Password is required! Length must be at least 6 characters." />
      )}
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="cPassword"
          type={isConfirmPasswordHide ? "password" : "text"}
          placeholder="Confirm Password"
          {...register("cPassword", { required: true })}
        />
        <div className="absolute left-0 inset-y-0 flex items-center">
          {isConfirmPasswordHide ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 .1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          )}
        </div>
        <div className="absolute right-0 inset-y-0 flex items-center">
          {isConfirmPasswordHide ? (
            <AiFillEyeInvisible
              onClick={handleConfirmPasswordEyeButton}
              className="text-[#9CA3AF] mr-3 cursor-pointer"
              size={22}
            />
          ) : (
            <AiFillEye
              onClick={handleConfirmPasswordEyeButton}
              className="text-[#9CA3AF] mr-3 cursor-pointer"
              size={22}
            />
          )}
        </div>
      </div>
      {errors.cPassword && <InputError text="Password did not match !" />}
      <div className="mt-4 flex items-center justify-between text-gray-500">
        <div>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            {...register("terms", { required: true })}
            className="mr-2"
          />
          <label className="text-sm" htmlFor="remember">
            I agree with the{" "}
            <a
              href="/"
              target="_blank"
              className="text-indigo-400 hover:text-indigo-500 font-semibold hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>
        <div>
          Already have an Account?{" "}
          <span
            onClick={() => navigate("/auth/login")}
            className="text-indigo-400 hover:text-indigo-500 font-semibold hover:underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
      {errors.terms && (
        <InputError text="Please agree with out terms and conditions !" />
      )}
      <div className="flex items-center justify-center mt-8">
        <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
          Create Account
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
