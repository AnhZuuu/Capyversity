'use client'
import Link from 'next/link';
import styles from './capyversity.module.css';
import Image from 'next/image';
// import capyversity from '../../public/capyversity.png'
// import capyversity_rmbg from '../../public/capyversity-removebg.png';
import capyversity_rmbg from '../../public/capyversity-removebg.png';

import { FC, useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
const Capyversity: FC = () => {

  const router = useRouter();
  const handleLogout = () => {
    setUserInfo(null);
    localStorage.removeItem("userInfo");
    

    router.push("/");
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
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            href='/'
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-white focus:bg-white dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
          >
            Trang chủ
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
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
              onClick={togglePopup}
            >
              {/* Đã đăng nhập */}
              {userInfo ? userInfo.email: <span></span>}
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
            <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
                <p>Username: {userInfo ? userInfo.email: <span></span>}</p>
                <p>Role: {userInfo ? userInfo.role: <span></span>}</p>
                <button
                  // onClick={togglePopup}
                  onClick={togglePopup}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-yellow-600"
                >
                  Close
                </button>
                <br />
                <button
                  // onClick={togglePopup}
                  onClick={handleLogout}
                  className="text-sm mx-9/10 mt-4 px-2 py-2 bg-red-500 text-white rounded hover:bg-red-900"
                >
                  Logout
                </button>
              </div>

            </div>
          )}
        </li>
      </ul>
    </nav >

  );
};

export default Capyversity;



