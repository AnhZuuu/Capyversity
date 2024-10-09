"use client";
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { useRouter } from "next/navigation";

const OtherBlogs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://66fed8002b9aac9c997d9378.mockapi.io/blog`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const router = useRouter();
  return (
    <div>
      {data.map((blog, idx) => (
        <div key={(blog as { id: string })?.id}>
          <button
            onClick={() =>
              router.push(`/blogs/${(blog as { id: string })?.id}`)
            }
          >
            <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
              style={{ width: 400, marginBottom: "10px" }}
            >
              <div className="flex gap-4">
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  {(blog as { title: string })?.title }
                </h6>
              </div>
              <div
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={(blog as { image: string })?.image}
                  width={270}
                  height={150}
                />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="block text-small text-default-500">
                  {(blog as { date: string })?.date}
                </h4>
                <h4 className="font-bold text-large">{(blog as { author: string })?.author}</h4>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default OtherBlogs;
