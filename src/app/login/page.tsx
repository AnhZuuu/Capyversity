"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import capyversity_rmbg from "../../../public/capyversity-removebg.png";
import Image from "next/image";
import "@/app/css/App.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Track whether we are showing register or login form
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure rendering only after the component has mounted on the client
  }, []);

  const validateRegister = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName) newErrors.fullName = "Bạn chưa nhập Họ và tên";
    if (!email) newErrors.email = "Bạn chưa nhập Tên đăng nhập";
    if (!password) newErrors.password = "Bạn chưa nhập Mật khẩu";
    else if (password.length < 6)
      newErrors.password = "Mật khẩu yêu cầu ít nhất 6 ký tự";
    if (!confirmPassword)
      newErrors.confirmPassword = "Bạn chưa Xác minh lại mật khẩu ";
    else if (confirmPassword != password)
      newErrors.confirmPassword = "Xác minh lại mật khẩu sai";
    if (!dob) newErrors.dob = "Bạn chưa nhập Ngày tháng năm sinh";
    if (!phoneNumber) newErrors.phoneNumber = "Bạn chưa nhập Số điện thoại";
    else if (!/^\d{10}$/.test(phoneNumber))
      newErrors.phoneNumber = "Số điện thoại phải có 10 chữ số";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLogin = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) newErrors.email = "Bạn chưa nhập Tên đăng nhập";
    if (!password) newErrors.password = "Bạn chưa nhập Mật khẩu";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateRegister()) return;

    try {
      const response = await axios.post(
        "https://671b3d972c842d92c37f0b37.mockapi.io/user",
        {
          email,
          password,
          fullName,
          dob,
          phoneNumber,
        }
      );
      if (response.status === 201) {
        alert("Đăng ký thành công");
        router.push("/login");
        setIsRegistering(false);
      } else {
        alert("Đăng ký không thành công.");
      }
    } catch (error: any) {
      console.error("Registration error", error);
      alert("Xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    }
  };

  const handleLogin = async () => {
    if (!validateLogin()) return;

    try {
      const response = await axios.post(
        "https://671b3d972c842d92c37f0b37.mockapi.io/user",
        { email, password }
      );
      if (response.status === 201) {
        alert("Đăng nhập thành công");
        window.location.href = "/schools";
        // router.push("/"); // Navigate to the home page after successful login
      } else {
        alert("Đăng nhập không thành công.");
      }
    } catch (error: any) {
      console.error("Login error", error);
      alert("Xảy ra lỗi khi đăng nhập. Vui lòng thử lại.");
    }
  };

  // Only render the form after the component has mounted
  if (!isClient) {
    return null; // Avoid rendering during SSR
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black flex items-center justify-center p-4">
      <div className="bg-[#383434] rounded-xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-300">
        {isRegistering ? (
          <>
            <div className="text-center">
              <Image
                src={capyversity_rmbg}
                alt="Capyversity Logo"
                className="w-40 h-40 mx-auto"
                width={160}
                height={160}
              />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-white mb-4">
              Tạo tài khoản
            </h2>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <Image
                src={capyversity_rmbg}
                alt="Capyversity Logo"
                className="w-40 h-40 mx-auto"
                width={160}
                height={160}
              />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-white mb-4">
              Đăng nhập
            </h2>
          </>
        )}
        {isRegistering ? (
          <>
            <label
              htmlFor="email"
              className="block text-md font-medium text-white p-3"
            >
              Tên đăng nhập
            </label>
            <input
              type="email"
              placeholder="Tên đăng nhập"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mb-2 pl-2">{errors.email}</p>
            )}

            <label
              htmlFor="password"
              className="block text-md font-medium text-white p-3"
            >
              Mật khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 mb-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
              placeholder="Mật khẩu "
              aria-label="Password"
              autoComplete="current-password"
              style={{ colorScheme: "dark" }}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mb-2 pl-2">
                {errors.password}
              </p>
            )}

            <label
              htmlFor="confirmPassword"
              className="block text-md font-medium text-white p-3"
            >
              Xác minh lại mật khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 mb-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
              placeholder="Xác minh mật khẩu"
              aria-label="Password"
              autoComplete="current-password"
              style={{ colorScheme: "dark" }}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mb-2 pl-2">
                {errors.confirmPassword}
              </p>
            )}

            <label
              htmlFor="fullName"
              className="block text-md font-medium text-white p-3"
            >
              Họ tên
            </label>
            <input
              type="text"
              placeholder="Họ và tên"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 mb-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mb-2 pl-2">
                {errors.fullName}
              </p>
            )}

            <label
              htmlFor="dob"
              className="block text-md font-medium text-white p-3"
            >
              Ngày tháng năm sinh
            </label>
            <input
              type="date"
              min="1950-01-01"
              max="2024-11-30"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 mb-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
              style={{ colorScheme: "dark" }}
            />
            {errors.dob && (
              <p className="text-sm text-red-500 mb-2 pl-2">{errors.dob}</p>
            )}

            <label
              htmlFor="phoneNumber"
              className="block text-md font-medium text-white p-3"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              placeholder="Số điện thoại"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500 mb-2 pl-2">
                {errors.phoneNumber}
              </p>
            )}

            <button
              onClick={handleRegister}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Đăng ký
            </button>
          </>
        ) : (
          <>
            <label
              htmlFor="email"
              className="block text-md font-medium text-white p-1"
            >
              Tên đăng nhập
            </label>
            <input
              type="email"
              placeholder="Tên đăng nhập"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <label
              htmlFor="password"
              className="block text-md font-medium text-white p-1"
            >
              Mật khẩu
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
              placeholder="Nhập mật khẩu"
              aria-label="Password"
              autoComplete="current-password"
              style={{ colorScheme: "dark" }}
            />
            {errors.password && (
              <p className="w-full  mb-4 text-red-500">{errors.password}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Đăng nhập
            </button>
          </>
        )}

        <p className="mt-4 text-gray-400">
          {isRegistering ? (
            <>
              Bạn đã có tài khoản?{" "}
              <a
                href="#"
                onClick={() => setIsRegistering(false)}
                className="text-blue-400 hover:underline"
              >
                Đăng nhập
              </a>
            </>
          ) : (
            <>
              Bạn chưa có tài khoản?{" "}
              <a
                href="#"
                onClick={() => setIsRegistering(true)}
                className="text-blue-400 hover:underline"
              >
                Đăng ký
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
