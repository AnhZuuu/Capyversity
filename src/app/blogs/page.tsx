import React, { useEffect, useState } from 'react'
import "@/app/css/App.css";
import Blogs from '@/components/blogs/blogs';
import BlogPremium from '@/components/blogs_premium/blog_premium';

export default function BlogPage() {
  const [userInfo, setUserInfo] = useState<any>(null);
    
    useEffect(() => {
        const storedUserInfo = localStorage.getItem("userInfo");
        if (storedUserInfo) {
          setUserInfo(JSON.parse(storedUserInfo));
        }
      }, []);

  return (
    <nav style={{backgroundColor: '#383434'}}>
        <div style={{textAlign: 'center', paddingTop: '50px'}}>
            <span className='text-3xl text-white text-shadow-black text-md font-bold'>Trang chia sẻ</span>
            <div className='text-1xl text-white text-shadow-black text-md'>Nơi các bạn chia sẻ trải nghiệm và kinh nghiệm.</div>
        </div>
        {/* <Blogs/> */}
        {userInfo && userInfo[0].isPremium ? <BlogPremium/> :<Blogs/> }
    </nav> 
  )
}