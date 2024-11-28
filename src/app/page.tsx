"use client";
import "@/app/css/App.css";
import { url } from "inspector";
// import '../'
import globalizattion from "../../public/globalization-cuate.svg";
import logoFB from "../../public/logoFb.png";
import logoInstagram from "../../public/logoIns.png";
import logoGmail from "../../public/logoGmail.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";

export default function Home() {
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogIndex, setBlogIndex] = useState(0);
  const [schools, setSchools] = useState([]);

  // async function create(formData: FormData) {
  //   "use server";
  //   console.log(">>>>check form data: ", formData.get("username"));
  // }

  // Fetch the news from the API
  const fetchNews = async () => {
    try {
      await fetch(`https://66fed8002b9aac9c997d9378.mockapi.io/news`)
        .then((response) => response.json())
        .then((data) => {
          setNews(data);
        });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      await fetch(`https://66fed8002b9aac9c997d9378.mockapi.io/blog`)
        .then((response) => response.json())
        .then((data) => {
          setBlogs(data);
        });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="relative pt-10 pb-20 lg:pt-10">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-white text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
            Relax, Enjoy and Explore
            <br className="lg:block hidden" />{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">
              the World
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-300 lg:w-11/12">
                Capyversity mang mong muốn là một trang tổng hợp thông tin du
                học chính thống từ các trường đại học ở khu vực Đông Nam Á. Hỗ
                trợ các bạn tìm kiếm thông tin nhanh chóng và chính xác. Để đảm
                bảo các bạn không bỏ lỡ bất kỳ thông tin nào, Capyversity sẽ
                luôn cập nhập các thông tin mới nhất và chi tiết của các trường
                đại học.
              </p>
              <span className="block font-semibold text-gray-400">
                Bạn cần gì đã có Capy lo.
              </span>
              <span className="block font-semibold text-blue-500">
                Don&apos;t worry, be Capy.
              </span>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a
                  aria-label="add to slack"
                  href="https://www.facebook.com/profile.php?id=61566054150164"
                  className="p-4 border border-gray-700 bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <Image
                      src={logoFB}
                      alt="Facebook logo"
                      width={28}
                      height={28}
                    />
                    <span className="hidden font-medium md:block text-white">
                      Facebook
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to chat"
                  href="https://www.instagram.com/capyversity/?fbclid=IwY2xjawFuBJBleHRuA2FlbQIxMAABHRyz2HkI15JfuzIHztLGM5brDBTAjVj6V3x59X4Sg5MZGOnCadT5gfgXBQ_aem_oAy-8creSf7XU8MaZIPTUQ"
                  className="p-4 border border-gray-700 bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <Image
                      src={logoInstagram}
                      alt="Instagram logo"
                      width={28}
                      height={28}
                    />
                    <span className="hidden font-medium md:block text-white">
                      Instagram
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to zoom"
                  href="#"
                  className="p-4 border border-gray-700 bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <Image
                      src={logoGmail}
                      alt="Gmail logo"
                      width={28}
                      height={28}
                    />
                    <span className="hidden font-medium md:block text-white">
                      Capyversity@gmail.com
                    </span>
                  </div>
                </a>
              </div>
              <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                <img
                  src="./images/clients/airbnb.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="./images/clients/ge.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="./images/clients/coty.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="./images/clients/microsoft.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
              </div>
            </div>
            <div
              className="md:mt-0 lg:absolute -right-40 lg:w-7/12"
              style={{ marginTop: -60 }}
            >
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl"
                ></div>
                <Image
                  src={globalizattion}
                  alt="globalizattion"
                  loading="lazy"
                  width="600"
                  height="600"
                />
                {/* <img src="/public/globalization.png" className="relative w-full" alt="wath illustration" loading="lazy" width="320" height="280"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="schools">
        <div className="py-12 gap-6 border-b border-white py-6 mx-12">
          <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
            <div>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
                Trường
              </h2>
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <h2 className="mt-4 text-2xl text-white md:text-2xl">
                  Không chỉ là du học, mà là một cuộc phiêu lưu không ngừng...
                </h2>
                <a
                  href="/schools"
                  className="flex items-center text-white group-hover:text-blue"
                >
                  <b className="text-sm">Xem thêm</b>
                </a>
              </div>
            </div>
            <div className="mt-8 grid divide-x divide-y divide-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
              <div className="flex space-x-5 pb-4">
                {/* <div className="mt-8 grid divide-x divide-y divide-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3"> */}
                <div className="flex-none w-full h-full relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                    style={{
                      backgroundImage:
                        "url('https://ffg.vn/wp-content/uploads/2021/01/mui-gio-my-viet-nam-2.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 300,
                    }}
                  >
                    <div className="py-32 p-8 absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent">
                      <div className="space-y-2">
                        <h5 className="text-xl font-bold text-black transition">
                          Du học Mỹ
                        </h5>
                        <p className="text-sm text-gray-100" style={{ textShadow: 'black 1px 0 10px' }}>
                          Mở ra cơ hội học tập tại các trường đại học
                          danh tiếng, tiếp cận nền giáo dục chất lượng cao và
                          trải nghiệm văn hóa đa dạng, chuẩn bị cho tương lai
                          vững chắc.
                        </p>
                        <a
                          href="/schools"
                          className="flex items-center text-white group-hover:text-secondary"
                        >
                          <b className="text-sm">Tìm hiểu thêm</b>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 ml-2"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full h-full relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                    style={{
                      backgroundImage:
                        "url('https://i.gocollette.com/img/destination-page/europe/england-wales/england-ms1.jpg?h=720&w=1280&la=en-CA')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 300,
                    }}
                  >
                    <div className="py-32 p-8 absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent">
                      <div className="space-y-2">
                        <h5 className="text-xl font-bold text-black transition ">
                          Du học Anh
                        </h5>
                        <p className="text-sm text-gray-200">
                          Sinh viên có cơ hội tiếp cận nền giáo dục chất
                          lượng, với chương trình học ngắn hạn tiết kiệm thời gian,
                          môi trường đa văn hóa và cơ hội phát triển nghề nghiệp
                          toàn cầu.
                        </p>
                        <a
                          href="/schools"
                          className="flex items-center text-white group-hover:text-secondary"
                        >
                          <b className="text-sm">Tìm hiểu thêm</b>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 ml-2"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full h-full relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div
                    className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                    style={{
                      backgroundImage:
                        "url('https://www.tripsavvy.com/thmb/hWOiXo0Vu_YA8HoBxSfns1n09qs=/3032x2048/filters:fill(auto,1)/opera-house-at-dawn-1154295605-81536fa4c4cc449e8bced26bdc517756.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 300,
                    }}
                  >
                    <div className="py-32 p-8 absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent">
                      <div className="space-y-2">
                        <h5 className="text-xl font-bold text-black transition">
                          Du học Úc
                        </h5>
                        <p className="text-sm text-gray-200">
                          Nền giáo dục chất lượng, các
                          trường đại học uy tín, môi trường học tập thân thiện,
                          cơ hội thực tập, làm việc và đa dạng văn hóa, giúp
                          sinh viên phát triển toàn diện.
                        </p>
                        <a
                          href="/schools"
                          className="flex items-center text-white group-hover:text-secondary"
                        >
                          <b className="text-sm">Tìm hiểu thêm</b>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 ml-2"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news ">
        <div className="py-12 gap-6 border-b border-white py-6 mx-12">
          <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
            <div>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
                Tin tức
              </h2>
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <h2 className="mt-4 text-2xl text-white md:text-2xl">
                  Nắm bắt thông tin nhanh chóng...
                </h2>
                <a
                  href="/news"
                  className="flex items-center text-white group-hover:text-blue"
                >
                  <b className="text-sm">Xem thêm</b>
                </a>
              </div>
            </div>
            <div className="mt-8 grid divide-x divide-y divide-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
              <div className="flex space-x-5 pb-4">
                {news.map((news) => (
                  <div
                    key={(news as { id: string })?.id}
                    className="flex-none w-full h-full relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={(news as { image: string })?.image}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                      <div className="absolute bottom-0 p-4 text-white">
                        <h2 className="text-xl font-bold mb-2">
                          {(news as { title: string })?.title}
                        </h2>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">
                            {(news as { timeUp: string })?.timeUp}
                          </span>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            <a
                              href={`${(news as { link: string })?.link}`}
                              // className="text-blue-400 hover:underline"
                            >
                              Đọc thêm
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blogs ">
        <div className="py-12 ">
          <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
            <div>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
                Bài chia sẻ
              </h2>
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <h2 className="mt-4 text-2xl text-white md:text-2xl">
                  Chia sẻ trải nghiệm và kinh nghiệm...
                </h2>
                <a
                  href="/blogs"
                  className="flex items-center text-white group-hover:text-blue"
                >
                  <b className="text-sm">Xem thêm</b>
                </a>
              </div>
            </div>
            <section className="py-4 md:px-8" aria-label="Latest Blog Posts">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blogs.map((blog) => (
                    <div
                      key={(blog as { id: string })?.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                    >
                      {(blog as { image: string })?.image ? (
                        <img
                          src={(blog as { image: string })?.image}
                          alt=""
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <></>
                      )}

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {(blog as { title: string })?.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <FaUser className="mr-2" />
                          <span>{(blog as { user: string })?.user}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-3">
                          <FaCalendar className="mr-2" />
                          <span>{(blog as { date: string })?.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
