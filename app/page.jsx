"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function page() {

  const audioRef = useRef(null); // อ้างอิง audio element
  const [isPlaying, setIsPlaying] = useState(true); // สถานะของการเล่นเสียง
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // แสดง popup เมื่อเพจโหลด
    setShowPopup(true);
  }, []);

  const handlePlayMusic = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play(); // เล่นเพลงเมื่อกดปุ่มตกลง
    }
    setShowPopup(false); // ปิด popup
  };
  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause(); // หยุดเล่นเสียง
    } else {
      audioElement.play(); // เล่นเสียง
    }
    setIsPlaying(!isPlaying); // เปลี่ยนสถานะการเล่นเสียง
  };

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-[#161D23] z-0">

      {/* Popup ที่แสดงเมื่อเพจโหลด */}
      {showPopup && (
        <div className="w-full h-full flex justify-center items-center fixed left-0 top-0 bg-[#00000080]">
          <div className="bg-[#161D23] p-5 rounded-lg border-2 border-[#EBBA7C] text-center text-white text-lg">
            <p>ยินต้อนรับคนเก่ง</p>
            <p>ถ้าพร้อมแล้วไปกันเลยไหมค้าบ</p>
            <p className="text-sm">( อย่าลืมเบาเสียงหนา )</p>
            <button onClick={handlePlayMusic} className="bg-[#EBBA7C] text-black px-2 py-1 rounded font-bold mt-3">
              ไปกันเลย
            </button>
          </div>
        </div>
      )}

      <div className="w-[330px] h-[450px] flex flex-col justify-center items-center mb-5 max-[380px]:w-[300px] max-[380px]:h-[390px]">
        <div className="flex justify-center">
          <Image
            src="/image/18th hbd.png"
            width={330}
            height={330}
            class="object-contain object-center"
          />
        </div>
      </div>
      <div className="w-9/12 h-12 flex justify-center items-center">
        <Link href='/Pages'>
          <span className="py-2 px-6 text-2xl font-bold bg-[#EBBA7C] rounded-lg hover:rounded-3xl max-[380px]:text-xl">
            เริ่มการเดินทาง
          </span>
        </Link>
      </div>
      <div>
      {/* Element audio สำหรับเล่นเพลง */}
      <audio ref={audioRef} loop>
        <source src="/music/hap hap na.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleAudio} className=" mt-7 text-white">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
    </main>
  )
}
