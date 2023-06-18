import TitleContent from "@/Pages/Home/Contents/TitleContent/TitleContent";
import React, {useEffect} from "react";

function NextContent({text, detailUserCreate = {}, detailPost}) {
    useEffect(() => {

    });

    return (
        <div className={'sm:pr-3 sm:pl-3 pr-9 pl-9 pt-7 pb-2 mt-2 bg-white min-h-[197.1px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
            <TitleContent detailPost={detailPost} detailUserCreate={detailUserCreate} text={text} commentCount={Math.floor((Math.random() * 100) + 1)} />
        </div>
    )
}

export default NextContent;
