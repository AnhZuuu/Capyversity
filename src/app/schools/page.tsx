'use client'
import React, { useEffect, useState } from "react"
import Schools from "@/components/schools/schools";
import "@/app/css/App.css";
import Schools_Premium1 from "@/components/schools_premium/schools_premium1";
import SchoolCollection from "@/components/schoolcollection/schoolcollection";
import SchoolCollection2 from "@/components/schoolcollection/schoolcollection2";

const SchoolsPage = () => {
    const [userInfo, setUserInfo] = useState<any>(null);
    // const [liked, setLiked] = useState(false);
    useEffect(() => {
        const storedUserInfo = localStorage.getItem("userInfo");
        if (storedUserInfo) {
          setUserInfo(JSON.parse(storedUserInfo));
        }
      }, []);
    return (
        <>
            {/* <nav style={{ backgroundColor: '#383434' }}> */}
            <nav style={{ backgroundColor: '#00001C' }}>
                <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                    <span className='text-3xl text-white text-shadow-black text-md font-bold'>Trường</span>
                    <div className='text-1xl text-white text-shadow-black text-md'>Không chỉ là du học, mà là một cuộc phiêu lưu không ngừng...</div>
                </div>
                {/* {userInfo && userInfo[0].isPremium ? <Schools_Premium1/> :<Schools /> } */}
                {/* {userInfo && userInfo[0].isPremium ? <SchoolCollection/> :<Schools /> } */}
                {userInfo && userInfo[0].isPremium ? <SchoolCollection2/> :<Schools /> }
                {/*  */}
                
            </nav>
        </>
    )

}

export default SchoolsPage;


