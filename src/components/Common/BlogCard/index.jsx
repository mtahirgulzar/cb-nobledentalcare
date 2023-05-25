import React from "react";




export default function BlogDetailCard({ data }) {
  const result = new Date(data?.date).toLocaleDateString('en-GB');
  return (
    <div>
      <div className="">

        <div className="">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <div className="relative">

              <img
                loading="lazy"
                alt="blog detailCard image"
                className="w-full rounded-t-lg hover:cursor-pointer   h-[230px] object-cover"
                src={data?.image}
              ></img>
              <div className="absolute top-0 hover:cursor-pointer h-full w-full bg-[black] rounded-t-lg bg-opacity-10 hover:bg-opacity-0 btn">
              </div>
              <div>
                <p className="absolute top-[25px] right-[25px] bg-[#17786C] px-[14px] py-[1px] rounded-[15px]"><span className="text-[12px] leading-[12px] font-medium text-white">{data?.headline}</span></p>

              </div>
            </div>
            <div className="">
              <div className="px-[30px] mt-[20px] min-h-[190px]">
                <h2 className="text-[17px] leading-[24px] text-[#08342e] font-black mb-[25px] text-center hover:cursor-pointer">
                  {data?.heading}
                </h2>
                <p className="text-[14px] leading-[25px] text-[#777777] font-light mb-[25px] text-center">
                  {data?.description}
                </p>
              </div>
              <div className="px-[30px] py-[15px]  border-solid border-t-[1px] border-[#eaeaea] text-center">
                <span className="text-[13px]  leading-[25px] text-[#08342e] font-normal">{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

