"use client";
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';

function page() {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const videoRef = useRef(null); // อ้างอิง video element
    // const [isPlaying, setIsPlaying] = useState(true); // สถานะของการเล่นเสียง

    const handleVideoEnd = () => {
        setIsVideoEnded(true);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.play(); // เล่นวิดีโอเมื่อเพจโหลด
        }
      }, []);
    
    //   const toggleVideo = () => {
    //     const videoElement = videoRef.current;
    //     if (isPlaying) {
    //         videoElement.pause(); // หยุดเล่นเสียง
    //     } else {
    //         videoElement.play(); // เล่นเสียง
    //     }
    //     setIsPlaying(!isPlaying); // เปลี่ยนสถานะการเล่นเสียง
    //   };

    return (
        <main div className="w-full h-screen flex flex-col justify-center items-center bg-[#161D23] z-0">
            <div>
                <div className="w-[330px] h-[610px] flex flex-col justify-center items-center mb-5 text-white text-2xl text-center max-[380px]:w-[300px] max-[380px]:h-[390px] max-[380px]:text-xl">
                    <p>สุขสันต์วันเกิดหนาค้าบ</p>
                    <p>ข้าวหอมคนเก่ง ในวัย 18 ปี ของพี่</p>
                    <div className="flex flex-col justify-center items-center">
                        <video controls onEnded={handleVideoEnd} ref={videoRef} className="w-[278px] h-[490px] mt-6 max-[380px]:w-[176px] max-[380px]:h-[310px] max-[380px]:mt-3">
                            <source src="/video/Video-HBD.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className="w-9/12 h-12 flex justify-center items-center">
                {isVideoEnded && (
                    <Link href='/Pages/Wish'>
                        <span className="py-2 px-6 text-2xl font-bold bg-[#EBBA7C] rounded-lg hover:rounded-3xl  max-[380px]:text-xl">
                            เริ่มเดินทางต่อ
                        </span>
                    </Link>
                )}
            </div>
        </main>
    )
}

export default page
