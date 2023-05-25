import React from "react";

export default function CommonServiceHero() {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <div
          className=""
          style={{
          background: `url('images/home/service1.png') no-repeat center center/cover  `,
        }}
        >   
          <div className="bg-[#E9D8BA] bg-opacity-90 lg:overflow-hidden py-[160px]">
            <div data-aos="zoom-in" className="max-w-[1140px] mx-auto  px-4">
              <div className=" max-w-[556px]  ">
                <h2 className="text-[33px]  sm:text-[45px] md:text-[55px] leading-[40px] sm:leading-[60px] md:leading-[60px] font-[900] text-[#281C08] mb-[10px]">
                  Our Services
                </h2>

                <div className="max-w-[360px] h-[1px] bg-[#BFBAA3] my-[35px]" />

                <p className="text-[17px] leading-[25px] text-[#281C08] font-normal mb-[45px]">
                  {/* {data?.head?.description} */}
                  We provide personalized, comprehensive and gentle dental care
                  in a relaxed, patient-friendly setting, individualized care in
                  a supportive, comfortable environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
