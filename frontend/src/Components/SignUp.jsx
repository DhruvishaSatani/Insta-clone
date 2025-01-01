import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const SignUp = () => {
  const featchData = async () => { 

    const  response = await fetch("http://localhost:5000/" );

    const data= await response.json();
    console.log(data);
    
  };

  useEffect(() => {
    featchData();
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat w-full flex justify-center items-center flex-1 h-svh fixed "
      style={{
        backgroundImage:
          "url(https://lh5.googleusercontent.com/proxy/70IQor00Qaw4GaR5wj0DQw8YGbUAhlMxbXS2UxY3I8WEFBtm7vVwfTo8fw70PrOyKybV83XDlzLnBcUV8XMxI4TM4-11WVEztK-eRnEyxf29LHfpWD5CXWDX26qVrUPk0tMkWe1cnMmCInTi_A)",
      }}
    >
      <div className="container mx-auto px-4 flex justify-center items-center h-full">
        <div className=" flex flex-col justify-center items-center   backdrop-blur-xl bg-white/30  shadow-2xl px-[30px] py-[50px] w-96 rounded-xl   space-y-4">
          <img
            src="https://github.com/Abhisek730/Instagram-mern-stack/blob/main/frontend/src/img/logo.png?raw=true"
            alt=""
            className="w-52"
          />
          <p className="w-full text-center">
            Sign up to see photos and videos  from your friends
          </p>

          <div className="w-full">
            <input type="email" placeholder="email@gmail.com" name="email" className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none" />
          </div>
          <div className="w-full">   
            <input type="text" placeholder="Full Name" name="name" className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none" />
          </div>

          <div className="w-full">
            <input type="text" placeholder="user Name" name="username" className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none" />
          </div>

          <div className="w-full">
            <input type="password" placeholder="Password" name="password" className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none" />
          </div>
          <p
            className="w-full text-[14px] m-[3px]  text-center"
            
          >
            By signing up, you agree to out Terms,  privacy policy and
            cookies policy.
          </p>

          <input type="submit" id="submit-btn" value="Sign Up" className="bg-blue-500 p-[6px] placeholder:text-gray-300  rounded-lg w-full outline-none cursor-pointer  text-white font-semibold text-lg "  />

          <hr className="w-full border border-gray-300" />
          
          <div className="mt-3">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
