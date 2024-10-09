"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./blogs.module.css";
import { Image } from "antd";
import HeartIcon from "@/components/heart_icon/page";
import OtherBlogs from "@/components/blogs/otherBlogs";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch(`https://66fed8002b9aac9c997d9378.mockapi.io/blog/${blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="py-16">
        <div key={data.id}>
          <div className="mb-20 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              {data.title}
            </h2>
          </div>
          <div className="container flex justify-between m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
              style={{ width: 800, height : 900 }}
            >
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1559671811780087810/Y4E8X2do_400x400.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {data.author}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {data.date}
                  </p>
                </div>
              </div>
              <p className="mt-8">{data.content}</p>
              <div
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={data.image}
                />
              </div>
              <div className="flex justify-start gap-2 pt-2">
                <HeartIcon />
                <small>{data.rating}</small>
              </div>
            </div>

            <div className={styles.listOther}>
              <h2 className={styles.labelOtherBlog}>Các chia sẻ khác</h2>
              <div className="other-content">
                {/* <otherBlogs/> */}
                <OtherBlogs/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
