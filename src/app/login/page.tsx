"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/app/css/App.css";
import { useRouter } from "next/navigation";
import capyversity_rmbg from "../../../public/capyversity-removebg.png";
import Image from "next/image";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering
  const route = useRouter();

  useEffect(() => {
    // This ensures that the code inside runs only after the component is hydrated
    setIsClient(true);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        // "https://koi-api.uydev.id.vn/api/v1/users/login",
        "https://671b3d972c842d92c37f0b37.mockapi.io/user",
        {
          params: {
            email,
            password,
          },
        }
      );
      const user = response.data.find(
        (user: {email: string; password: string}) =>
          user.email === email && user.password === password
        );
      if (user) {
        alert("Login succesfully!");
        // localStorage.setItem("jwtToken", "mock-jwt-token");
        // route.push("/schools");
        window.location.href = "/schools";
      } else {
        alert("Invalid email or password");
      }

      
      // if (response.data.data.status === false) {
      //   alert(response.data.data.message);
      // } else {
      //   route.push("/schools");
      //   window.location.href = "/schools"; // Can be removed if you're using next.js routing exclusively
      // }
    } catch (error: any) {
      // if (
      //   error.response &&
      //   error.response.data &&
      //   error.response.data.message
      // ) {
      //   alert(error.response.data.message);
      // } else {
        console.error("Login error", error);
        alert("Error: Something went wrong. Please try again.");
      // }
    }
  };

  // Render only on the client side after hydration
  if (!isClient) {
    return null; // or a loading spinner if you prefer
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="bg-[#383434] p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <Image
            src={capyversity_rmbg}
            alt="Capyversity Logo"
            className="w-40 h-40 mx-auto"
            width={160} // Add width and height for image optimization
            height={160}
          />
        </div>
        <h2 className="text-3xl font-extrabold mb-4">Đăng nhập</h2>
        <input
          type="email"
          placeholder="Tên đăng nhập"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Đăng nhập
        </button>
        <p className="mt-4 text-gray-400">
          Bạn chưa có tài khoản?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
