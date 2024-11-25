'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link';

import { FaSort, FaSortUp, FaSortDown, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from 'antd'
import { useRouter } from 'next/navigation';


const Schools = () => {


    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://66fd67c269936930895514d7.mockapi.io/School/`)
            .then(response => response.json())
            .then(data => { setData(data) })
    }, []);
    const router = useRouter();

    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [searchTerm, setSearchTerm] = useState("");
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
                                            Number of Majors {getSortIcon("email")}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                            // onClick={() => handleSort("role")}
                                            aria-label="Sort by role"
                                        >
                                            Level {getSortIcon("role")}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Region
                                        </th>
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((user) => (
                                        <tr key={(user as { id: string })?.id} className="hover:bg-gray-50 transition-colors duration-200"
                                            onClick={() => togglePopup((user as { id: string })?.id)}>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {(user as { id: string })?.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {(user as { name: string })?.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {(user as { numOfMajor: number })?.numOfMajor}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {/* {user.role} */}
                                                {/* {(user as { isAdmin: boolean })?.isAdmin === true ? "Admin" : "User"} */}
                                                {(user as { ranking: string })?.ranking}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${(user as { isPremium: boolean })?.isPremium === true ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                                                >
                                                    {/* {user.status} */}
                                                    {/* {(user as { isAdmin: boolean })?.isAdmin === true ? "" : ``} */}
                                                    {/* {(user as { isPremium: boolean })?.isPremium === true ? "Premium" : "Normal"} */}
                                                    {/* {(user as { isAdmin: boolean })?.isAdmin === true ? "" : `${(user as { isPremium: boolean })?.isPremium === true ? "Premium" : "Normal"}`} */}
                                                    {(user as { region: string })?.region}


                                                </span>
                                            </td>
                                            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                                            </td> */}
                                            {/* Popup */}
                                            {/* {showPopup && ( */}
                                            {activePopup === (user as { id: string })?.id && (
                                                <div className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-30 flex justify-center items-center z-50">
                                                    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
                                                        <h3 className="text-lg font-bold mb-4">
                                                            Details of {(user as { fullName: string })?.fullName}
                                                        </h3>
                                                        <p>
                                                            <b>Email:</b> {(user as { email: string })?.email}
                                                        </p>
                                                        <p>
                                                            <b>Password:</b> {(user as { password: string })?.password}
                                                        </p>
                                                        <p>
                                                            {/* <b>DOB:</b> {reverseDOB((user as { dob: string })?.dob)} */}
                                                        </p>
                                                        <p>
                                                            <b>Phone:</b> {(user as { phoneNumber: string })?.phoneNumber}
                                                        </p>
                                                        {/* <p>
                                                                    <b>JPLT:</b> {(uni as { JPLT: string })?.JPLT}
                                                                </p>
                                                                <p>
                                                                    <b>Ranking:</b> {(uni as { ranking: string })?.ranking}
                                                                </p>
                                                                <p>
                                                                    <b>Link:</b>{' '}
                                                                    <a
                                                                        href={(uni as { link: string })?.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-blue-500 underline"
                                                                    >
                                                                        {(uni as { link: string })?.link}
                                                                    </a>
                                                                </p> */}
                                                        <button
                                                            // onClick={togglePopup}
                                                            onClick={() => togglePopup((user as { id: string })?.id)}

                                                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                {data.map((uni, idx) => (
                    <div key={(uni as { id: string })?.id}>
                        {/* <Link href={`/schools/${uni.id}`} key={uni.id}> */}
                        {/* <button onClick={() => router.push(`/schools/${(uni as { id: string })?.id}`)}> */}
                        <Card className='w-full h-1/10'>
                            <button
                                // onClick={togglePopup}
                                onClick={() => togglePopup((uni as { id: string })?.id)}
                                className="mt-2 px-4 py-2 bg-white-500 rounded hover:bg-gray-300"
                            >
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{(uni as { name: string })?.name}</p>
                                    <small className="text-default-500">{(uni as { numOfMajor: number })?.numOfMajor} ngành</small>
                                </CardHeader>
                                <CardBody className="flex-row overflow-visible py-2 place-content-around">
                                    {/* <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={(uni as { img1: string })?.img1}
                                        width={50}
                                        height={50}
                                    /> */}
                                    <div className="max-w-24 text-[10px]">Các bậc: <b>{(uni as { ranking: string })?.ranking}</b></div>
                                    <div className='flex-row'>
                                        <div className='text-[10px]'>IELTS: <b>{(uni as { IELTS: string })?.IELTS}</b></div>
                                        <div className='text-[10px]'>HSK: <b>{(uni as { HSK: string })?.HSK}</b></div>
                                        <div className='text-[10px]'>JPLT: <b>{(uni as { JPLT: string })?.JPLT}</b></div>

                                    </div>
                                </CardBody>
                                <CardFooter className="p-3 h-auto w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-between items-center">
                                    <h4 className="block text-small text-default-500"> Địa chỉ: {(uni as { region: string })?.region}</h4>
                                    <p className="text-[7px] text-blue-500 text-wrap">{(uni as { link: string })?.link}</p>
                                </CardFooter>

                            </button>
                        </Card>
                        {/* Popup */}
                        {activePopup === (uni as { id: string })?.id && (
                            // {showPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50">
                                {/* <button
                                    // onClick={togglePopup}
                                    onClick={() => togglePopup((uni as { id: string })?.id)}
                                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Close
                                </button> */}
                                <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
                                    <div className="flex justify-end items-end">
                                        <button
                                            // onClick={togglePopup}
                                            onClick={() => togglePopup((uni as { id: string })?.id)}
                                            className=" text-sm flex justify-center items-center px-1 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                                        >
                                            Tắt
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-bold mb-4">
                                        Details of {(uni as { name: string })?.name}
                                    </h3>
                                    <p>
                                        <b>Region:</b> {(uni as { region: string })?.region}
                                    </p>
                                    <p>
                                        <b>IELTS:</b> {(uni as { IELTS: string })?.IELTS}
                                    </p>
                                    <p>
                                        <b>HSK:</b> {(uni as { HSK: string })?.HSK}
                                    </p>
                                    <p>
                                        <b>JPLT:</b> {(uni as { JPLT: string })?.JPLT}
                                    </p>
                                    <p>
                                        <b>Ranking:</b> {(uni as { ranking: string })?.ranking}
                                    </p>
                                    <p>
                                        <b>Link:</b>{' '}
                                        <a
                                            href={(uni as { link: string })?.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                        >
                                            {(uni as { link: string })?.link}
                                        </a>
                                    </p>
                                    {/* <button
                                        // onClick={togglePopup}
                                        onClick={() => togglePopup((uni as { id: string })?.id)}
                                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Close
                                    </button> */}
                                </div>
                            </div>
                        )}
                    </div>

                ))}
            </div>
        </>
    )
}

export default Schools;