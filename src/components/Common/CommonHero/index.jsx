import React from "react";
import { useRouter } from "next/router";
import { imageResolver } from "../../../../utils/helpers";

export default function CommonHero({ data, blog }) {
  const router = useRouter()
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <div
          className=""
          style={{
            background: `${
              data?.imagePath
                ? `url('https://admin.nobledentalcares.com/uploads/${data?.imagePath}') no-repeat center center/cover `
                : `url('${
                    imageResolver(data?.img).path
                  }') no-repeat center center/cover`
            } `,
          }}
        >
          <div className="bg-[#E9D8BA] bg-opacity-90 lg:overflow-hidden py-[160px] ">
            <div
              data-aos="zoom-in"
              className="max-w-[1140px] mx-auto  px-4 mt-12"
            >
              <div className=" max-w-[556px]  ">
                <h2 className="text-[33px]  sm:text-[45px] md:text-[55px] leading-[40px] sm:leading-[60px] md:leading-[60px] font-[900] text-[#08342E] mb-[10px]">
                  {data?.headline || data?.title}
                </h2>
                <div className="max-w-[360px] h-[1px] bg-[#BFBAA3] my-[35px]" />
                {blog ? (
                  ""
                ) : (
                  <p className="text-[17px] leading-[25px] text-[#281C08] font-normal mb-[45px]">
                    {data?.description}
                  </p>
                )}

                <div className="">
                  {data?.cta?.name && (
                    <div className="">
                          <button onClick={() => router.push(data?.cta?.link)} className="text-[17px] leading-[25px] font-[900]  px-[25px]  py-[10px] border-[1px] border-[#281C08] hover:bg-black hover:text-white text-[#281C08] duration-300 transition-all w-full sm:w-auto">
                            {data?.cta?.name}
                          </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
