'use client'
import React from 'react'
import { blogs } from '@/data/blogData'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from 'antd'
import styles from './blogs.module.css';

const Blogs = () => {
  return (
    <div className={styles.card}>
        {blogs.map((elem, idx) => (
            <div key={idx}>
                 <Card className={styles.cardItem}>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">{elem.title}</p>
                        <small className="text-default-500">{elem.content}</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={elem.image}
                        width={270}
                        height={150}
                        />
                    </CardBody>
                    <CardFooter className="p-3 h-auto w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-between items-center">
                        <h4 className="block text-small text-default-500">{elem.date}</h4>
                        <h4 className="font-bold text-large">{elem.author}</h4>
                    </CardFooter>
                </Card>
            </div> 
         ))}
    </div>
  )
}

export default Blogs