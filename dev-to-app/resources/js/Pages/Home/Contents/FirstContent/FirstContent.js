import React from "react";
import TitleContent from "@/Pages/Home/Contents/TitleContent/TitleContent";

function FirstContent({text, detailUserCreate = {}, detailPost, countComment}) {
    return (
        <div className={'rounded-lg bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] overflow-hidden'}>
            <div className={'w-full max-h-[273.235px] bg-yellow-500 overflow-hidden'}>
                <img className={'w-full h-full'} src={detailPost?.cover} alt="Cover"/>
            </div>
            <div className={'min-h-[242px] sm:pr-3 sm:pl-3 pr-9 pl-9 pt-7'}>
                <TitleContent detailPost={detailPost} detailUserCreate={detailUserCreate} commentCount={countComment} text={text}/>
            </div>
        </div>
    )
}

export default FirstContent;
