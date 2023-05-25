import { useRouter } from "next/router";
import React from "react";

export default function HomeHero({ data }) {
  const router = useRouter()
  return (
    <div className="bg-[#1E7C70]  ">
      <div className="max-w-[1400px] relative mx-auto w-full mt-12">
        <div className="max-w-[1140px] mx-auto px-4 pt-[180px] z-40 relative">
          <div className="">
            <div className="">
              <p className="text-[#F5F9FC] text-[13px] leading-[19px] font-black ">
                {data?.taglineone}
              </p>
              <p className="text-[#F5F9FC] text-[13px] leading-[19px] font-black">
                {data?.tagline}
              </p>
              <h2 className="text-[44px]  md:text-[75px] lg:text-[95px] leading-[53px] md:leading-[75px] lg:leading-[100px] text-[#F5F9FC] font-black max-w-[649px] mb-10 ">
                {data?.headline}
              </h2>
              <p className="text-[#D4EEEB] text-[17px] leading-[25px] font-normal max-w-[555px] mb-[20px] sm:mb-10">
                {data?.description}
              </p>
              <div>
                  <button onClick={() => router.push(data?.cta?.link)} className="bg-[#F5DFBB] border-[#2A2006] border-[1px] btn hover:bg-white py-[10px] px-[25px] w-full sm:w-auto mb-[50px] sm:mb-0">
                   {data?.cta?.name}
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[895px] sm:absolute right-0 top-0 ">
            <img
              src="/images/home/hero-bg.webp"
              alt="hero banner"
              loading="lazy"
            />
          </div>
        </div>
        <div className="max-w-[1140px]  mx-auto px-4 mt-[63px] pb-[75px]">
          <div className="grid sm:grid-cols-3 gap-x-[30px]">
            {data?.herocard?.map((item, index) => (
              <div key={index} className="py-[10px]">
                <div className="border-b-[1px] border-[#FFFFFF]">
                  <p className="mb-2 text-[#FFFFFF] font-black text-[17px] leading-[25px]">
                    {item.number}
                  </p>
                </div>
                <div>
                  <p className="mt-6 text-[#FFFFFF] font-normal text-[17px] leading-[25px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
