// 'use client'

import React, { useEffect, useState } from "react"
import "@/app/css/App.css";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { FaUserCircle, FaCrown } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


const AdminUser = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "Admin",
            status: "Active"
        },
        {
            id: 2,
            name: "Alice Smith",
            email: "alice@example.com",
            role: "User",
            status: "Active"
        },
        {
            id: 3,
            name: "Bob Johnson",
            email: "bob@example.com",
            role: "Editor",
            status: "Inactive"
        },
        {
            id: 4,
            name: "Emma Wilson",
            email: "emma@example.com",
            role: "User",
            status: "Active"
        },
        {
            id: 5,
            name: "David Brown",
            email: "david@example.com",
            role: "Admin",
            status: "Active"
        }
    ]);
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://671b3d972c842d92c37f0b37.mockapi.io/user`)
            .then(response => response.json())
            .then(data => { setData(data) })
    }, []);

    // function togglePremium(
    //     userId: string,
    //     data: any[],
    //     setData: React.Dispatch<React.SetStateAction<any[]>>
    // ) {
    //     // Update local state
    //     setData((prevData) =>
    //         prevData.map((user) =>
    //             user.id === userId ? { ...user, isPremium: !user.isPremium } : user
    //         )
    //     );

    //     // Update the backend API
    //     const userToUpdate = data.find((user) => user.id === userId);
    //     if (userToUpdate) {
    //         fetch(`https://671b3d972c842d92c37f0b37.mockapi.io/user/${userId}`, {
    //             method: "PUT",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ isPremium: !userToUpdate.isPremium }),
    //         });
    //     }
    // }
    // function togglePremium(userId: string, setData: React.Dispatch<React.SetStateAction<any[]>>) {
    //     setData((prevData) =>
    //       prevData.map((user) =>
    //         user.id === userId ? { ...user, isPremium: !user.isPremium } : user
    //       )
    //     );

    //     // Optional: Fetch the previous user state from prevData to sync with API
    //     fetch(`https://671b3d972c842d92c37f0b37.mockapi.io/user/${userId}`, {
    //       method: "PUT",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ isPremium: !prevData.find((user) => user.id === userId)?.isPremium }),
    //     });
    // }
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [searchTerm, setSearchTerm] = useState("");

    const handleEdit = (id: any) => {
        console.log(`Edit user with id: ${id}`);
    };

    const handleDelete = (id: any) => {
        console.log(`Delete user with id: ${id}`);
    };

    const handleView = (id: any) => {
        console.log(`View user with id: ${id}`);
    };
    //   const handleSort = (key : any) => {
    //     try {
    //       let direction = "ascending";
    //       if (sortConfig.key === key && sortConfig.direction === "ascending") {
    //         direction = "descending";
    //       }

    //       const sortedUsers = [...users].sort((a, b) => {
    //         if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
    //         if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
    //         return 0;
    //       });

    //       setUsers(sortedUsers);
    //       setSortConfig({ key, direction });
    //       toast.success(`Users sorted by ${key} (${direction})`);
    //     } catch (error) {
    //       toast.error("Sort failed, please try again");
    //     }
    //   };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getSortIcon = (key: any) => {
        if (sortConfig.key !== key) return <FaSort className="inline ml-2" />;
        return sortConfig.direction === "ascending" ? (
            <FaSortUp className="inline ml-2" />
        ) : (
            <FaSortDown className="inline ml-2" />
        );
    };

    const [showPopup, setShowPopup] = useState(false);

    // const togglePopup = () => {
    //     setShowPopup(!showPopup);
    // };
    const [activePopup, setActivePopup] = useState<string | null>(null); // Store ID of active popup

    const togglePopup = (id: string) => {
        setActivePopup(activePopup === id ? null : id); // If the same popup is clicked, close it, else open the new one
    };
    function reverseDOB(dateString: any) {
        // Split the date string into an array by the hyphen delimiter
        const [year, month, day] = dateString.split('-');
        // Return the rearranged date in "DD/MM/YYYY" format
        return `${day}-${month}-${year}`;
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">User Management Dashboard</h1>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                            // onClick={() => handleSort("name")}
                                            aria-label="Sort by name"
                                        >
                                            Name {getSortIcon("name")}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                            // onClick={() => handleSort("email")}
                                            aria-label="Sort by email"
                                        >
                                            Email {getSortIcon("email")}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                            // onClick={() => handleSort("role")}
                                            aria-label="Sort by role"
                                        >
                                            Role {getSortIcon("role")}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((user) => (
                                        <tr key={(user as { id: string })?.id} className="hover:bg-gray-50 transition-colors duration-200">

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {(user as { id: string })?.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {(user as { fullName: string })?.fullName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {(user as { email: string })?.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {/* {user.role} */}
                                                {(user as { isAdmin: boolean })?.isAdmin === true ? "Admin" : "User"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${(user as { isPremium: boolean })?.isPremium === true ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                                                // onClick={() => togglePremium(user.id, data, setData)}
                                                >
                                                    {/* {user.status} */}
                                                    {/* {(user as { isAdmin: boolean })?.isAdmin === true ? "" : ``} */}
                                                    {/* {(user as { isPremium: boolean })?.isPremium === true ? "Premium" : "Normal"} */}
                                                    {(user as { isAdmin: boolean })?.isAdmin === true ? "" : `${(user as { isPremium: boolean })?.isPremium === true ? "Premium" : "Normal"}`}

                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex space-x-3">
                                                    <button
                                                        onClick={() => togglePopup((user as { id: string })?.id)}

                                                        className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                                                        aria-label="View user details"
                                                    >
                                                        <FaEye className="h-5 w-5" />
                                                    </button>
                                                    <button
                                                        // onClick={() => handleEdit(user.id)}
                                                        className="text-yellow-600 hover:text-yellow-900 transition-colors duration-200"
                                                        aria-label="Edit user"
                                                    >
                                                        <FaEdit className="h-5 w-5" />
                                                    </button>
                                                    <button
                                                        // onClick={() => handleDelete(user.id)}
                                                        className="text-red-600 hover:text-red-900 transition-colors duration-200"
                                                        aria-label="Delete user"
                                                    >
                                                        <FaTrash className="h-5 w-5" />
                                                    </button>
                                                </div>
                                                {/* <div className="space-y-4">
                                                    {data.map((user: { id: string; isPremium: boolean; isAdmin: boolean }) => (
                                                        <div key={user.id} className="flex items-center space-x-4">
                                                            <span className="font-bold">{`User ID: ${user.id}`}</span>
                                                            <button
                                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.isPremium ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                                    }`}
                                                                onClick={() => togglePremium(user.id, data, setData)}
                                                            >
                                                                {user.isAdmin ? "" : user.isPremium ? "Premium" : "Normal"}
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div> */}
                                            </td>
                                            {/* Popup */}
                                            {/* {showPopup && ( */}
                                            {activePopup === (user as { id: string })?.id && (
                                                <>
                                                    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50'>
                                                        <div
                                                            id="profile-popup"
                                                            role="dialog"
                                                            aria-modal="true"
                                                            className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <div className="flex justify-between items-center mb-6">
                                                                <h2 className="text-2xl font-semibold text-gray-800">Thông tin tài khoản</h2>
                                                                <div className="flex justify-end items-end">
                                                                    <button
                                                                        // onClick={togglePopup}
                                                                        onClick={() => togglePopup((user as { id: string })?.id)}
                                                                        className="px-2 py-1 bg-green-300 text-white rounded hover:bg-green-600"
                                                                    >
                                                                        ✖
                                                                    </button>
                                                                </div>
                                                                {/* <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      aria-label="Close profile popup"
                    >
                      <IoMdClose size={24} />
                    </button> */}
                                                            </div>

                                                            <div className="space-y-6">
                                                                <div className="flex items-center justify-center">
                                                                    <div className="relative">
                                                                        <img
                                                                            src={"https://i.pinimg.com/736x/e4/50/9d/e4509dbf81623e547be4b300036a0a7b.jpg"}
                                                                            alt={(user as { fullName: string })?.fullName}
                                                                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                                                        />
                                                                        {(user as { isPremium: boolean })?.isPremium && (
                                                                            <span className="absolute bottom-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                                                                PREMIUM
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-4">
                                                                    <div>
                                                                        <label className="text-sm text-gray-500 block">Họ tên</label>
                                                                        <p className="text-gray-800 font-medium">{(user as { fullName: string })?.fullName || "Not provided"}</p>
                                                                    </div>

                                                                    <div>
                                                                        <label className="text-sm text-gray-500 block">Tên đăng nhập</label>
                                                                        <p className="text-gray-800 font-medium">{(user as { email: string })?.email || "Not provided"}</p>
                                                                    </div>

                                                                    <div>
                                                                        <label className="text-sm text-gray-500 block">Sinh nhật</label>
                                                                        <p className="text-gray-800 font-medium">
                                                                            {(user as { dob: string })?.dob ? reverseDOB((user as { dob: string })?.dob) : "Not provided"}
                                                                        </p>
                                                                    </div>

                                                                    <div>
                                                                        <label className="text-sm text-gray-500 block">Trạng thái tài khoản</label>
                                                                        <p className="text-gray-800 font-medium flex items-center space-x-2">
                                                                            <span
                                                                            // className={`inline-block w-2 h-2 rounded-full ${userInfo[0].isPremium ? "bg-green-500" : "bg-gray-500"
                                                                            //   }`}
                                                                            ><FaCrown className="mr-3" style={{ color: (user as { isPremium: boolean })?.isPremium ? "#10B981" : "#EF4444" }} /></span>
                                                                            {/* <span {userInfo[0].isPremium ? { className="text-green-400" } : { className="text-red-400" }}>

                          {userInfo[0].isPremium ? "Premium Member" : "Standard Member"}
                        </span> */}
                                                                            <span className={(user as { isPremium: boolean })?.isPremium ? "text-green-500" : "text-red-400"}>
                                                                                {(user as { isPremium: boolean })?.isPremium ? "Premium Member" : "Standard Member"}
                                                                            </span>

                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <button
                                                                    
                                                                    className="w-full mt-6 flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                                                                >
                                                                    <span>Chặn tài khoản</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AdminUser;


