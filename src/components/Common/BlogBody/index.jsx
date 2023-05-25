import React, { useEffect, useState } from "react";

const BlogBody = ({ data, cusClass, team,cusClassName }) => {
  let content = data?.body || data?.attributes?.body || data
  const [finaldata, setFinalData] = useState(content)
  var finalContent

  useEffect(() => {


    var el = document.createElement("html")
    el.innerHTML = content
    let images = el.getElementsByTagName("img")
    for (let image of images) {
      image.src = `https://admin.nobledentalcares.com/uploads/${image.src.split('/')[image.src.split('/').length - 1]}`
    }
    finalContent = el.innerHTML
    setFinalData(finalContent)

  })

  return (
    <>
      <div className={`${cusClassName}`}>
        <div className={`max-w-[1140px] mx-auto md:pb-[60px] py-[20px] px-4 ${cusClass}`}>
          <div dangerouslySetInnerHTML={{ __html: finaldata }} ></div>
        </div>
      </div>
    </>
  );
};

export default BlogBody;
