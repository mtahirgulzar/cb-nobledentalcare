import Link from "next/link";
import React from "react";
import { imageResolver } from "../../../../utils/helpers";
import styles from "./style.module.css";

export default function ServiceCard({ data }) {
  return (
    <div
      className={`flex min-h-full items-start bg-[#17766A] duration-300 transition-all shadow-2xl  ${styles.cusHover}`}
    >
      <Link href={`/our-services/${data?.attributes?.slug}`} legacyBehavior>
        <a href={`/our-services/${data?.attributes?.slug}`}>
          <div className="parent flex flex-col justify-center mb-auto min-h-full  p-[35px] ">
            <div className="bg-[#08342E] px-[25px] py-[25px] max-w-[150px] mx-auto rounded-[50px]">
              <div className="w-[50px] h-[50px]">
                {" "}
                <img
                  className="w-full h-full"
                  src={imageResolver(data?.attributes?.cardImage).path}
                  loading="lazy"
                  alt={data?.attributes?.cardImage?.data?.attributes?.alternativeText}
                />
              </div>
            </div>
            <div className="text-center">
              <h2
                className={` text-[22px] leading-[26px] font-semibold my-[22px] text-white duration-300 transition-all ${styles.hoverText}`}
              >
                {data?.attributes?.title}
              </h2>
              <p
                className={`  text-[17px] leading-[29px] font-normal text-white duration-300 transition-all ${styles.hoverText}`}
              >
                {data?.attributes?.description}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
