'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from 'antd'
import styles from './schools.module.css'
import { useRouter } from 'next/navigation'
import '@/app/css/App.css'

const Schools_Premium1 = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
        ielts: '',
        numOfMajor: '',
        ranking: '',
        region: ''
    });

    useEffect(() => {
        fetch(`https://66fd67c269936930895514d7.mockapi.io/School/`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
    }, []);

    const router = useRouter();

    const handleFilterChange = (e: any) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    useEffect(() => {
        const filtered = data.filter(uni => {
            return (
                (filters.ielts === '' || ((uni as { IELTS: number })?.IELTS).toString() === filters.ielts) &&
                (filters.numOfMajor === '' || ((uni as { numOfMajor: number })?.numOfMajor).toString() === filters.numOfMajor) &&
                (filters.ranking === '' || (uni as { ranking: string })?.ranking.toLowerCase().includes(filters.ranking)) &&
                (filters.region === '' || (uni as { region: string })?.region.toLowerCase().includes(filters.region))
            );
        });
        setFilteredData(filtered);
    }, [filters, data]);

    return (
        <>
            <div className={styles.filterSection}>

                
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="IELTS"
                        name="ielts"
                        value={filters.ielts}
                        onChange={handleFilterChange}
                    />
                
                
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Number of Majors"
                        name="numOfMajor"
                        value={filters.numOfMajor}
                        onChange={handleFilterChange}
                    />
                

                <input
                    className={styles.input}
                    type="text"
                    placeholder="Ranking"
                    name="ranking"
                    value={filters.ranking}
                    onChange={handleFilterChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Region"
                    name="region"
                    value={filters.region}
                    onChange={handleFilterChange}
                />
                
                <button className='bg-blue-400 text-gray-800 text-shadow-black text-sm font-bold rounded-md p-3' onClick={() => router.push(`/compareSchool`)}>Compare schools</button>
                <br />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Region"
                    name="region"
                    value={filters.region}
                    onChange={handleFilterChange}
                />
            </div>
            <div className={styles.card}>
                {/* Filter Section */}



                {/* Card Section */}
                {filteredData.map((uni) => (
                    <div key={(uni as { id: string })?.id}>
                        <button onClick={() => router.push(`/schools/${(uni as { id: string })?.id}`)}>
                            <Card className={styles.cardItem}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{(uni as { name: string })?.name}</p>
                                    <small className="text-default-500">{(uni as { numOfMajor: number })?.numOfMajor} ngành</small>
                                </CardHeader>
                                <CardBody className="flex-row overflow-visible py-2 place-content-around">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={(uni as { img1: string })?.img1}
                                        width={150}
                                        height={150}
                                    />
                                    <div className='flex-col'>
                                        {/* <div className='text-[10px]'>IELTS: <b>{(uni as { IELTS: number })?.IELTS}</b></div> */}
                                        <br />
                                        <div className="max-w-24 text-[10px]">Các bậc: <b>{(uni as { ranking: string })?.ranking}</b></div>
                                    </div>
                                </CardBody>
                                <CardFooter className="p-3 h-auto w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-between items-center">
                                    <h4 className="block text-small text-default-500"> Địa chỉ: {(uni as { region: string })?.region}</h4>
                                    <p className="text-[7px] text-blue-500 text-wrap">{(uni as { link: string })?.link}</p>
                                </CardFooter>
                            </Card>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Schools_Premium1;
