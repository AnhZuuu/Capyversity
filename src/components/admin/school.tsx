'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link';

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

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <div >
                {data.map((uni, idx) => (
                    <div key={(uni as { id: string })?.id}>
                        {/* <Link href={`/schools/${uni.id}`} key={uni.id}> */}
                        {/* <button onClick={() => router.push(`/schools/${(uni as { id: string })?.id}`)}> */}
                        <Card className='w-full h-1/10'>
                            <button
                                onClick={togglePopup}
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
                        {showPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
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
                                    <button
                                        onClick={togglePopup}
                                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Close
                                    </button>
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