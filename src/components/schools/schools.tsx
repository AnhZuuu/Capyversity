'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { universityData } from '@/data/universityData'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from 'antd'
import styles from './schools.module.css';
import { useRouter } from 'next/navigation';


const Schools = () => {
    // const res = await fetch(
    //     `https://66fd67c269936930895514d7.mockapi.io/School`,
    //     {
    //         method: "GET",
    //     });
    // const data = await res.json();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://66fd67c269936930895514d7.mockapi.io/School/`)
            .then(response => response.json())
            .then(data => { setData(data) })
    }, []);
    const router = useRouter();
    return (
        <div className={styles.card}>
            {data.map((uni, idx) => (
                <div key={uni.id}>
                    {/* <Link href={`/schools/${uni.id}`} key={uni.id}> */}
                        <button onClick={() => router.push(`/schools/${uni.id}`)}>
                        <Card className={styles.cardItem}>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{uni.name}</p>
                                <small className="text-default-500">{uni.numOfMajor} ngành</small>
                            </CardHeader>
                            <CardBody className="flex-row overflow-visible py-2 place-content-around">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src={uni.img1}
                                    width={150}
                                    height={150}
                                />
                                <div className='flex-col'>
                                    <div>IELTS: <b>{uni.IELTS}</b></div>
                                    <div>TOEIC: <b>{uni.TOEIC}</b></div>
                                    <div>HSK: <b>{uni.HSK}</b></div>
                                    <div>JPLT: <b>{uni.JPLT}</b></div>


                                </div>
                            </CardBody>
                            <CardFooter className="p-3 h-auto w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-between items-center">
                                <h4 className="block text-small text-default-500"> Địa chỉ: {uni.region}</h4>
                                <h4 className="font-bold text-large">Ranking: #{uni.avgTuition}</h4>
                            </CardFooter>
                        </Card>
                        </button>
                    {/* </Link> */}
                </div>
            ))}
        </div>
    )
}

export default Schools;