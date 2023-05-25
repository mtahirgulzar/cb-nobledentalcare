import React from "react";
import { imageResolver } from "../../../utils/helpers";

export default function HomeDoctor({ data }) {
  return (
    <div
      style={{
        background: `url('images/home/HomeDoctor.png') no-repeat center center/cover `,
      }}
    >
      <div className="max-w-[1140px] px-4 mx-auto  py-[60px]">
        <h4 className="text-[#F5DFBB] text-[13px] font-[900] leading-[20px] tracking-[1px] uppercase">
          {data?.tagline}
        </h4>
        <h2 className="text-[#F5F9FC] text-[33px] sm:text-[55px] leading-[40px] sm:leading-[60px] font-[900] pt-[10px] pb-[20px]">
          {data?.headlineone}
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="py-[10px]">
            <div className="relative flex">
              <div className="h-[200px] md:h-[350px] w-[200px] md:w-[263px]">
                <img
                  className="object-cover w-full h-full"
                  src={imageResolver(data?.img)?.path}
                  loading="lazy"
                  alt="home doctor"
                />
              </div>

              <p className="pl-[20px] text-[17px] leading-[25px] font-normal text-[#14675C] ">
                {data?.founder}
              </p>
              <h2 className="absolute  left-[120px] md:left-[190px] bottom-5 md:bottom-12 text-[33px] md:text-[45px] lg:text-[55px] leading-[40px] md:leading-[50px] lg:leading-[60px] font-[900] max-w-[240px] md:max-w-[350px]  text-[#F5F9FC]">
                {data?.headlinetwo}
              </h2>
            </div>
          </div>
          <div>
            <p className="text-[17px] leading-[25px] font-normal text-[#E8F4F3] py-[10px]">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
