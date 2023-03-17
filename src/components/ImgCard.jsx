import React from "react";

function ImgCard({image}) {
    return <>
    <div className="w-full bg-slate-200">
    <a href={image.webformatURL} target="new">
    <img src= {image.webformatURL} alt = "" className="w-full h-auto"/>
    </a>
    </div>
    </>
}
export default ImgCard;