import React, { useState } from "react";
import signup from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassWord] = useState(false);
  const [showCofPassword, setShowCofPassWord] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmpassword: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassWord((preve) => !preve);
  };
  const handleShowCofPassword = () => {
    setShowCofPassWord((preve) => !preve);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadProfileImage = (e) => {
    console.log(e.target.files[0])
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmpassword } = data;
    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        alert("successfull");
        navigate("/login");
      } else {
        alert("password and confirm password not e qual");
      }
    } else {
      alert("Please Enter required fields");
    }
  };
  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Sigup</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img src={signup} className="w-full" alt="" />
         <label htmlFor="profileImage">
         <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer">
            <p className="text-sm p-1 text-white">Upload</p>
          </div>
          <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
         </label>
        </div>
        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <div className="flex mt-1 mb-2 px-2 py-1 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300  ">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <label htmlFor="confirmpassword">ConfirmPassword</label>
          <div className="flex mt-1 mb-2 px-2 py-1 rounded bg-slate-200   focus-within:outline focus-within:outline-blue-300  ">
            <input
              type={showCofPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.confirmpassword}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowCofPassword}>
              {showCofPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button
            type="submit"
            className="max-w-[150px] w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
