'use client'
import React, { useState } from "react"
import "@/app/css/App.css";
import AdminUser from "@/components/admin/user";
import AdminSchool from "@/components/admin/school";
import AdminNews from "@/components/admin/news";
import AdminBlog from "@/components/admin/blog";

const Admin = () => {
    const [currentComponent, setCurrentComponent] = useState('user');

    const handleShow = (component : any) => {
        setCurrentComponent(component);
    };

    return (
        <div className="flex h-screen">
            {/* Left section for buttons */}
            <div className="w-1/5 bg-gray-100 p-4">
                <button
                    className={`block w-full mb-2 p-2 rounded ${
                        currentComponent === 'user' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-blue-300 text-white hover:bg-blue-600'
                    }`}
                    onClick={() => handleShow('user')}
                >
                    User
                </button>
                <button
                    className={`block w-full mb-2 p-2 rounded ${
                        currentComponent === 'school' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-blue-300 text-white hover:bg-blue-600'
                    }`}
                    onClick={() => handleShow('school')}
                >
                    School
                </button>
                <button
                    className={`block w-full mb-2 p-2 rounded ${
                        currentComponent === 'news' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-blue-300 text-white hover:bg-blue-600'
                    }`}
                    onClick={() => handleShow('news')}
                >
                    News
                </button>
                <button
                    className={`block w-full mb-2 p-2 rounded ${
                        currentComponent === 'blog' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-blue-300 text-white hover:bg-blue-600'
                    }`}
                    onClick={() => handleShow('blog')}
                >
                    Blog
                </button>
            </div>

            {/* Right section for components */}
            <div className="w-4/5 p-4">
                {
                    currentComponent === 'user' ? <AdminUser /> :
                        currentComponent === 'school' ? <AdminSchool /> :
                            currentComponent === 'news' ? <AdminNews /> :
                                <AdminBlog />
                }
            </div>
        </div>
    );
}

export default Admin;
