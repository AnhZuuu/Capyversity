import React from "react"
import Schools from "@/components/schools/schools";

const SchoolsPage = async (props: any) => {
    // const [liked, setLiked] = useState(false);
    return (
        <>
            <nav style={{ backgroundColor: '#383434' }}>
                <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                    <span className='text-3xl text-white text-shadow-black text-md font-bold'>Trường</span>
                    <div className='text-1xl text-white text-shadow-black text-md'>Không chỉ là du học, mà là một cuộc phiêu lưu không ngừng...</div>
                </div>
                <Schools />
            </nav>
        </>
    )

}

export default SchoolsPage;


