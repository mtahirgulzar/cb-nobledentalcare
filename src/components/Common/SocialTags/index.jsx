import React from "react";
import Envolope from "../icon/Envolope";
import Telephone from "../icon/Telephone";
import Location1 from "../icon/Location1";
import Link from "next/link";
export default function SocialTags() {
  return (
    <div className="bg-[#248F82] py-[50px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid lg:grid-cols-3 items-center gap-[2px]">
          <div className=" bg-[#F5DFBB] py-[27px]">
            <div className="items-center gap-4 mx-5 text-center py-[6.6px] sm:text-start sm:flex">
              <div className="bg-[#248F82] rounded-[50px] py-4 px-4 max-w-[56px] mx-auto sm:mx-0 mb-3">
                <Telephone className="hover:fill-[#196E63]" />
              </div>
              <div>
                <h2 className="text-[#17695f] text-[22px] leading-[24px] font-[800] mb-2">
                  Call us
                </h2>
                <Link href={`tel:+5104932130`} legacyBehavior>
                  <p className="text-[#17695f] text-[16px] leading-[24px] font-[400]">
                    <a href={`tel:+5104932130`}>(510) 493-2130</a>
                  </p>
                </Link>
                <Link href={`tel:+5305013436`} legacyBehavior>
                  <p className="text-[#17695f] text-[16px] leading-[24px] font-[400]">
                    <a href={`tel:+5305013436`}>(530) 501-3436</a>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className=" bg-[#F5DFBB] py-[40px] my-4">
            <div className="gap-4 px-5 text-center sm:text-start sm:flex">
              <div className="bg-[#248F82] rounded-full py-4 px-4 max-w-[56px] mx-auto sm:mx-0 mb-3">
                <Envolope className="" />
              </div>
              <div>
                <h2 className="text-[#17695f] text-[22px] leading-[24px] font-[800] mb-2">
                  Email
                </h2>
                <Link
                  href={`mailto:+contact@nobledentalcares.com`}
                  legacyBehavior
                >
                  <p className="text-[#17695f] text-[16px] leading-[24px] font-[400]">
                    <a href={`mailto:+contact@nobledentalcares.com`}>
                      contact@nobledentalcares.com
                    </a>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className=" bg-[#F5DFBB] py-[34px] my-4">
            <div className="gap-4 px-5 text-center sm:text-start sm:flex">
              <div className="bg-[#248F82] lg:mt-3 rounded-full py-4 px-4 max-w-[56px] mx-auto sm:mx-0 mb-3">
                <Location1 />
              </div>
              <div>
                <h2 className="text-[#17695f] text-[22px] leading-[24px] font-[800] mb-2">
                  Address
                </h2>
                <Link
                  href="https://www.google.com/maps/place/34603+Alvarado-Niles+Rd,+Union+City,+CA+94587,+USA/@37.5862491,-122.0218458,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbfdf18ff13a7:0xbf1195867ec14325!8m2!3d37.5862491!4d-122.0196571?shorturl=1"
                  legacyBehavior
                >
                  <p className="text-[#17695f] text-[16px] leading-[24px] font-[400]">
                    <a href="https://www.google.com/maps/place/34603+Alvarado-Niles+Rd,+Union+City,+CA+94587,+USA/@37.5862491,-122.0218458,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbfdf18ff13a7:0xbf1195867ec14325!8m2!3d37.5862491!4d-122.0196571?shorturl=1">
                      34603 Alvarado Niles Rd, Union City, CA 94587
                    </a>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
