import Link from "next/link";
import React from "react";
import SubMenu from "../SubMenuCom";

const MegaMenuCom = ({ data, setIsSubmenu, services, insCat, setIsMenu }) => {
  const FilteredCat = (cb) => {
    const resulteditem = services?.filter(
      (item) =>
        item?.attributes?.services_category?.data?.attributes?.name === cb
    );

    return resulteditem;
  };

  return (
    <div
      onMouseEnter={() => setIsSubmenu(true)}
      onMouseLeave={() => setIsSubmenu(false)}
      className={`absolute top-[90px] left-0  w-full transition-all duration-3000 ease  z-50 bg-white`}
    >
      <div className="grid grid-cols-3  py-[35px] gap-[10px] max-w-[1156px] mx-auto px-[40px] justify-center ">
        <div className="flex flex-col">
          {data?.slice(0, 3)?.map((item, index) => {
            const dupCat = item?.attributes?.name?.split(" ")?.join("-");
            const subMenuData = FilteredCat(item?.attributes?.name);
            const filteredSubMenuData = subMenuData?.filter(
              (sub) =>
                sub?.attributes?.title?.toLowerCase() !==
                item?.attributes?.name?.toLowerCase()
            );
            const cusSlug = services.find(
              (service) =>
                service?.attributes?.title?.toLowerCase() ===
                item?.attributes?.name?.toLowerCase()
            );
            return (
              <div key={index} className="">
                {dupCat === insCat ? (
                  ""
                ) : (
                  <Link
                    href={`/our-services/${cusSlug?.attributes?.slug}`}
                    legacyBehavior
                  >
                    <p className="text-start text-[16px] leading-[19px] font-[600] text-[#196d62] mb-[10px]">
                      <a
                        href={`/our-services/${cusSlug?.attributes?.slug}`}
                        className=""
                      >
                        ⬖ {item?.attributes?.name}
                      </a>
                    </p>
                  </Link>
                )}
                {subMenuData && (
                  <SubMenu data={filteredSubMenuData} setIsMenu={setIsMenu} />
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          {data?.slice(3, 6)?.map((item, index) => {
            const dupCat = item?.attributes?.name?.split(" ")?.join("-");
            const subMenuData = FilteredCat(item?.attributes?.name);
            const filteredSubMenuData = subMenuData?.filter(
              (sub) =>
                sub?.attributes?.title?.toLowerCase() !==
                item?.attributes?.name?.toLowerCase()
            );
            const cusSlug = services.find(
              (service) =>
                service?.attributes?.title?.toLowerCase() ===
                item?.attributes?.name?.toLowerCase()
            );
            return (
              <div key={index} className="">
                {dupCat === insCat ? (
                  ""
                ) : (
                  <Link
                    href={`/our-services/${cusSlug?.attributes?.slug}`}
                    legacyBehavior
                  >
                    <p className="text-start text-[16px] leading-[19px] font-[600] text-[#196d62] mb-[10px]">
                      <a
                        href={`/our-services/${cusSlug?.attributes?.slug}`}
                        className=""
                      >
                        ⬖ {item?.attributes?.name}
                      </a>
                    </p>
                  </Link>
                )}
                {subMenuData && (
                  <SubMenu data={filteredSubMenuData} setIsMenu={setIsMenu} />
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          {data?.slice(6, 9)?.map((item, index) => {
            const dupCat = item?.attributes?.name?.split(" ")?.join("-");
            const subMenuData = FilteredCat(item?.attributes?.name);
            const filteredSubMenuData = subMenuData?.filter(
              (sub) =>
                sub?.attributes?.title?.toLowerCase() !==
                item?.attributes?.name?.toLowerCase()
            );
            const cusSlug = services.find(
              (service) =>
                service?.attributes?.title?.toLowerCase() ===
                item?.attributes?.name?.toLowerCase()
            );
            return (
              <div key={index} className="">
                {dupCat === insCat ? (
                  ""
                ) : (
                  <Link
                    href={`/our-services/${cusSlug?.attributes?.slug}`}
                    legacyBehavior
                  >
                    <a
                      href={`/our-services/${cusSlug?.attributes?.slug}`}
                      className=""
                    >
                      <p className="text-start text-[16px] leading-[19px] font-[600] text-[#196d62] mb-[10px]">
                        ⬖ {item?.attributes?.name}
                      </p>
                    </a>
                  </Link>
                )}
                {subMenuData && (
                  <SubMenu data={filteredSubMenuData} setIsMenu={setIsMenu} />
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          {data?.slice(9, 12)?.map((item, index) => {
            const dupCat = item?.attributes?.name?.split(" ")?.join("-");
            const subMenuData = FilteredCat(item?.attributes?.name);
            const filteredSubMenuData = subMenuData?.filter(
              (sub) =>
                sub?.attributes?.title?.toLowerCase() !==
                item?.attributes?.name?.toLowerCase()
            );
            const cusSlug = services.find(
              (service) =>
                service?.attributes?.title?.toLowerCase() ===
                item?.attributes?.name?.toLowerCase()
            );
            return (
              <div key={index} className="">
                {dupCat === insCat ? (
                  ""
                ) : (
                  <Link
                    href={`/our-services/${cusSlug?.attributes?.slug}`}
                    legacyBehavior
                  >
                    <a
                      href={`/our-services/${cusSlug?.attributes?.slug}`}
                      className=""
                    >
                      <p className="text-start text-[16px] leading-[19px] font-[600] text-[#196d62] mb-[10px]">
                        ⬖ {item?.attributes?.name}
                      </p>
                    </a>
                  </Link>
                )}
                {subMenuData && (
                  <SubMenu data={filteredSubMenuData} setIsMenu={setIsMenu} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuCom;
