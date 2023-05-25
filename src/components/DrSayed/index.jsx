import React from "react";
import { imageResolver } from "../../../utils/helpers";

export default function Dr({ data }) {
  return (
    <div className="bg-[#259083]">
      <div className="max-w-[1140px] mx-auto px-4 py-[80px]">
        <div className="flex gap-x-6 ">
          <div className="w-[22%]">
            <img
              src={imageResolver(data?.about?.image).path}
              alt={data?.about?.image?.data?.attributes?.alternativeText}
              className="w-full h-[310px]"
              loading="lazy"
            />
          </div>
          <div className="w-[78%]">
            <h3 className="text-[24px] mb-5 leading-6 text-[#fff] font-semibold">
              {data?.about?.title}
            </h3>
            <p className="text-[17px] leading-6 text-[#fff] font-normal">
              {data?.description}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-[17px] leading-7 text-[#fff] font-normal">
            {data?.about?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
