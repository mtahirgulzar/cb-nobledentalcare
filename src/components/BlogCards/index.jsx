import Link from "next/link";
import React from "react";
import BlogCard from "../Common/BlogCard";
import moment from "moment";
import { imageResolver } from "../../../utils/helpers";

export default function BlogCards({ data, itemOffset }) {
  return (
    <div className="bg-[#259082]">
      <div className="max-w-[1140px] mx-auto px-4 py-[100px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((item, index) => {
            const result = new Date(
              item?.attributes?.publishedDate
            ).toLocaleDateString("en-GB");
            return (
              <div
                key={index}
                className={`flex ${
                  index >= itemOffset && index < itemOffset + 9 ? "" : "hidden"
                }`}
              >
                <div className="flex">
                  <div className="flex">
                    <div className="flex">
                      <Link href={`/blog/${item?.attributes?.slug}`}>
                        {/* <a href={`${TwoBlog?.attributes?.slug}`}> */}
                        <div className="rounded-lg shadow-lg hover:shadow-2xl bg-white flex flex-col justify-between min-h-full">
                          <div className="flex flex-col">
                            <div className="relative">
                              {item?.attributes?.imagePath !== null ? (
                                <img
                                  src={`https://admin.nobledentalcares.com/uploads/${item?.attributes?.imagePath}`}
                                  loading="lazy"
                                  alt={
                                    item?.attributes?.imagePath?.data
                                      ?.attributes?.alternativeText
                                  }
                                  className="w-full rounded-t-lg hover:cursor-pointer   h-[230px] object-cover"
                                />
                              ) : (
                                <img
                                  loading="lazy"
                                  alt={
                                    item?.attributes?.img?.data?.attributes
                                      ?.alternativeText
                                  }
                                  className="w-full rounded-t-lg hover:cursor-pointer   h-[230px] object-cover"
                                  src={
                                    imageResolver(item?.attributes?.img).path
                                  }
                                ></img>
                              )}

                              <div className="absolute top-0 hover:cursor-pointer h-full w-full bg-[black] rounded-t-lg bg-opacity-10 hover:bg-opacity-0 btn"></div>
                              <div>
                                {item?.attributes?.blog_category?.data
                                  ?.attributes?.name ? (
                                  <p className="absolute top-[25px] right-[25px] bg-[#17786C] px-[14px] py-[1px] rounded-[15px]">
                                    <span className="text-[12px] leading-[12px] font-medium text-white">
                                      {
                                        item?.attributes?.blog_category?.data
                                          ?.attributes?.name
                                      }
                                    </span>
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className="px-[30px] mt-[20px] min-h-[190px]">
                              <h2 className="text-[17px] leading-[24px] text-[#08342e] font-black mb-[25px] text-center hover:cursor-pointer">
                                {item?.attributes?.title}
                              </h2>
                              <p className="text-[14px] leading-[25px] text-[#777777] font-light mb-[25px] text-center">
                                {item?.attributes?.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col justify-between  ">
                            <div className="px-[30px] py-[15px]  border-solid border-t-[1px] border-[#eaeaea] text-center">
                              <span className="text-[13px]  leading-[25px] text-[#08342e] font-normal">
                                {moment(item?.attributes?.publishedDate).format(
                                  "MMM DD, YYYY"
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* </a> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
