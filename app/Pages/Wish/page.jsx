"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-[#161D23] z-0">
      <div className="w-[330px] h-[450px] flex flex-col justify-center items-center mb-5 text-white text-2xl text-center max-[380px]:w-[300px] max-[380px]:h-[390px] max-[380px]:text-xl">
        <p>มาถึงหน้านี้แล้ว</p>
        <p>หลับตาอธิษฐานหนาค้าบ</p>
        <div className="w-[330px] h-[610px] flex flex-col justify-center items-center mb-5 max-[380px]:w-[300px] max-[380px]:h-[390px]">
        <div className="flex justify-center mt-4 max-[380px]:mt-3">
          <Image
            src="/image/18th fire.png"
            width={330}
            height={330}
            class="object-contain object-center"
          />
        </div>
        </div>
      </div>
      <div className="w-9/12 h-12 flex justify-center items-center">
        <Link href='/Pages/End'>
          <span className="py-2 px-6 text-2xl font-bold bg-[#EBBA7C] rounded-lg hover:rounded-3xl max-[380px]:text-xl">
            กดเมื่ออธิษฐานแล้ว
          </span>
        </Link>
      </div>
    </main>
  )
}

export default page