"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "antd";
import styles from "./blogs.module.css";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const News = () => {
  const [data, setData] = useState([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const country = ["all", "Hoa Kỳ", "Úc"];
  const filteredNews = data.filter((item) => {
    const matchesSearch =
      (item as { title: string })?.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (item as { content: string })?.content
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      (item as { country: string })?.country === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    fetch(`https://66fed8002b9aac9c997d9378.mockapi.io/news`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const router = useRouter();
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="mb-8">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-xl overflow-hidden h-[400px] w-[900px]"
            >
              {data.map((item) => (
                <SwiperSlide key={(item as { id: string })?.id}>
                  <div className="relative w-full h-full">
                    <img
                      src={(item as { image: string })?.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h2 className="text-white text-2xl font-bold">
                        {(item as { title: string })?.title}
                      </h2>
                      <p className="text-gray-200 mt-2">
                        {(item as { timeUp: string })?.timeUp}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FiSearch className="absolute right-3 top-3 text-gray-400" />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {country.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCategory(country)}
                  className={`px-4 py-2 rounded-full capitalize ${
                    selectedCategory === country
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                  transition-colors duration-200`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredNews.map((item) => (
              <motion.article
                key={(item as { id: string })?.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={(item as { image: string })?.image}
                    alt=""
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {(item as { country: string })?.country}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {(item as { title: string })?.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {(item as { timeUp: string })?.timeUp}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height:
                        expandedId === (item as { id: string })?.id
                          ? "auto"
                          : "100px",
                    }}
                    className="relative overflow-hidden"
                  >
                    <p className="text-gray-600">
                      {(item as { content: string })?.content}{" "}
                      <a
                        href={`${(item as { link: string })?.link}`}
                        className="text-blue-400 hover:underline"
                      >
                        Đọc thêm
                      </a>
                    </p>
                    {expandedId !== (item as { id: string })?.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                    )}
                  </motion.div>

                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === (item as { id: string })?.id
                          ? null
                          : (item as { id: string })?.id
                      )
                    }
                    className="mt-4 text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {expandedId === (item as { id: string })?.id
                      ? "Thu gọn"
                      : "Mở rộng"}
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không tìm thấy tin tức.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
