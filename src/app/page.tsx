import "@/app/css/App.css";
import { url } from "inspector";
// import '../'
import capyversity_rmbg from '../../public/capyversity-removebg.png'
import globalizattion from "../../public/globalization-cuate.svg"
import Image from "next/image";

export default function Home() {
  async function create(formData: FormData) {
    "use server";
    console.log(">>>>check form data: ", formData.get("username"));
  }

  return (
    <>
      <div className="relative pt-10 pb-20 lg:pt-10">
          <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
              <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Relax, Enjoy and Explore<br className="lg:block hidden"/> <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">the world</span>.</h1>
              <div className="lg:flex">
                  <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                      <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                          DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, best companion bot for your virtual watercooler, 1:1 intros, motivation tracking and more.
                      </p>
                      <span className="block font-semibold text-gray-500 dark:text-gray-400">The best companion bot for your chat app.</span>

                      <div className="dark:text-gray-300">
                          🔥🌟 
                          <span>Phương thức liên lạc</span> 
                          {/* <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Discord,</a>
                          <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Telegram</a> */}
                      </div>
                      <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                          <a aria-label="add to slack" href="https://www.facebook.com/profile.php?id=61566054150164" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                              <div className="flex justify-center space-x-4">
                                  <img className="w-6 h-6" src="public/capyversity_rmbg" alt="facebook" loading="lazy" width="128" height="128"/>
                                  <span className="hidden font-medium md:block dark:text-white">Facebook</span>
                              </div>
                          </a>    
                          <a aria-label="add to chat" href="https://www.instagram.com/capyversity/?fbclid=IwY2xjawFuBJBleHRuA2FlbQIxMAABHRyz2HkI15JfuzIHztLGM5brDBTAjVj6V3x59X4Sg5MZGOnCadT5gfgXBQ_aem_oAy-8creSf7XU8MaZIPTUQ" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                              <div className="flex justify-center space-x-4">
                                  <img className="w-6 h-6" src="images/chat.png" alt="chat logo" loading="lazy" width="128" height="128"/>
                                  <span className="hidden font-medium md:block dark:text-white">Instagram</span>
                              </div>
                          </a>   
                          <a aria-label="add to zoom" href="#" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                              <div className="flex justify-center space-x-4">
                                  <img className="w-6 h-6" src="images/zoom.png" alt="chat logo" loading="lazy" width="128" height="128"/>
                                  <span className="hidden font-medium md:block dark:text-white">Capyversity@gmail.com</span>
                              </div>
                          </a>    
                      </div>
                      <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                          <img src="./images/clients/airbnb.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                          <img src="./images/clients/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                          <img src="./images/clients/coty.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                          <img src="./images/clients/microsoft.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                      </div>
                  </div>
                  <div className="md:mt-0 lg:absolute -right-40 lg:w-7/12" style={{marginTop : -60}}>
                      <div className="relative w-full">
                          <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl"></div>
                          <Image src={globalizattion} alt="globalizattion" loading="lazy" width="600" height="600"/>
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
              <h2 className="mt-4 text-2xl text-white md:text-2xl">
                Không chỉ là du học, mà là một cuộc phiêu lưu không ngừng...
              </h2>
            </div>
            <div className="mt-8 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://www.busytourist.com/wp-content/uploads/2019/05/Gyeongbokgung-Palace.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition">
                      Trường ở Hàn Quốc
                    </h5>
                    <p className="text-sm text-gray-100">
                      Khi bạn du học tại Hàn Quốc, bạn có thể hoàn thành các
                      khóa học từ kinh doanh, truyền thông và phương tiện truyền
                      thông đến ngôn ngữ, văn hóa, triết học Hàn Quốc, v.v.
                    </p>
                    <a
                      href="/schools"
                      className="flex items-center text-white group-hover:text-primary"
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
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition ">
                      Trường ở Nhật Bản
                    </h5>
                    <p className="text-sm text-gray-200">
                      Từ thủ đô hiện đại nhưng vẫn truyền thống Tokyo đến thủ đô
                      văn hóa giàu đền chùa và quán trà Kyoto.
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
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://img.dipont.com/2019/01/rdfz-renmin-beijing.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition">
                      Trường ở Trung Quốc
                    </h5>
                    <p className="text-sm text-gray-200">
                      Khám phá những kỳ quan của Trung Hoa Đại lục và đắm mình
                      trong lịch sử cũng như ảnh hưởng toàn cầu của nơi này.
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
              <h2 className="mt-4 text-2xl text-white md:text-2xl">
                Không chỉ là du học, mà là một cuộc phiêu lưu không ngừng...
              </h2>
            </div>
            <div className="mt-8 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://www.busytourist.com/wp-content/uploads/2019/05/Gyeongbokgung-Palace.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition">
                      Trường ở Hàn Quốc
                    </h5>
                    <p className="text-sm text-gray-100">
                      Khi bạn du học tại Hàn Quốc, bạn có thể hoàn thành các
                      khóa học từ kinh doanh, truyền thông và phương tiện truyền
                      thông đến ngôn ngữ, văn hóa, triết học Hàn Quốc, v.v.
                    </p>
                    <a
                      href="#"
                      className="flex items-center text-white group-hover:text-primary"
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
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition ">
                      Trường ở Nhật Bản
                    </h5>
                    <p className="text-sm text-gray-200">
                      Từ thủ đô hiện đại nhưng vẫn truyền thống Tokyo đến thủ đô
                      văn hóa giàu đền chùa và quán trà Kyoto.
                    </p>
                    <a
                      href="#"
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
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://img.dipont.com/2019/01/rdfz-renmin-beijing.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition">
                      Trường ở Trung Quốc
                    </h5>
                    <p className="text-sm text-gray-200">
                      Khám phá những kỳ quan của Trung Hoa Đại lục và đắm mình
                      trong lịch sử cũng như ảnh hưởng toàn cầu của nơi này.
                    </p>
                    <a
                      href=""
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
              {/* <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl mr-8">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                      School in China
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Neque Dolor, fugiat non cum doloribus aperiam voluptates
                      nostrum.
                    </p>
                  </div>
                  <a
                    href=""
                    className="flex items-center justify-between group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
              <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl mr-8">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                      School in Japan
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Neque Dolor, fugiat non cum doloribus aperiam voluptates
                      nostrum.
                    </p>
                  </div>
                  <a
                    href=""
                    className="flex items-center justify-between group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div> */}
              {/* <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                      More features
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Neque Dolor, fugiat non cum doloribus aperiam voluptates
                      nostrum.
                    </p>
                  </div>
                  <a
                    href=""
                    className="flex items-center justify-between group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>  */}
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
              <h2 className="mt-4 text-2xl text-white md:text-2xl">
                Không chỉ là du học, mà là một cuộc phiêu lưu không ngừng...
              </h2>
            </div>
            <div className="mt-8 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://www.busytourist.com/wp-content/uploads/2019/05/Gyeongbokgung-Palace.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition">
                      Trường ở Hàn Quốc
                    </h5>
                    <p className="text-sm text-gray-100">
                      Khi bạn du học tại Hàn Quốc, bạn có thể hoàn thành các
                      khóa học từ kinh doanh, truyền thông và phương tiện truyền
                      thông đến ngôn ngữ, văn hóa, triết học Hàn Quốc, v.v.
                    </p>
                    <a
                      href="/"
                      className="flex items-center text-white group-hover:text-primary"
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
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition ">
                      Trường ở Nhật Bản
                    </h5>
                    <p className="text-sm text-gray-200">
                      Từ thủ đô hiện đại nhưng vẫn truyền thống Tokyo đến thủ đô
                      văn hóa giàu đền chùa và quán trà Kyoto.
                    </p>
                    <a
                      href="#"
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
              <div
                className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-2xl mr-8 mt-8"
                style={{
                  backgroundImage:
                    "url('https://img.dipont.com/2019/01/rdfz-renmin-beijing.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                }}
              >
                <div className="relative space-y-8 py-12 p-8">
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-black transition">
                      Trường ở Trung Quốc
                    </h5>
                    <p className="text-sm text-gray-200">
                      Khám phá những kỳ quan của Trung Hoa Đại lục và đắm mình
                      trong lịch sử cũng như ảnh hưởng toàn cầu của nơi này.
                    </p>
                    <a
                      href="#"
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
              {/* <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl mr-8">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                      School in China
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Neque Dolor, fugiat non cum doloribus aperiam voluptates
                      nostrum.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-between group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
              <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl mr-8">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                      School in Japan
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Neque Dolor, fugiat non cum doloribus aperiam voluptates
                      nostrum.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-between group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div> */}
              {/* <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                      More features
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Neque Dolor, fugiat non cum doloribus aperiam voluptates
                      nostrum.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-between group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
