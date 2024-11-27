import React from 'react'
import Blogs from '@/components/blogs/blogs'
import "@/app/css/App.css";


export default function BlogPage() {
  return (
    // <nav style={{backgroundColor: '#383434'}}>
    <nav style={{backgroundColor: '#00001C'}}>
        <div style={{textAlign: 'center', paddingTop: '50px'}}>
            <span className='text-3xl text-white text-shadow-black text-md font-bold'>Trang chia sẻ</span>
            <div className='text-1xl text-white text-shadow-black text-md'>Nơi các bạn chia sẻ trải nghiệm và kinh nghiệm.</div>
        </div>
        <Blogs/>
    </nav> 
  )
}