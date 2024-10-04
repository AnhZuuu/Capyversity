
import LoadingCat from "@/components/loading-cat/page"
import { universityData } from "@/data/universityData"
import React from "react"
// import { useState } from 'react';
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import HeartIcon from "@/components/heart_icon/page";
import Schools from "@/components/schools/schools";

const SchoolsPage = async (props: any) => {
    // const [liked, setLiked] = useState(false);
    return (
        <>
            <nav style={{ backgroundColor: '#383434' }}>
                <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                    <span className='text-3xl text-white text-shadow-black text-md font-bold'>Schools page</span>
                    <div className='text-1xl text-white text-shadow-black text-md'>Schools for Aboard Study.</div>
                </div>
                <Schools />
            </nav>
        </>
    )

}

export default SchoolsPage;


