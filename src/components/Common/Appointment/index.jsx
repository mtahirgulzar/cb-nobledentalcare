import React from "react";
import { useRouter } from "next/router";

export default function Appointment({ data }) {
  const router = useRouter();
  return (
    <div className="bg-[#E7DABF]">
      <div className=" max-w-[1140px] mx-auto px-4 flex flex-col sm:flex-row gap-y-5 justify-between py-[60px]">
        <div>
          <h3 className="text-[30px] mb-5 leading-[35px] text-[#08342e] font-black">
            {data?.headline}
          </h3>
          <p className="text-[17px] leading-6 text-[#08342e]">
            {data?.tagline}
          </p>
        </div>
        <div className="flex items-center ">
          <button
            onClick={() => router.push(data?.cta?.link)}
            className="px-[25px]  py-[10px] border-[1px] border-[#08342e] text-[17px] leading-6 font-black text-[#08342e] hover:bg-[#08342e] hover:text-white hover:border-[#fff] duration-300 transition-all"
          >
            {data?.cta?.name}
          </button>
        </div>
      </div>
    </div>
  );
}
