import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { imageResolver } from "../../../utils/helpers";

export default function HomeServices({ data }) {
  const router = useRouter();
  return (
    <div
      className="object-cover w-full h-full"
      style={{
        background: `url('images/home/service.png') no-repeat center center/cover `,
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4 grid lg:grid-cols-2 py-[50px]">
        <div className="flex flex-col justify-center ">
          <h4 className="text-[#F5DFBB] text-[13px] font-[900] leading-[20px] tracking-[1px] uppercase">
            {data?.tagline}
          </h4>
          <h2 className="text-[#F5F9FC] text-[33px] sm:text-[55px] leading-[40px] sm:leading-[60px] font-[900] pt-[10px] pb-[20px]">
            {data?.title}
          </h2>
          <p className="text-[#D4EEEB] text-[17px] leading-[25px] font-normal">
            {data?.description}
          </p>
          <div className="mt-[40px]">
            <button
              className="text-[17px] leading-[25px] font-[900] py-[10px] px-[25px] btn text-white border-[1px] border-[#ffff] hover:bg-white hover:text-[#1F8C7F] w-full sm:w-auto"
              onClick={() => router.push(data?.cta?.link)}
            >
              {data?.cta?.name}
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-y-[20px] pt-[40px] sm:pt-0">
          {data?.card?.map((item, index) => {
            return (
              <div
                key={index}
                className="p-[10px] text-center sm:text-start bg-[#339384] sm:bg-transparent"
              >
                <img
                  className="mx-auto sm:mx-0"
                  src={imageResolver(item.img)?.path}
                  loading="lazy"
                  alt={item?.img?.data?.attributes?.alternativeText}
                ></img>
                <h2 className="pb-[15px] text-[25px] leading-[30px] font-[900] text-[#F5F9FC]">
                  {item.headline}
                </h2>
                <p className="text-[17px] leading-[25px] text-[#D4EEEB] font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
