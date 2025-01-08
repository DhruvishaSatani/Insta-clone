import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import Profile from "./Components/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatPost from "./Components/CreatPost";
import { LoginContext } from "./Context/LoginContext";

const App = () => {
 const[userLogin , setUserLogin]= useState(false);
  return (
    <BrowserRouter>
      <div>
        <LoginContext.Provider value={{setUserLogin}}>
          <Navbar login={userLogin}/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/createpost" element={<CreatPost />} />
          </Routes>
          <ToastContainer theme="dark" position="top-center" />
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
