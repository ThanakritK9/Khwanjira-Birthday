"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-[#161D23] z-0">
      <div className="w-[330px] h-[610px] flex flex-col justify-center items-center mb-5 text-white text-2xl text-center max-[380px]:w-[300px] max-[380px]:h-[390px] max-[380px]:text-xl">
        <p>ฟู่ว~~ เทียนดับแล้ว</p>
        <p>พอจะทำคนเก่งของพี่ยิ้มได้ไหมเอ่ย ?</p>
        <div className="flex justify-center mt-6 ">
          <Image
            src="/image/wish.png"
            width={330}
            height={330}
            class="object-contain object-center"
          />
        </div>
      </div>
      <div className="w-9/12 h-12 flex justify-center items-center">
        <Link href='https://line.me/ti/p/e-XxCPdC_n'>
          <span className="py-2 px-6 text-2xl font-bold bg-[#EBBA7C] rounded-lg hover:rounded-3xl max-[380px]:text-xl">
             สิ้นสุดการเดินทาง
          </span>
        </Link>
      </div>
    </main>
  )
}

export default page