"use client";
import React, { useState } from "react";
import axios from "axios";
import "@/app/css/App.css";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import { useNavigate} from "react-router-dom";
import capyversity_rmbg from "../../../public/capyversity-removebg.png";
import Image from "next/image";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://koi-api.uydev.id.vn/api/v1/users/login",
        {
          email,
          password,
        }
      );

      if (response.data.data.status === false) {
        alert(response.data.data.message);
      } else {
        // const jwtToken = response.data.data.jwt;
        // alert("Login successful");
        // localStorage.setItem("jwtToken", jwtToken);
        route.push("/");
        // window.location.href = "http://localhost:3000/schools";
        window.location.href = "/schools";
        // window.location.reload();
        // window.location.href = "https://capyversity.vercel.app/";
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        console.error("Login error", error);
        alert("Error: Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-white">
      {" "}
      <div className="bg-[#383434] p-8 rounded-lg shadow-lg text-center">
        {" "}
        <div className="mb-6">
          {" "}
          <Image src={capyversity_rmbg} alt="Facebook logo" className="w-40 h-40 mx-auto" />
        </div>{" "}
        <h2 className="text-3xl font-extrabold mb-4">Welcome Back</h2>{" "}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />{" "}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />{" "}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {" "}
          Login{" "}
        </button>{" "}
        <p className="mt-4 text-gray-400">
          {" "}
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>{" "}
        </p>{" "}
      </div>
    </div>
  );
};

export default LoginPage;
