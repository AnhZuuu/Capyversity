import React from 'react'
import "@/app/css/App.css";
import News from '@/components/news/news';


export default function NewsPage() {
  return (
    // <nav style={{backgroundColor: '#383434'}}>
    <nav style={{backgroundColor: '#00001C'}}>
        <div style={{textAlign: 'center', paddingTop: '50px'}}>
            <span className='text-3xl text-white text-shadow-black text-md font-bold'>Trang tin tức</span>
            <div className='text-1xl text-white text-shadow-black text-md'>Nơi các bạn xem các tin tức tại các khu vực và các trường.</div>
        </div>
        <News/>
    </nav> 
  )
}