"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, lazy, Suspense } from "react";
// import AdminUser from "@/components/admin/user";
const AdminUser = lazy(() => import("@/components/admin/user"));

const AdminSchool = lazy(() => import("@/components/admin/school"));
const AdminNews = lazy(() => import("@/components/admin/news"));
const AdminBlog = lazy(() => import("@/components/admin/blog"));

const Admin = () => {
  const [currentComponent, setCurrentComponent] = useState("user");
  const handleShow = (component: any) => setCurrentComponent(component);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>(null);

  const handleLogout = () => {
    setUserInfo(null);
    localStorage.removeItem("userInfo");
    router.push("/login");
  };

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left section for buttons */}
      <div className="w-1/5 bg-gray-100 p-4">
        {["user", "school", "news", "blog"].map((item) => (
          <button
            key={item}
            className={`block w-full mb-2 p-2 rounded ${
              currentComponent === item
                ? "bg-blue-700 text-white"
                : "bg-blue-300 text-white hover:bg-blue-600"
            }`}
            onClick={() => handleShow(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
        <button          
          className={`block w-full mb-2 p-2 rounded`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Right section for components */}
      <div className="w-4/5 p-4">
        <Suspense fallback={<div>Loading...</div>}>
          {currentComponent === "user" ? (
            <AdminUser />
          ) : currentComponent === "school" ? (
            <AdminSchool />
          ) : currentComponent === "news" ? (
            <AdminNews />
          ) : (
            <AdminBlog />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Admin;
