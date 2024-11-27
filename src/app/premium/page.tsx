'use client'
import React, { useEffect, useState } from "react";
import { FiLock } from "react-icons/fi";
import "@/app/css/App.css";
import { useRouter } from "next/navigation";

export default function Premium() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [showPopup1, setShowPopup1] = useState(false);
  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
  };


  const [userInfo, setUserInfo] = useState<any>(null);
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const MY_BANK = {
    BANK_ID: "MB",
    ACCOUNT_NO: "8455003078",
  };

  // Pre-filled values
  const [numberInput, setNumberInput] = useState("49000"); // Default amount
  const [content, setContent] = useState("Thanh toán dịch vụ"); // Default content
  const [paidContent, setPaidContent] = useState("");
  const [qrSrc, setQrSrc] = useState("");

  useEffect(() => {
    console.log("userInfo:", userInfo); // Check the structure of userInfo
    if (userInfo) {
      const name = userInfo[0].email;
      // console.log(userInfo[0].fullName);
      setContent(`${name} premium1`);
    } else {
      setContent("Thanh toán dịch vụ");
    }
  }, [userInfo, setContent]);


  const validateAndHandleNumberInput = () => {
    const amount = parseFloat(numberInput);
    if (!isNaN(amount) && amount >= 10000) {
      console.log(`Valid number: ${amount}`);
      setPaidContent(`Thanh toán cho Capyversity với nội dung: ${content}`);
      const QR = `https://img.vietqr.io/image/${MY_BANK.BANK_ID}-${MY_BANK.ACCOUNT_NO}-compact2.png?amount=${amount}&addInfo=${content}`;
      setQrSrc(QR);
    } else {
      alert("Số tiền phải lớn hơn hoặc bằng 10k.");
    }
  };

  const [isHovered, setIsHovered] = useState(false); // Tracks if the button is being hovered
  const [isEnabled, setIsEnabled] = useState(false); // Tracks if the button should be enabled

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isHovered) {
      timer = setTimeout(() => {
        setIsEnabled(true);
      }, 1000); // Enable the button after 1 seconds of hovering
    } else {
      setIsEnabled(false); // Reset if hover stops
    }

    return () => clearTimeout(timer); // Cleanup the timer on hover exit
  }, [isHovered]);

  return (
    <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
      <div className="m-auto text-center lg:w-7/12">
        <h2 className="text-2xl font-bold text-white md:text-4xl">Premium</h2>
        <p className="text-sm text-gray-200">
          Nâng cấp tài khoản để nhận được các đặc quyền và các tính năng cao
          cấp.
        </p>
      </div>
      <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">

        <div className="group relative md:col-span-1 lg:w-[32%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              Basic
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                {/* <span className="-ml-2 mt-2 text-3xl font-bold text-primary">
                  $
                </span>
                <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                  0
                </span> */}
              </div>
            </div>
            <ul
              role="list"
              className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            //   style={{ textAlign: "center" }}
            >
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Truy cập thông tin chi tiết và mới nhất <br />của các trường đại học</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Lưu trữ hồ sơ</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">🔒</span>
                <small className="text-gray-400">
                  Tính năng đánh giá tính tương thích<br />
                  giữa hồ sơ và toàn bộ yêu cầu
                </small>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">🔒</span>
                <small className="text-gray-400">
                  Cá nhân hóa giao diện người dùng
                </small>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">🔒</span>
                <small className="text-gray-400">
                  Tư vấn và hỗ trợ từ các trung tâm
                </small>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Trải nghiệm
              </span>
            </button>
          </div>
        </div>

        <div className="group relative row-start-1 md:col-span-2 lg:w-[36%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              Premium 1
            </h3>
            <div className="overflow-hidden">
              <div className="flex items-end justify-center">
                <div className="flex">
                  <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                    49
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex">
                    <span className="block text-xl font-bold text-gray-500 dark:text-gray-400">
                      .000
                    </span>
                    <span className="-mt-2 text-xl font-bold text-primary">
                      đ
                    </span>
                  </div>

                  <span className="block text-xl font-bold text-primary">
                    / tháng
                  </span>
                </div>
              </div>
              {/* <div className="text-center text-2xl font-medium">
                <span className="text-gray-400 line-through">$234</span>
                <span className="font-semibold text-gray-700 dark:text-white">
                  $190
                </span>
              </div>
              <span className="block text-center text-xs uppercase text-primary">
                BILLED MONTHLY
              </span> */}
              {/* <span className="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900">
                1 Discount applied
              </span> */}
            </div>
            <ul
              role="list"
              className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Truy cập thông tin chi tiết và mới nhất <br />của các trường đại học</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Lưu trữ hồ sơ</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>
                  Mở khóa chức năng so sánh thông  <br /> tin giữa các trường đại học
                </span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Mở khóa chức năng tìm kiếm</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Mở khóa chức năng đăng bài chia sẻ, hỏi <br />  đáp trên diễn đàn</span>
              </li>
            </ul>
            {/* <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              onClick={() => { togglePopup(); validateAndHandleNumberInput(); }}

            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Nâng cấp
              </span>
            </button> */}
            {userInfo ? (
              <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              onClick={() => { togglePopup(); validateAndHandleNumberInput(); }}>
                <span className="relative text-base font-semibold text-white dark:text-dark">
                Nâng cấp
              </span>
              </button>
            ) : (
              <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              onClick={() => router.push("/login")}>
                <span className="relative text-base font-semibold text-white dark:text-dark">
                Nâng cấp
              </span>
              </button>
            )}

          </div>
        </div>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
              <div className="flex justify-end items-end">
                <button
                  // onClick={togglePopup}
                  onClick={togglePopup}
                  className=" text-sm flex justify-center items-center px-1 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  ✖
                </button>
              </div>
              <h1 className="text-xl font-bold text-center mb-4">Thanh toán</h1>

              {paidContent && (
                <p
                  id="paid_content"
                  className="mt-4 text-sm text-gray-800 font-medium"
                >
                  {paidContent}
                </p>
              )}

              {/* {userInfo ? setContent(userInfo[0].fullName) : setContent("Thanh toán dịch vụ")} */}

              {qrSrc && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={qrSrc}
                    alt="QR Code"
                    className="w-150 h-150 border border-gray-300 rounded-md"
                  />
                </div>
              )}
              <div className="flex justify-center items-center">
                <button
                  // onClick={togglePopup}
                  onClick={togglePopup1}
                  className="flex justify-center items-center mt-4 px-2 py-3 bg-green-500 text-white rounded hover:bg-green-800"
                >
                  Tôi xác nhận đã thanh toán chuyển khoản
                </button>
                {/* <button
                  onMouseEnter={() => setIsHovered(true)} // Start hover tracking
                  onMouseLeave={() => setIsHovered(false)} // Stop hover tracking
                  onClick={() => {
                    if (isEnabled) {
                      alert("Button clicked!"); // Perform the action only if enabled
                    }
                  }}
                  className={`flex justify-center items-center mt-4 px-4 py-3 rounded text-white ${isEnabled
                      ? "bg-green-500 hover:bg-green-800 cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                    }`}
                  disabled={!isEnabled} // Disable the button until it's enabled
                >
                  Tôi xác nhận đã thanh toán chuyển khoản
                </button> */}
              </div>
              {showPopup1 && (
                // <div className="text-sm mx-5  ">Thông tin của bạn sẽ được duyệt trong vòng 12 tiếng</div>
                <>
                  <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
                      <div className="flex justify-end items-end">
                        <button
                          // onClick={togglePopup}
                          onClick={togglePopup}
                          className=" text-sm flex justify-center items-center px-1 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                          ✖
                        </button>
                      </div>
                      <h1 className="text-xl font-bold text-center mb-4">Capyversity xin cảm ơn</h1>


                      <h2
                        id="paid_content"
                        className="text-center mt-4 text-sm text-gray-800 font-medium"
                      >
                        Giao dịch của bạn sẽ sớm được duyệt
                      </h2>

                      {/* {userInfo ? setContent(userInfo[0].fullName) : setContent("Thanh toán dịch vụ")} */}

                      <div className="flex justify-center items-center">
                        <button
                          // onClick={togglePopup}
                          onClick={togglePopup1}
                          className="flex justify-center items-center mt-4 px-2 py-3 bg-green-500 text-white rounded hover:bg-green-800"
                        >
                          OK
                        </button>
                        {/* <button
                  onMouseEnter={() => setIsHovered(true)} // Start hover tracking
                  onMouseLeave={() => setIsHovered(false)} // Stop hover tracking
                  onClick={() => {
                    if (isEnabled) {
                      alert("Button clicked!"); // Perform the action only if enabled
                    }
                  }}
                  className={`flex justify-center items-center mt-4 px-4 py-3 rounded text-white ${isEnabled
                      ? "bg-green-500 hover:bg-green-800 cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                    }`}
                  disabled={!isEnabled} // Disable the button until it's enabled
                >
                  Tôi xác nhận đã thanh toán chuyển khoản
                </button> */}
                      </div>
                      {showPopup1 && (
                        // <div className="text-sm mx-5  ">Thông tin của bạn sẽ được duyệt trong vòng 12 tiếng</div>
                        <></>
                      )}

                    </div>

                  </div></>
              )}

            </div>

          </div>
        )}
        <div className="group relative md:col-span-1 lg:w-[32%] opacity-80" >
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              Premium 2
            </h3>
            <div className="relative flex justify-around">
              {/* <div className="flex">
                <span className="-ml-6 mt-2 text-3xl font-bold text-primary">
                  $
                </span>
                <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                  xx
                </span>
              </div> */}
              {/* <span className="absolute right-9 bottom-2 text-xl font-bold text-primary">
                / tháng
              </span> */}
            </div>
            <ul
              role="list"
              className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Chức năng tìm kiếm thông tin cơ bản</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Lưu trữ hồ sơ</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>
                  Tính năng đánh giá tính tương thích<br />
                  giữa hồ sơ và toàn bộ yêu cầu
                </span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Cá nhân hóa giao diện người dùng</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Tư vấn và hỗ trợ từ các trung tâm</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Coming soon
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
