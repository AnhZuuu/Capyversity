'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from 'antd'
import styles from './blogs.module.css';
import { useRouter } from 'next/navigation'

const Blogs = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://66fed8002b9aac9c997d9378.mockapi.io/blog`)
            .then(response => response.json())
            .then(data => { setData(data) })
    }, []);
    const router = useRouter();
  return (
    <div className={styles.card}>
        {data.map((blog, idx) => (
            <div key={(blog as { id: string })?.id}>
                <button onClick={() => router.push(`/blogs/${(blog as { id: string })?.id}`)}>

                    <Card className={styles.cardItem}>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">{ (blog as { title: string })?.title }</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={ (blog as { image: string })?.image }
                            width={270}
                            height={150}
                            />
                        </CardBody>
                        <CardFooter className="p-3 h-auto w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-between items-center">
                            <h4 className="block text-small text-default-500">{ (blog as { date: string })?.date }</h4>
                            <h4 className="font-bold text-large">{ (blog as { author: string })?.author }</h4>
                        </CardFooter>
                    </Card>
                </button>
            </div> 
         ))}
    </div>
  )
}

export default Blogs