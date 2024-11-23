"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";

const AdminUser = lazy(() => import("@/components/admin/user"));
const AdminSchool = lazy(() => import("@/components/admin/school"));
const AdminNews = lazy(() => import("@/components/admin/news"));
const AdminBlog = lazy(() => import("@/components/admin/blog"));

const Admin = () => {
    const [currentComponent, setCurrentComponent] = useState('user');
    const handleShow = (component: any) => setCurrentComponent(component);
    // const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    //     setIsClient(true);
    // }, []);
    // // Only render the form after the component has mounted
    // if (!isClient) {
    //     return null; // Avoid rendering during SSR
    // }
    return (
        <div className="flex h-screen">
            {/* Left section for buttons */}
            <div className="w-1/5 bg-gray-100 p-4">
                {['user', 'school', 'news', 'blog'].map((item) => (
                    <button
                        key={item}
                        className={`block w-full mb-2 p-2 rounded ${currentComponent === item
                                ? 'bg-blue-700 text-white'
                                : 'bg-blue-300 text-white hover:bg-blue-600'
                            }`}
                        onClick={() => handleShow(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                ))}
            </div>

            {/* Right section for components */}
            <div className="w-4/5 p-4">
                <Suspense fallback={<div>Loading...</div>}>
                    {currentComponent === 'user' ? <AdminUser /> :
                        currentComponent === 'school' ? <AdminSchool /> :
                            currentComponent === 'news' ? <AdminNews /> :
                                <AdminBlog />}
                </Suspense>
            </div>
        </div>
    );
};

export default Admin;
