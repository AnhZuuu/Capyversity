"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/app/css/App.css";
import { useRouter } from "next/navigation";
import capyversity_rmbg from "../../../public/capyversity-removebg.png";
import Image from "next/image";
import { DatePicker } from "@nextui-org/date-picker";
import { DateValue } from "@nextui-org/react";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isClient, setIsClient] = useState(false); // Track if we're on the client
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName) newErrors.fullName = "Bạn chưa nhập Họ và tên";
    if (!email) newErrors.email = "Bạn chưa nhập Tên đăng nhập";
    // else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Bạn chưa nhập Mật khẩu";
    else if (password.length < 6)
      newErrors.password = "Mật khẩu yêu cầu ít nhất 6 ký tự";
    if (!dob) newErrors.dob = "Bạn chưa nhập Ngày tháng năm sinh";
    if (!phoneNumber) newErrors.phoneNumber = "Bạn chưa nhập Số điện thoại";
    else if (!/^\d{10}$/.test(phoneNumber))
      newErrors.phoneNumber = "Số điện thoại phải có 10 chữ số";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    // Set isClient to true once the component has mounted
    setIsClient(true);
  }, []);

  const handleRegister = async () => {
    if (!validate()) return;
    // Convert dob to desired format
    const formattedDob = dob ? dob.toString().split("T")[0] : "";
    try {
      const response = await axios.post(
        "https://671b3d972c842d92c37f0b37.mockapi.io/user",
        {
          email,
          password,
          fullName,
          dob: formattedDob,
          phoneNumber,
        }
      );
      if (response.status === 201) {
        alert("Đăng ký thành công");
        router.push("/login");
      } else {
        alert("Đăng ký không thành công.");
      }
    } catch (error: any) {
      console.error("Registration error", error);
      alert("Xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    }
  };

  // Only render after the component is mounted to prevent hydration mismatch
  if (!isClient) {
    return null; // Render nothing during SSR
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
        <h2 className="text-3xl font-extrabold mb-4">Tạo tài khoản</h2>
        <input
          type="text"
          placeholder="Họ và tên"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        <input
          type="email"
          placeholder="Tên đăng nhập"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        {/* <input value={dob} onChange={(e) => setDob(e.target.value)}> */}

        <DatePicker
          value={dob ? { date: new Date(dob) } : null} // Adapted to fit expected DateValue type
          // value={dob ? new Date(dob).toISOString().split("T")[0] : null}
          // value={dob ? new DateValue(new Date(dob)) : null} // Create a DateValue from Date object
          onChange={(date: DateValue) => setDob(date.toString().split("T")[0])}
          placeholder="Ngày tháng năm sinh"
          dateFormat="dd/MM/yyyy"
          label="Ngày tháng năm sinh"
          className="max-w-[800px]"
        />
        {/* <DatePicker selected={dob} onChange={(date: Date) => setDob(date ? new Date(date).toISOString().split('T')[0] : null)} placeholderText="Ngày tháng năm sinh" dateFormat="yyyy-MM-dd" className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white" /> */}
        <br />
        {/* </input> */}

        {/* <input
          type="date"
          placeholder="Ngày tháng năm sinh"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        /> */}
        {errors.dob && <p className="text-red-500">{errors.dob}</p>}
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber}</p>
        )}
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Đăng ký
        </button>
        <p className="mt-4 text-gray-400">
          Bạn đã có tài khoản?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
    // <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-white">
    //   <div className="bg-[#383434] p-8 rounded-lg shadow-lg text-center">
    //     <div className="mb-6">
    //       <Image
    //         src={capyversity_rmbg}
    //         alt="Logo"
    //         className="w-40 h-40 mx-auto"
    //         width={160} // Add width and height for proper optimization
    //         height={160}
    //       />
    //     </div>
    //     <h2 className="text-3xl font-extrabold mb-4">Create Your Account</h2>
    //     <input
    //       type="text"
    //       placeholder="Full Name"
    //       value={fullName}
    //       onChange={(e) => setFullName(e.target.value)}
    //       className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
    //     />
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
    //     />
    //     <input
    //       type="date"
    //       placeholder="Date of Birth"
    //       value={dob}
    //       onChange={(e) => setDob(e.target.value)}
    //       className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Phone Number"
    //       value={phoneNumber}
    //       onChange={(e) => setPhoneNumber(e.target.value)}
    //       className="w-full p-3 mb-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-900 text-white"
    //     />

    //     <button
    //       onClick={handleRegister}
    //       className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    //     >
    //       Register
    //     </button>
    //     <p className="mt-4 text-gray-400">
    //       Already have an account?{" "}
    //       <a href="/login" className="text-blue-400 hover:underline">
    //         Login
    //       </a>
    //     </p>
    //   </div>
    // </div>
  );
};

export default RegisterPage;
