import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { toast} from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    // Toast functions
    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)
  
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  
  
  const postData = (e) => {

    if (!emailRegex.test(email)) {
      notifyA("Invalid email")
      return
    } else if (!passRegex.test(password)) {
      notifyA("Password must contain at least 8 characters, including at least 1 number and 1 includes both lower and uppercase letters and special characters for example #,?,!")
      return
    }
    
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password

      })
    }).then(res => res.json())
     .then (data => {
      if (data.error) {
        notifyA(data.error)
      } else {
        notifyB(data.message)
        navigate("/signin")
      }
      console.log(data);
     })
  };

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
            Sign up to see photos and videos from your friends
          </p>

          <div className="w-full">
            <input
              type="email"
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@gmail.com"
              name="email"
              className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              value={name}
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Full Name"
              name="name"
              className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none"
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              value={username}
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="user Name"
              name="username"
              className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none"
            />
          </div>

          <div className="w-full">
            <input
              type="password"
              value={password}
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              name="password"
              className="border border-gray-400 p-[5px] placeholder:text-gray-300  rounded-lg w-full outline-none"
            />
          </div>
          <p className="w-full text-[14px] m-[3px]  text-center">
            By signing up, you agree to out Terms, privacy policy and cookies
            policy.
          </p>

          <input
            type="submit"
            id="submit-btn"
            onClick={()=>{postData()}}
            value="Sign Up"
            className="bg-blue-500 p-[6px] placeholder:text-gray-300  rounded-lg w-full outline-none cursor-pointer  text-white font-semibold text-lg "
          />

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
