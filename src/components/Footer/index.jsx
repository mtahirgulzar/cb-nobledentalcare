import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { imageResolver } from "../../../utils/helpers";
export default function Footer({ data }) {
  const router = useRouter()
  const currentRoute = router.pathname.slice(0); 
  return (
    <div className="bg-[#248F82] pt-[80px]">
      <div className="max-w-[1140px] mx-auto px-4 md:grid grid-cols-2">
        <div>
          <div className="max-w-[280px] mb-[20px]">
            <Link href={"/"}>
              <img src={'/images/home/footerlogo.webp'} loading="lazy" alt="footer logo"/>
            </Link>
          </div>
          <p className="text-[17px] leading-[30px] font-normal text-white md:max-w-[340px]">
            {data?.about?.description}
          </p>
        </div>
        <div className="grid grid-cols-2 mt-[50px] md:mt-0">
          <div className="">
            <h2 className="mb-[20px] text-[20px] text-white font-[900]">
              {data?.about?.title}
            </h2>
            {data?.linkitems?.map((item, index) => {
              return (
                <div className="" key={index}>
                  <ul>
                    <Link href={`${item.link}`} legacyBehavior>
                        <li className={`text-[15px] leading-[35px] font-normal ${currentRoute == item.link
                          ? "text-[#E7DABF]  "
                          : "text-[#fff]"}`}>
                      <a href={`${item.link}`}>
                          {item.title}
                      </a>
                        </li>
                    </Link>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="lg:pl-10">
            <h2 className="mb-[20px] text-[20px] text-white font-[900]">
              {data?.openHour}
            </h2>
            {data?.timing?.map((item, index) => {
              return (
                <div className="" key={index}>
                  <p className="text-[15px] leading-[35px] font-normal  text-white">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center p-[10px] ">
        <p className="text-[17px] text-[#ffffff] leading-[30px] font-normal mb-[14px]">
          {data?.copyright[0]?.headline}
          <Link href={`${data?.copyright[0]?.taglinelink}`} legacyBehavior>
              <span className="underline hover:cursor-pointer">
            <a href={`${data?.copyright[0]?.taglinelink}`}>
               {data?.copyright[0]?.tagline}
            </a>
               </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
