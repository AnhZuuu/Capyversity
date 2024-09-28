import React from 'react'
import Blogs from '@/components/blogs/blogs'

export default function BlogPage() {
  return (
    <nav style={{backgroundColor: '#383434'}}>
        <div style={{textAlign: 'center', paddingTop: '50px'}}>
            <span className='text-3xl text-white text-shadow-black text-md font-bold'>Blog page</span>
            <div className='text-1xl text-white text-shadow-black text-md'>All the latest blogs about Aboard Study.</div>
        </div>
        <Blogs/>
    </nav> 
  )
}