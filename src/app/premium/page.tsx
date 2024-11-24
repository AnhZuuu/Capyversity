import React from "react";
import "@/app/css/App.css";

export default function Premium() {
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
              Premium 2
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                {/* <span className="-ml-6 mt-2 text-3xl font-bold text-primary">
                  $
                </span> */}
                <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                  xx
                </span>
              </div>
              <span className="absolute right-9 bottom-2 text-xl font-bold text-primary">
                / tháng
              </span>
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
                Tính năng đánh giá tính tương thích<br/>
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
                <span>Truy cập thông tin chi tiết và mới nhất <br/>của các trường đại học</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Lưu trữ hồ sơ</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>
                Mở khóa chức năng so sánh thông  <br/> tin giữa các trường đại học
                </span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Mở khóa chức năng tìm kiếm</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Mở khóa chức năng đăng bài chia sẻ, hỏi <br/>  đáp trên diễn đàn</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Nâng cấp
              </span>
            </button>
          </div>
        </div>

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
                <span className="-ml-2 mt-2 text-3xl font-bold text-primary">
                  $
                </span>
                <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                  0
                </span>
              </div>
            </div>
            <ul
              role="list"
              className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
              //   style={{ textAlign: "center" }}
            >
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Truy cập thông tin chi tiết và mới nhất <br/>của các trường đại học</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-primary">✔️</span>
                <span>Lưu trữ hồ sơ</span>
              </li>
              <li className="space-x-2">
                {/* <span className="font-semibold text-primary">✔️</span> */}
                <small className="text-gray-400">
                Tính năng đánh giá tính tương thích<br/>
                giữa hồ sơ và toàn bộ yêu cầu
                </small>
              </li>
              <li className="space-x-2">
                {/* <span className="font-semibold text-primary">✔️</span> */}
                <small className="text-gray-400">
                Cá nhân hóa giao diện người dùng
                </small>
              </li>
              <li className="space-x-2">
                {/* <span className="font-semibold text-primary">✔️</span> */}
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
      </div>
    </div>
  );
}
