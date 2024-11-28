'use client'
import Link from 'next/link';
import styles from './capyversity.module.css';
import Image from 'next/image';
// import capyversity from '../../public/capyversity.png'
// import capyversity_rmbg from '../../public/capyversity-removebg.png';
import capyversity_rmbg from '../../public/capyversity-removebg.png';
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle, FaCrown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { FC, useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
const Capyversity: FC = () => {

  const router = useRouter();
  const handleLogout = () => {
    setUserInfo(null);
    localStorage.removeItem("userInfo");
    router.push("/");
    setShowPopup(!showPopup);
  };
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [userInfo, setUserInfo] = useState<any>(null);
  //option1
  // const userInfo = localStorage.getItem("userInfo")
  //   ? JSON.parse(localStorage.getItem("userInfo"))
  //   : null;


  //option2
  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
  // }, []);
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);


  //option3
  // const getUserInfo = () => {
  //   const storedUserInfo = localStorage.getItem("userInfo");
  //   return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  // };

  // const userInfo = getUserInfo();
  console.log("HEEEEEEEEEEEEE", userInfo);

  function reverseDOB(dateString: any) {
    // Split the date string into an array by the hyphen delimiter
    const [year, month, day] = dateString.split('-');

    // Return the rearranged date in "DD/MM/YYYY" format
    return `${day}-${month}-${year}`;
  }
  console.log('userinfo', userInfo);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            href='/'
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-transparent rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-white focus:bg-white dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
          >

          </Link>
          {/* <Link href="/">Search</Link> */}
        </li>
        <li>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={capyversity_rmbg} alt="Capyversity logo" width={100} height={100}
              style={{ textShadow: '2px 2px 5px black' }} />
            <span className='text-3xl text-white text-shadow-black text-md font-bold'>Capyversity</span>
          </div>

        </li>

        <li>
          {userInfo ?
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-black-900 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
              onClick={togglePopup}
            >
              {/* Đã đăng nhập */}
              {userInfo ? userInfo[0].fullName : <span></span>}
              {/* {userInfo.fullName} */}
            </button>
            :
            <Link
              href='/login'
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
            >
              Đăng nhập
            </Link>}
          {showPopup && (
            <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50'>
              {/* <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setIsOpen(false)}
              > */}
              <div
                id="profile-popup"
                role="dialog"
                aria-modal="true"
                className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Thông tin tài khoản</h2>
                  <div className="flex justify-end items-end">
                    <button
                      // onClick={togglePopup}
                      onClick={togglePopup}
                      className="px-2 py-1 bg-green-300 text-white rounded hover:bg-green-600"
                    >
                      ✖
                    </button>
                  </div>
                  {/* <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      aria-label="Close profile popup"
                    >
                      <IoMdClose size={24} />
                    </button> */}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img
                        src={"https://i.pinimg.com/736x/e4/50/9d/e4509dbf81623e547be4b300036a0a7b.jpg"}
                        alt={userInfo[0].fullName}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      {userInfo[0].isPremium && (
                        <span className="absolute bottom-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                          PREMIUM
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500 block">Họ tên</label>
                      <p className="text-gray-800 font-medium">{userInfo[0].fullName || "Not provided"}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500 block">Tên đăng nhập</label>
                      <p className="text-gray-800 font-medium">{userInfo[0].email || "Not provided"}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500 block">Sinh nhật</label>
                      <p className="text-gray-800 font-medium">
                        {userInfo[0].dob ? reverseDOB(userInfo[0].dob) : "Not provided"}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500 block">Trạng thái tài khoản</label>
                      <p className="text-gray-800 font-medium flex items-center space-x-2">
                        <span
                        // className={`inline-block w-2 h-2 rounded-full ${userInfo[0].isPremium ? "bg-green-500" : "bg-gray-500"
                        //   }`}
                        ><FaCrown className="mr-3" style={{ color: userInfo[0].isPremium ? "#10B981" : "#EF4444" }} /></span>
                        {/* <span {userInfo[0].isPremium ? { className="text-green-400" } : { className="text-red-400" }}>

                          {userInfo[0].isPremium ? "Premium Member" : "Standard Member"}
                        </span> */}
                        <span className={userInfo[0].isPremium ? "text-green-500" : "text-red-400"}>
                          {userInfo[0].isPremium ? "Premium Member" : "Standard Member"}
                        </span>

                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full mt-6 flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <FiLogOut size={20} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </li >
      </ul >
    </nav >

  );
};

export default Capyversity;



