import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "../Hamburger";
import styles from "./style.module.css";
import MegaMenu from "../Common/MegaMenuCom";
import { useRouter } from "next/router";
import Phone from "../Common/icon/Phone";
import Mail from "../Common/icon/Mail";
import Map from "../Common/icon/Map";

function Header({ data, navServices, navCat }) {
  const router = useRouter();
  const insCat = router?.asPath?.slice(14);
  const currentRoute = router.pathname.slice(0);
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu, setIsSubmenu] = useState(false);

  return (
    <>
      <div className="relative z-50 w-full">
        <div className="fixed top-0 left-0 right-0 mx-auto">
          <div className="bg-white p-[10px]">
            <div className="flex items-center justify-center">
              <div className="w-fit flex gap-x-[5px] items-center">
                <div className="">
                  <Phone />
                </div>
                <div className="">
                  <a
                    href="tel:+5104932130"
                    className="text-[#17786C] text-[13px]"
                  >
                    (510) 493-2130
                  </a>
                </div>
                <div className="">
                  <a href="https://www.google.com/maps/place/34603+Alvarado-Niles+Rd,+Union+City,+CA+94587,+USA/@37.5862491,-122.0218458,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbfdf18ff13a7:0xbf1195867ec14325!8m2!3d37.5862491!4d-122.0196571?shorturl=1">
                    {/* <Location/> */}
                    <Map />
                  </a>
                </div>
                <div className="">
                  <a href="mailto:contact@nobledentalcares.com">
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper bg-[#17786C] relative overflow-visible shadow-lg">
            <div className="max-w-[1146px] mx-auto px-4 flex justify-between">
              <div className="flex items-center justify-between w-full h-full">
                <div className="lg:py-[19.5px] py-2 flex items-center ">
                  <Link href="/">
                    <img
                      src="/images/home/logo.webp"
                      alt="logo"
                      className="cursor-pointer sm:w-[250px] w-[180px]"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="">
                  <div className="hidden px-4 lg:flex">
                    {data?.map((item, index) => (
                      <div key={index} className="pr-[40px]  overflow-visible">
                        {/* <Link href={item.link || "/"}> */}
                        <div
                          onMouseEnter={() => index === 1 && setIsSubmenu(true)}
                          className={`flex items-center ${styles.cusMenu}`}
                        >
                          <p
                            className={`text-[14px] leading-[25px] hover:text-[#E7DABF] cursor-pointer font-normal  ${
                              currentRoute == item.link
                                ? "text-[#E7DABF]  "
                                : "text-[#fff]"
                            }`}
                          >
                            {<Link href={`${item.link}`}>{item.title}</Link>}
                          </p>
                          <div className={`${index !== 1 && "hidden"} mt-1`}>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 20 20"
                                fill="#fff"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <div className={`${!isSubMenu && "hidden"}`}>
                              <MegaMenu
                                insCat={insCat}
                                data={navCat}
                                services={navServices}
                                setIsSubmenu={setIsSubmenu}
                                setIsMenu={setIsMenu}
                              />
                            </div>
                          </div>
                        </div>
                        {/* </Link> */}
                      </div>
                    ))}
                  </div>
                  <div className="lg:hidden flex items-center bg-white  h-[32px] w-[40px] justify-center ">
                    <Hamburger
                      isMenu={isMenu}
                      setIsMenu={setIsMenu}
                      isSubMenu={isSubMenu}
                      setIsSubmenu={setIsSubmenu}
                      data={data}
                      navServices={navServices}
                      navCat={navCat}
                    />
                  </div>
                </div>
                <Link
                  className="hidden lg:block"
                  href={`https://www.google.com/maps/place/34603+Alvarado-Niles+Rd,+Union+City,+CA+94587,+USA/@37.586271,-122.0196403,17.04z/data=!4m6!3m5!1s0x808fbfdf18ff13a7:0xbf1195867ec14325!8m2!3d37.5862491!4d-122.0196571!16s%2Fg%2F11bw4391f8`}
                  legacyBehavior
                >
                  <a
                    className="hidden lg:block"
                    href={`https://www.google.com/maps/place/34603+Alvarado-Niles+Rd,+Union+City,+CA+94587,+USA/@37.586271,-122.0196403,17.04z/data=!4m6!3m5!1s0x808fbfdf18ff13a7:0xbf1195867ec14325!8m2!3d37.5862491!4d-122.0196571!16s%2Fg%2F11bw4391f8`}
                  >
                    <div className=" gap-x-[4px] items-center  lg:flex hidden">
                      <div>
                        <Map fill="#ffffff" />
                      </div>
                      <div className="text-[#fff] font-normal leading-[25px] text-[13px]">
                        34603 Alvarado Niles Rd, Union City, CA 94587
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
