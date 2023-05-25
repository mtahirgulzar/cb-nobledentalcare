import React from "react";
import { useRouter } from "next/router";

export default function HomeAbout({ data }) {
  const router = useRouter()
  return (
    <div className="relative overflow-hidden">
      <div
        className=""
        style={{
          background: `url('images/home/about.png') no-repeat center center/cover  `,
        }}
      >
        <div className="bg-gradient-to-r from-[#E9D8BA] bg-opacity-50 lg:overflow-hidden py-[120px]">
          <div data-aos="zoom-in" className="max-w-[1140px] mx-auto  px-4">
            <div className=" max-w-[556px] ">
              <h2 className="text-[33px]  sm:text-[45px] md:text-[55px] leading-[40px] sm:leading-[60px] md:leading-[60px] font-[900] text-[#08342E] ">
                {/* {data?.head?.headline} */}
                {data?.title}
              </h2>
              <p className="text-[#08342E] text-[17px] font-[700] leading-[60px]">
                {data?.tagline}
              </p>

              <div className="max-w-[360px] h-[1px] bg-[#BFBAA3] my-[15px]" />

              <p className="text-[17px] leading-[25px] text-[#281C08] font-normal mb-[35px]">
                {data?.description}
              </p>
              <div className="">
                <div className="">
                    <button onClick={() => router.push(data?.cta?.link)} className="text-[17px] leading-[25px] font-[900]  px-[25px]  py-[10px] btn border-[1px] border-[#281C08] hover:bg-black hover:text-white text-[#281C08] duration-300 transition-all w-full sm:w-auto">
                    {data?.cta?.name}
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
