'use client'

import { useParams } from 'next/navigation';
import "@/app/css/App.css";

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './schools.module.css';

// import React, { useState } from "react";
import { FaGlobe, FaMapMarkerAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";

const SchoolDetailPage = () => {
  const { schoolId } = useParams();
    const [data, setData] = useState<any>([])
  const [activeTab, setActiveTab] = useState("Thông tin");
  useEffect(() => {
    fetch(`https://66fd67c269936930895514d7.mockapi.io/School/${schoolId}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            // setFilteredData(data);
        })
}, []);


  const schoolImages = [
    "images.unsplash.com/photo-1562774053-701939374585",
    "images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    "images.unsplash.com/photo-1541339907198-e08756dedf3f"
  ];

  const academicPrograms = [
    "Đại học",
    "Khóa học sau đại học",
    "Nghiên cứu sau đại học"
  ];
  // const bacDaoTao = Object.values(data.bacdaotao);
  const bacDaoTao = data.bacdaotao ? Object.values(data.bacdaotao) : [];

  const rankings = data.ranking
  ? data.ranking.split(", ").map((category : any, index : any) => ({
      category: category.trim(),
      rank: `#${index + 1}`,
    }))
  : [];

  const subAddress = data.subAddress
  ? data.subAddress.split(";").map((address: any) => address.trim())
  : [];

  // const rankings = data.ranking
  // .split(", ") // Split the string into an array by ", "
  // .map((category : any, index : any) => ({
  //   category: category.trim(), // Ensure no extra whitespace
  //   rank: `#${index + 1}`, // Assign rank based on index
  // }));

  // const rankings = [
  //   { category: "Đại học", rank: "#1" },
  //   { category: "Sau đại học", rank: "#2" },
  //   { category: "Nghiên cứu sau đại học", rank: "#3" }
  // ];

  

  return (
    <>
      {/* <div key={(uni as { id: string })?.id}> */}
      <div key={data.id}>
          <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-96">
          <div className="absolute inset-0">
            <img
              // src={`https://${schoolImages[0]}`}
              src={data.img1}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-8 text-white">
              {/* <h1 className="text-4xl font-bold mb-2">{(data as { name: string })?.name}</h1> */}
              <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt />
                {/* <span>Sydney, NSW 2052, Australia</span> */}
                <span>{data.region}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b">
          <nav className="flex space-x-8 px-8">
            {["Thông tin", "Chương trình", "Đầu vào", "Ảnh"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {activeTab === "Thông tin" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Thông tin cơ bản</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Trụ sở chính</h3>
                    {/* <p>Kensington campus: The unceded territory of the Bedegal</p> */}
                    <p>{data.mainAddress}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Campus phụ</h3>
                    {/* <p>City and Paddington Campuses: Gadigal, UNSW Canberra: Ngunnawal</p> */}
                    {/* <p>{data.subAddress}</p> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subAddress.map((address : any, index : any) => (
                        <div
                          key={index}
                          className="p-4 bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-sm font-medium text-gray-700">{address}</h3>
                        </div>
                      ))}
                    </div>

                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* <div>
                      <h3 className="font-semibold">IELTS Requirement</h3>
                      <p>{data.IELTS}</p>
                    </div> */}
                    <div>
                      <h3 className="font-semibold">Số lượng ngành</h3>
                      <p>{data.numOfMajor}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Thông tin học phí</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Trung bình</p>
                      <p className="text-2xl font-bold">${data.avgTuition}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rẻ nhất</p>
                      <p className="text-2xl font-bold">${data.minTuition}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Đắt nhất</p>
                      <p className="text-2xl font-bold">${data.maxTuition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Chương trình" && (
            <div>
              {/* <h2 className="text-2xl font-bold mb-6">Academic Programs</h2> */}
              <h2 className="text-2xl font-bold mb-6">Các ngành học trong trường</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bacDaoTao.map((program: any, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <FaGraduationCap className="text-3xl text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold">{program}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Đầu vào" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Yêu cầu tuyển sinh</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
              {data.img5 ? 
                  <img
                  // src={`https://${schoolImages[0]}`}
                  src={data.img5}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
                  :
                  <></>}
              </div>
            </div>
          )}

          {activeTab === "Ảnh" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Kho ảnh</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {schoolImages.map((image, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <img
                      src={`https://${image}`}
                      alt={`Campus view ${index + 1}`}
                      className="object-cover rounded-lg"
                      // onError={(e) => {
                      //   e.target.src = "https://via.placeholder.com/400x300?text=Campus+Image";
                      // }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 p-8 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaUniversity className="text-2xl text-blue-500" />
              <div>
                <h3 className="font-semibold">Các bậc</h3>
                <div className="flex space-x-4">
                  {rankings.map((rank : any, index : any) => (
                    <span key={index} className="text-sm text-gray-600">
                      {rank.category}: {rank.rank}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={`https://${data.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
            >
              <FaGlobe />
              <span>Thăm trường</span>
            </a>
          </div>
        </div>
      </div>
    </div>
      </div>

    </>
  );
};

export default SchoolDetailPage;


// const SchoolDetail = () => {

//   const { schoolId } = useParams();
//   console.log(schoolId, "PARAMMMMMMMMMMMMM");


//   const [data, setData] = useState<any>([])
//   useEffect(() => {
//     fetch(`https://66fd67c269936930895514d7.mockapi.io/School/${schoolId}`)
//       .then(response => response.json())
//       .then(data => { setData(data) })

//   }, []);

//   return (
//     <div className={styles.card}>

//       <div key={data.id}>
//         <Card className={styles.cardItem}>
//           <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//             <p className="text-tiny uppercase font-bold">{data.name}</p>
//             <small className="text-default-500">{data.numOfMajor} ngành</small>
//           </CardHeader>
//           <CardBody className="flex-row overflow-visible py-2 place-content-around">
            
//             <img className="flex-row overflow-visible py-2 place-content-around"
//               width={150} height={150}
//               src={data.img1} alt="Card background" />
//             <div className='flex-col'>
//               <div>IELTS: <b>{data.IELTS}</b></div>
//               <div>TOEIC: <b>{data.TOEIC}</b></div>
//               <div>HSK: <b>{data.HSK}</b></div>
//               <div>JPLT: <b>{data.JPLT}</b></div>

//             </div>
//           </CardBody>
//           <CardFooter className="p-3 h-auto w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-between items-center">
//             <h4 className="block text-small text-default-500"> Địa chỉ: {data.region}</h4>
//             <h4 className="font-bold text-large">Ranking: #{data.avgTuition}</h4>
//           </CardFooter>
//         </Card>

//       </div>

//     </div>
//   )
// };

// export default SchoolDetail;