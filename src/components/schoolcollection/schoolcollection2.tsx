import React, { useState, useEffect } from "react";
import { FiSearch, FiBookOpen, FiDollarSign, FiMap } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const SchoolCollection2 = () => {
    //   const [schools, setSchools] = useState([
    //     {
    //       id: 1,
    //       name: "Harvard University",
    //       address: "Cambridge, Massachusetts",
    //       majorsCount: 50,
    //       IELTS: 7.5,
    //       toeicPoint: 850,
    //       hsk: 5,
    //       tuitionAverage: 55000,
    //       minTuition: 45000,
    //       maxTuition: 65000,
    //       image: "images.unsplash.com/photo-1562774053-701939374585"
    //     },
    //     {
    //       id: 2,
    //       name: "Stanford University",
    //       address: "Stanford, California",
    //       majorsCount: 45,
    //       IELTS: 7.0,
    //       toeicPoint: 800,
    //       hsk: 4,
    //       tuitionAverage: 52000,
    //       minTuition: 42000,
    //       maxTuition: 62000,
    //       image: "images.unsplash.com/photo-1565843248736-8c41e6db117b"
    //     }
    //   ]);
    const [schools, setSchools] = useState([])
    useEffect(() => {
        fetch(`https://66fd67c269936930895514d7.mockapi.io/School/`)
            .then(response => response.json())
            .then(schools => {
                setSchools(schools);
                setFilteredSchools(schools);

            })
    }, []);
    const router = useRouter();

    const [filters, setFilters] = useState({
        name: "",
        region: "",
        numOfMajor: "",
        IELTS: "",
        TOEIC: "",
        HSK: "",
        avgTuition: "",
        minTuition: "",
        maxTuition: ""
    });

    const [filteredSchools, setFilteredSchools] = useState(schools);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        filterSchools();
    }, [filters]);

    const handleFilterChange = (e: any) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));

        validateField(name, value);
    };

    const validateField = (name: any, value: any) => {
        let newErrors = { ...errors };

        // switch (name) {
        //   case "majorsCount":
        //   case "IELTS":
        //   case "toeicPoint":
        //   case "hsk":
        //   case "tuitionAverage":
        //   case "minTuition":
        //   case "maxTuition":
        //     if (value && isNaN(value)) {
        //       newErrors[name] = "Please enter a valid number";
        //     } else {
        //       delete newErrors[name];
        //     }
        //     break;
        //   default:
        //     delete newErrors[name];
        // }

        setErrors(newErrors);
    };

    const filterSchools = () => {
        const filtered = schools.filter(school => {
            return (
                (school as { name: string })?.name.toLowerCase().includes(filters.name.toLowerCase()) &&

                (school as { region: string })?.region.toLowerCase().includes(filters.region.toLowerCase()) &&
                (!filters.numOfMajor || (school as { numOfMajor: number })?.numOfMajor <= Number(filters.numOfMajor)) &&
                (!filters.IELTS || (school as { IELTS: number })?.IELTS <= Number(filters.IELTS)) &&
                (!filters.TOEIC || (school as { TOEIC: number })?.TOEIC <= Number(filters.TOEIC)) &&
                (!filters.HSK || (school as { HSK: number })?.HSK <= Number(filters.HSK)) &&
                (!filters.avgTuition || (school as { avgTuition: number })?.avgTuition <= Number(filters.avgTuition)) &&
                (!filters.minTuition || (school as { minTuition: number })?.minTuition >= Number(filters.minTuition)) &&
                (!filters.maxTuition || (school as { maxTuition: number })?.maxTuition <= Number(filters.maxTuition))
            );
        });

        setFilteredSchools(filtered);
    };

    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8">
            <div className="max-w-full mx-auto">
                {/* <h1 className="text-3xl font-bold text-gray-800 mb-8">School Collection</h1> */}

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Section - 30% width */}
                    <div className="md:w-[20%] mb-10 position: sticky ">
                        <div className=" bg-white rounded-lg shadow-md  p-6 mb-6 ">
                        <h2 className="text-xl font-semibold mb-4">Lọc</h2>
                        <div className="flex flex-col gap-4">
                            {/* Text Filters */}
                            <div className="relative">
                                <FiSearch className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Tên trường"
                                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={filters.name}
                                    onChange={handleFilterChange}
                                    aria-label="Tên trường"
                                />
                            </div>

                            <div className="relative">
                                <FiMap className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="region"
                                    placeholder="Khu vực"
                                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={filters.region}
                                    onChange={handleFilterChange}
                                    aria-label="Search by address"
                                />
                            </div>

                            {/* Numeric Filters */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Số ngành tối thiểu</label>
                                <input
                                    type="number"
                                    name="majorsCount"
                                    className={`w-full px-4 py-2 border rounded-md `}
                                    //   ${errors.majorsCount ? "border-red-500" : "border-gray-300"}
                                    value={filters.numOfMajor}
                                    onChange={handleFilterChange}
                                    aria-label="Filter by number of majors"
                                />
                                {/* {errors.majorsCount && <p className="text-red-500 text-sm">{errors.majorsCount}</p>} */}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Điểm IELTS của bạn</label>
                                <input
                                    type="number"
                                    name="IELTS"
                                    step="0.5"
                                    className={`w-full px-4 py-2 border rounded-md `}
                                    //   ${errors.IELTS ? "border-red-500" : "border-gray-300"}
                                    value={filters.IELTS}
                                    onChange={handleFilterChange}
                                    aria-label="Filter by IELTS score"
                                />
                                {/* {errors.IELTS && <p className="text-red-500 text-sm">{errors.IELTS}</p>} */}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Học phí tối thiểu</label>
                                <input
                                    type="number"
                                    name="avgTuition"
                                    className={`w-full px-4 py-2 border rounded-md `}
                                    //   ${errors.avgTuition ? "border-red-500" : "border-gray-300"}
                                    value={filters.avgTuition}
                                    onChange={handleFilterChange}
                                    aria-label="Filter by average tuition"
                                />
                                {/* {errors.avgTuition && <p className="text-red-500 text-sm">{errors.avgTuition}</p>} */}
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold mt-5">So sánh</h2>
                            <button className='bg-blue-400 text-gray-800 text-shadow-black text-sm font-bold rounded-md p-3' onClick={() => router.push(`/compareSchool`)}>Compare schools</button>

                            {/* <button className='bg-blue-400 text-gray-800 text-shadow-black text-sm font-bold rounded-md p-3' onClick={() => router.push(`/compareSchool`)}>Compare schools</button> */}

                        </div>
                        </div>
                    </div>

                    {/* Schools Grid - 70% width */}
                    <div className="md:w-[80%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredSchools.map(school => (
                                <button key={(school as { id: string })?.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
                                    onClick={() => router.push(`/schools/${(school as { id: string })?.id}`)}
                                >
                                    <img
                                        src={(school as { img1: string })?.img1}
                                        alt={(school as { name: string })?.name}
                                        className="w-full h-48 object-cover"
                                    // onError={(e) => {
                                    //   e.target.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f";
                                    // }}
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{(school as { name: string })?.name}</h3>
                                        <p className="text-gray-600 mb-4"><FiMap className="inline mr-2" />{(school as { region: string })?.region}</p>

                                        <div className="space-y-2">
                                            <p className="flex items-center text-gray-700">
                                                <FiBookOpen className="mr-2" />
                                                <span>Majors: {(school as { numOfMajor: number })?.numOfMajor}</span>
                                            </p>
                                            <p className="flex items-center text-gray-700">
                                                <IoLanguageOutline className="mr-2" />
                                                <span>IELTS: {(school as { IELTS: number })?.IELTS}</span>
                                            </p>
                                            <p className="flex items-center text-gray-700">
                                                <FiDollarSign className="mr-2" />
                                                <span>Tuition: ${(school as { minTuition: number })?.minTuition.toLocaleString()} - ${(school as { maxTuition: number })?.maxTuition.toLocaleString()}</span>
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {filteredSchools.length === 0 && (
                            <div className="text-center py-8">
                                <p className="text-gray-500">No schools match your filter criteria</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolCollection2;