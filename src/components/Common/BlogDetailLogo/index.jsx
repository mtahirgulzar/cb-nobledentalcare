import React from "react";
import Facebook from "../icon/Facebook";
import Twitter from "../icon/Twitter"
import Linkedin from "../icon/Linkedin"
import Priterest from "../icon/Pinterest"
import Print from "../icon/Print"
import Envelop from "../icon/Envelop"
import Link from "next/link";

export default function BlogDetailLogo() {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid md:grid-cols-2">
          <h2 className="text-[24px] leading-[24px] font-[600] text-[#000000] text-center md:text-start">SHARE THIS POST</h2>
          <div className="flex justify-center md:justify-end gap-x-[10px] mt-4 md:mt-0">
            <Link href={'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fnobledentalcares.com%252Fblog%252Ftypes-of-oral-sedation-used-by-dentists-during-treatment%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB'} legacyBehavior>
            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fnobledentalcares.com%252Fblog%252Ftypes-of-oral-sedation-used-by-dentists-during-treatment%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"><div className="bg-[#3B5998] hover:bg-[#4772ce] py-[10px] px-[12px] btn"><Facebook fill="white" width="12"/></div></a></Link>
            <Link href={'https://twitter.com/intent/tweet?text=%20https://nobledentalcares.com/blog/types-of-oral-sedation-used-by-dentists-during-treatment/'} legacyBehavior><a href="https://twitter.com/intent/tweet?text=%20https://nobledentalcares.com/blog/types-of-oral-sedation-used-by-dentists-during-treatment/"><div className="bg-[#12ABFF] hover:bg-[#53c0fa] py-[10px] px-[12px] btn"><Twitter fill="white" width="12"/></div></a></Link>
            <Link href={'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fnobledentalcares.com%2Fblog%2Ftypes-of-oral-sedation-used-by-dentists-during-treatment%2F%26title%3DTypes%2520of%2520Oral%2520Sedation%2520used%2520by%2520dentists%2520during%2520treatment%2520%257C%2520Dentist%26summary%3D%26source%3Dhttps%3A%2F%2Fnobledentalcares.com%2Fblog%2Ftypes-of-oral-sedation-used-by-dentists-during-treatment%2F'} legacyBehavior>
            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fnobledentalcares.com%2Fblog%2Ftypes-of-oral-sedation-used-by-dentists-during-treatment%2F%26title%3DTypes%2520of%2520Oral%2520Sedation%2520used%2520by%2520dentists%2520during%2520treatment%2520%257C%2520Dentist%26summary%3D%26source%3Dhttps%3A%2F%2Fnobledentalcares.com%2Fblog%2Ftypes-of-oral-sedation-used-by-dentists-during-treatment%2F"><div className="bg-[#0077B5] hover:bg-[#12ABFF] py-[10px] px-[12px] btn"><Linkedin fill="white" width="12"/></div></a></Link>
            <Link href={'https://www.pinterest.com/pin/create/button/?url=https://nobledentalcares.com/blog/types-of-oral-sedation-used-by-dentists-during-treatment/&media=https://nobledentalcares.com/wp-content/uploads/2022/12/190a-1024x681.jpg'} legacyBehavior>
            <a href="https://www.pinterest.com/pin/create/button/?url=https://nobledentalcares.com/blog/types-of-oral-sedation-used-by-dentists-during-treatment/&media=https://nobledentalcares.com/wp-content/uploads/2022/12/190a-1024x681.jpg"><div className="bg-[#BD081C] hover:bg-[#f4223b] py-[10px] px-[12px] btn"><Priterest fill="white" width="12"/></div></a></Link>
            <Link href={'mailto:+'} legacyBehavior><a href="mailto:+"><div className="bg-[#AAAAAA] hover:bg-[#cecdcd] py-[10px] px-[12px] btn"><Print fill="white" width="12"/></div></a></Link>
            <Link href={'mailto:+'} legacyBehavior><a href="mailto:+"><div className="bg-[#EA4335] hover:bg-[#ff2e1c] py-[10px] px-[12px] btn"><Envelop fill="white" width="12"/></div></a></Link>
          </div>
        </div>
        <hr className="my-[35px]"/>
      </div>
    </div>
  );
}
