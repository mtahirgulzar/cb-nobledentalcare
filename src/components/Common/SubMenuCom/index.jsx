import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

const SubMenuCom = ({ data, setIsMenu }) => {
  return (
    <ul className={` bg-white`}>
      {data?.map((item, index) => (
        <Link key={index} href={`/our-services/${item.attributes.slug}`} legacyBehavior>
            <li
              onClick={() => setIsMenu(false)}

              className={` py-[7px] transition-all ease duration-500 flex gap-x-1 justify-start ${styles.cusHover}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="#17786C"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <p
                className={`${styles.hoverText} transition-all text-[gray] ease duration-500 text-[14px] leading-[16px]  flex text-start`}
              >
          <a href={`/our-services/${item.attributes.slug}`} className="">
                {item?.attributes?.title}
          </a>
              </p>
            </li>
        </Link>
      ))}
    </ul>
  );
};

export default SubMenuCom;
