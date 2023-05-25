import Link from "next/link";
import React from "react";
import Mail from "../Common/icon/Mail";
import Map from "../Common/icon/Map";
import Phone from "../Common/icon/Phone";
import Prienter from "../Common/icon/Prienter";
import { useRouter } from "next/router";

export default function HomeContact({ data }) {
  const router = useRouter();
  return (
    <div className="bg-[#E7DABF]">
      <div className="max-w-[1140px] mx-auto px-4 grid md:grid-cols-2 py-[60px] gap-x-[20px]">
        <div className="flex flex-col justify-center">
          <h2 className="text-[33px] md:text-[60px] lg:text-[70px] leading-[40px] md:leading-[75px] font-[900] text-[#2A2006] ">
            {data?.title}
          </h2>
          <h4 className="text-[20px] md:text-[25px] leading-[30px] font-[900] text-[#2A2006] mt-[10px] ">
            {data?.tagline}
          </h4>
          <Link href={`${data?.cta[6]?.link}`} legacyBehavior>
            <div className="pt-[30px] flex items-center gap-x-[5px]">
              <Map />
              <p className="max-w-[190px] text-[17px] leading-[25px] font-normal text-[#54400D]">
                <a href={`${data?.cta[6]?.link}`}>{data?.cta[6]?.name}</a>
              </p>
            </div>
          </Link>
          <Link href={`mailto:${data?.cta[0]?.link}`} legacyBehavior>
            <div className="pt-[20px]  flex items-center gap-x-[5px] hover:cursor-pointer">
              <Mail />
              <p className="text-[17px] leading-[35px] font-normal text-[#54400D]">
                <a href={`mailto:${data?.cta[0]?.link}`}>
                  {data?.cta[0]?.name}
                </a>
              </p>
            </div>
          </Link>
          <div className="pt-[10px] flex items-center gap-x-[5px]">
            <Phone />
            <div className="flex flex-col">
              <Link href={`tel:+${data?.cta[1]?.link}`} legacyBehavior>
                <p className="text-[17px] leading-[35px] font-normal text-[#54400D]">
                  <a href={`tel:+${data?.cta[1]?.link}`}>
                    {data?.cta[1]?.name}
                  </a>
                </p>
              </Link>
              <Link href={`tel:+${data?.cta[2]?.link}`} legacyBehavior>
                <p className="text-[17px] leading-[35px] font-normal text-[#54400D]">
                  <a href={`tel:+${data?.cta[2]?.link}`}>
                    {data?.cta[2]?.name}
                  </a>
                </p>
              </Link>
            </div>
          </div>

          <Link href={`tel:+${data?.cta[3]?.link}`} legacyBehavior>
            <div className="pt-[10px] flex items-center gap-x-[5px] ">
              <Prienter />
              <button
                onClick={() => router.push(`tel:+${data?.cta[3]?.link}`)}
                className="text-[17px] leading-[35px] font-normal text-[#54400D]"
              >
                {data?.cta[3]?.name}
              </button>
            </div>
          </Link>
          <div className="mt-[25px]  sm:flex gap-x-[40px]">
            <div className="py-[10px] sm:py-0">
              <button
                onClick={() => router.push(`tel:+${data?.cta[4]?.link}`)}
                className="text-[17px] leading-[25px] font-[900]  px-[25px]  py-[10px] border-[1px] border-[#2A2006] hover:bg-black hover:text-white text-[#2A2006] duration-300 transition-all w-full sm:w-auto"
              >
                {data?.cta[4]?.name}
              </button>
            </div>
            <div className="py-[10px] sm:py-0">
              <button
                onClick={() => router.push(data?.cta[5]?.link)}
                className="text-[17px] leading-[25px] font-[900]  px-[25px] btn py-[10px] border-[1px] border-[#2A2006] hover:bg-black hover:text-white text-[#2A2006] duration-300 transition-all w-full sm:w-auto"
              >
                {data?.cta[5]?.name}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[40px] md:mt-0">
          <div className="w-full h-[470px]">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="510"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=34603 Alvarado-Niles Rd&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
