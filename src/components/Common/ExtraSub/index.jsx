import Link from 'next/link';
import React from 'react'
import SubMenu from '../SubMenuCom';


const ExtraSub = ({ setExSub, exSub, item, subMenuData, cusSlug , setIsMenu }) => {
    return (
        <div>
            <p className=" mb-[10px] flex items-center text-[#3B5266] text-[13px] pl-2">
                <Link href={`/our-services/${cusSlug?.attributes?.slug}`}>
                    <span onClick={() => setIsMenu(false)} className="">
                        {item.attributes.name}
                    </span>
                </Link>
                <span onClick={() => setExSub(item?.attributes?.name)} className="relative z-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg></span></p>
            {exSub === item.attributes.name && <SubMenu setIsMenu={setIsMenu} data={subMenuData} />}
        </div>
    )
}

export default ExtraSub