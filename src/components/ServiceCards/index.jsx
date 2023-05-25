import React from "react";
import ServiceCard from "../Common/ServiceCard";

export default function ServiceCards({ data, servicesData }) {
  return (
    <div id="serviceCard" className="py-[80px] max-w-[1140px] mx-auto px-4">
      <div className="text-center">
        <h2 className="text-[#08342e]  text-[35px] sm:text-[55px] leading-[40px] sm:leading-[60px] font-black mb-5">
          {data?.title}
        </h2>
        <p className="mb-[60px] text-[17px] leading-8 text-[#08342e] max-w-[750px] mx-auto">
          {data?.description}
        </p>
      </div>
      <div className="max-w-[1140px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[10px] gap-y-[15px]">
        {servicesData?.map((item, index) => (
          <div key={index}>
            <ServiceCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
