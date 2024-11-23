'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from 'antd';
import styles from './compare.module.css';

const Compare = () => {
    const [data, setData] = useState([]); // List of all schools
    const [selectedSchools, setSelectedSchools] = useState([null, null]); // Stores two selected schools
    //const [selectedSchools, setSelectedSchools] = useState<(School | null)[]>([null, null]);
    // Fetch school data
    useEffect(() => {
        fetch(`https://66fd67c269936930895514d7.mockapi.io/School/`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // Handle selection change for a dropdown
    const handleSelect = (index: number, schoolId: string) => {
        const updatedSelection = [...selectedSchools]; // Correctly type the array
        const selectedSchool = data.find(school => (school as { id: string }).id === schoolId) || null; // Use null if not found
        updatedSelection[index] = selectedSchool; // Assign school or null
        setSelectedSchools(updatedSelection);
    };

    return (
        <div className={styles.compareContainer}>
            <h1 className='text-white text-lg'>Compare Schools</h1>

            {/* Selection Dropdowns */}
            <div className={styles.selectContainer}>
                {[0, 1].map((index) => (
                    <div key={index}>
                        <h3 className='text-white'>Select School {index + 1}</h3>
                        <select
                            onChange={(e) => handleSelect(index, e.target.value)}
                            //value={selectedSchools[index]?.id || ''}
                            value={(selectedSchools[index] as { id: string } | null)?.id || ''}
                        >
                            <option value="">-- Select a School --</option>
                            {data.map((school) => (
                                <option key={(school as { id: string })?.id} value={(school as { id: string })?.id}>
                                    {(school as { name: string })?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            {/* Comparison Section */}
            <div className={styles.comparisonTable}>
                {selectedSchools[0] && selectedSchools[1] ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                {/* <th>{selectedSchools[0]?.name}</th> */}
                                <th>{(selectedSchools[0] as { name: string } | null)?.name}</th>
                                <th>{(selectedSchools[1] as { name: string } | null)?.name}</th>
                                {/* <th>{selectedSchools[1]?.name}</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Number of Majors</td>
                                {/* <td>{selectedSchools[0]?.numOfMajor}</td>
                                <td>{selectedSchools[1]?.numOfMajor}</td> */}
                                <td>{(selectedSchools[0] as { numOfMajor: number } | null)?.numOfMajor}</td>
                                <td>{(selectedSchools[1] as { numOfMajor: number } | null)?.numOfMajor}</td>

                            </tr>
                            <tr>
                                <td>IELTS Requirement</td>
                                {/* <td>{selectedSchools[0]?.IELTS}</td>
                                <td>{selectedSchools[1]?.IELTS}</td> */}
                                <td>{(selectedSchools[0] as { IELTS: number } | null)?.IELTS}</td>
                                <td>{(selectedSchools[1] as { IELTS: number } | null)?.IELTS}</td>

                            </tr>
                            <tr>
                                <td>Ranking</td>
                                {/* <td>{selectedSchools[0]?.ranking}</td>
                                <td>{selectedSchools[1]?.ranking}</td> */}
                                <td>{(selectedSchools[0] as { ranking: string } | null)?.ranking}</td>
                                <td>{(selectedSchools[1] as { ranking: string } | null)?.ranking}</td>

                            </tr>
                            <tr>
                                <td>Region</td>
                                {/* <td>{selectedSchools[0]?.region}</td>
                                <td>{selectedSchools[1]?.region}</td> */}
                                <td>{(selectedSchools[0] as { region: string } | null)?.region}</td>
                                <td>{(selectedSchools[1] as { region: string } | null)?.region}</td>

                            </tr>
                            <tr>
                                <td>Image</td>
                                <td>
                                    <Image
                                        alt={`${(selectedSchools[0] as { name: string } | null)?.name} Image`}
                                        src={(selectedSchools[0] as { img1: string } | null)?.img1}

                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td>
                                    <Image
                                        alt={`${(selectedSchools[1] as { name: string } | null)?.name} Image`}
                                        src={(selectedSchools[1] as { img1: string } | null)?.img1}
                                        width={100}
                                        height={100}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p>Please select two schools to compare.</p>
                )}
            </div>
        </div>
    );
};

export default Compare;
