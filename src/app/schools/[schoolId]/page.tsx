'use client'
import { useParams } from 'react-router-dom';
import { useRouter, useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './schools.module.css';


const SchoolDetail = (props : any) => {
  const {params} = props;
  const  id  = params?.id;
  const router = useRouter();
  
  // const { id } = router.query;
  console.log(router, "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
  // const { id } = useParams();
  // const id = useSearchParams();
  console.log("ID :" ,id);
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://66fd67c269936930895514d7.mockapi.io/School/${id}`)
      .then(response => response.json())
      .then(data => { setData(data) })

  }, []);
  // const router = useRouter();
  return (
    <div className={styles.card}>
      {/* {data.map((data, idx) => ( */}
      <div key={data.id}>
        <Card className={styles.cardItem}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{data.name}</p>
            <small className="text-default-500">{data.numOfMajor} ngành</small>
          </CardHeader>
          <CardBody className="flex-row overflow-visible py-2 place-content-around">
            {/* <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={data.img1}
                  width={150}
                  height={150}
                /> */}
            <div className='flex-col'>
              <div>IELTS: <b>{data.IELTS}</b></div>
              <div>TOEIC: <b>{data.TOEIC}</b></div>
              <div>HSK: <b>{data.HSK}</b></div>
              <div>JPLT: <b>{data.JPLT}</b></div>

            </div>
          </CardBody>
          <CardFooter className="p-3 h-auto w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-between items-center">
            <h4 className="block text-small text-default-500"> Địa chỉ: {data.region}</h4>
            <h4 className="font-bold text-large">Ranking: #{data.avgTuition}</h4>
          </CardFooter>
        </Card>
        {/* </button> */}
        {/* </Link> */}
      </div>
      {/* ))} */}
    </div>
  )
};

export default SchoolDetail;