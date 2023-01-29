import React from "react";
import TitleContent from "@/Pages/Home/Contents/TitleContent/TitleContent";

function FirstContent({slug = '' , text, detailUserCreate = {}}) {

    return (
        <div className={'rounded-lg bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] overflow-hidden'}>
            <div className={'w-full max-h-[273.235px] bg-yellow-500 overflow-hidden'}>
                <img className={'w-full h-full'} src='https://res.cloudinary.com/practicaldev/image/fetch/s--x5TIXS6B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jxc9uzhsads1z932whnz.jpg' alt="Cover"/>
            </div>
            <div className={'min-h-[242px] sm:pr-3 sm:pl-3 pr-9 pl-9 pt-7'}>
                <TitleContent detailUserCreate={detailUserCreate} commentCount={49} text={'20 Killer JavaScript One-Liners That’ll Save You Hours of Coding 🤯🔥'}/>
            </div>
        </div>
    )
}

export default FirstContent;
