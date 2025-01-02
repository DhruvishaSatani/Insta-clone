import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <ToastContainer theme="dark" position="top-center" />
      </div>
    </BrowserRouter>
  );
};

export default App;
