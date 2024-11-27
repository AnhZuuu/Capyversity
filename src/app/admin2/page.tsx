'use client'
import React, { useEffect, useState, lazy, Suspense } from "react";
import  capy_img  from '../../../public/capyversity.png'
import { FiUsers, FiBriefcase, FiPieChart, FiSearch, FiMenu, FiX, FiBookOpen, FiFileText, FiLogOut } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import Image from 'next/image';
const AdminUser = lazy(() => import("@/components/admin/user"));
const AdminSchool = lazy(() => import("@/components/admin/school"));
const AdminNews = lazy(() => import("@/components/admin/news"));
const AdminBlog = lazy(() => import("@/components/admin/blog"));

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const dummyChartData = [
    { name: "Jan", users: 400, schools: 240 },
    { name: "Feb", users: 300, schools: 139 },
    { name: "Mar", users: 200, schools: 980 },
    { name: "Apr", users: 278, schools: 390 },
    { name: "May", users: 189, schools: 480 },
  ];

  const pieChartData = [
    { name: "Users", value: 400 },
    { name: "Schools", value: 300 },
    { name: "News", value: 300 },
    { name: "Blogs", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FiPieChart /> },
    { id: "users", label: "Users", icon: <FiUsers /> },
    { id: "schools", label: "Schools", icon: <FiBookOpen /> },
    { id: "news", label: "News", icon: <FiFileText /> },
    { id: "blog", label: "Blog", icon: <FiBriefcase /> },
    { id: "logout", label: "Logout", icon: <FiLogOut /> },
  ];

  const dummyUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Editor" },
  ];

  const dummySchools = [
    { id: 1, name: "Springfield Elementary", location: "Springfield", students: 500 },
    { id: 2, name: "Central High", location: "Central City", students: 1200 },
    { id: 3, name: "West Academy", location: "West End", students: 800 },
  ];

  const dummyNews = [
    { id: 1, title: "New Curriculum Announced", date: "2024-01-15", category: "Education" },
    { id: 2, title: "Annual Sports Meet", date: "2024-01-10", category: "Sports" },
    { id: 3, title: "Teacher Training Program", date: "2024-01-05", category: "Training" },
  ];

  const dummyBlogs = [
    { id: 1, title: "Modern Teaching Methods", author: "John Doe", date: "2024-01-15" },
    { id: 2, title: "Digital Learning Tools", author: "Jane Smith", date: "2024-01-10" },
    { id: 3, title: "Student Engagement Tips", author: "Mike Johnson", date: "2024-01-05" },
  ];

  const DashboardSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">User Statistics</h3>
        <BarChart width={500} height={300} data={dummyChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" />
          <Bar dataKey="schools" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Users' behavior</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={pieChartData}
            cx={250} //dịch ngang
            cy={150} //dịch dọc
            innerRadius={0} //viền trong
            outerRadius={80} //viền ngoài
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );

  const UsersSection = () => (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">User Management</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const SchoolsSection = () => (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">School Management</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Students</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummySchools.map((school) => (
                <tr key={school.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{school.id}</td>
                  <td className="px-6 py-4">{school.name}</td>
                  <td className="px-6 py-4">{school.location}</td>
                  <td className="px-6 py-4">{school.students}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const NewsSection = () => (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">News Management</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyNews.map((news) => (
                <tr key={news.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{news.id}</td>
                  <td className="px-6 py-4">{news.title}</td>
                  <td className="px-6 py-4">{news.date}</td>
                  <td className="px-6 py-4">{news.category}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const BlogSection = () => (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Blog Management</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Author</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyBlogs.map((blog) => (
                <tr key={blog.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{blog.id}</td>
                  <td className="px-6 py-4">{blog.title}</td>
                  <td className="px-6 py-4">{blog.author}</td>
                  <td className="px-6 py-4">{blog.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${isMenuOpen ? "w-64" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!isMenuOpen && "rotate-180"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src={capy_img} alt="Capyversity logo"
            className={`cursor-pointer duration-500 rounded-full ${isMenuOpen && "rotate-[360deg]"}`}
            style={{ width: "32px", height: "32px" }}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!isMenuOpen && "scale-0"}`}>
            Admin Panel
          </h1>
        </div>
        <ul className="pt-6">
          {menuItems.map((menu) => (
            <li
              key={menu.id}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-700 text-gray-300 text-sm items-center gap-x-4 mt-2
                ${menu.id === activeSection && "bg-gray-700"}`}
              onClick={() => setActiveSection(menu.id)}
            >
              <span className="text-2xl">{menu.icon}</span>
              <span className={`${!isMenuOpen && "hidden"} origin-left duration-200`}>{menu.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="bg-white shadow-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        {/* {activeSection === "dashboard" && <DashboardSection />} */}
        {/* {activeSection === "users" && <UsersSection />} */}
        {/* {activeSection === "schools" && <SchoolsSection />} */}
        {/* {activeSection === "news" && <NewsSection />} */}
        {/* {activeSection === "blog" && <BlogSection />} */}
        {activeSection === "dashboard" && <DashboardSection />}
        {activeSection === "users" && <AdminUser />}
        {activeSection === "schools" && <AdminSchool />}
        {activeSection === "news" && <NewsSection />}
        {activeSection === "blog" && <BlogSection />}
      </div>
    </div>
  );
};

export default AdminDashboard;
