import React from "react";
import TagHome from "@/Pages/Home/TagsHome/TagHome/TagHome";

function TagsHome() {
    return (
        <div className={'w-[325.377px] mt-3 min-h-max bg-[#FAFAFA] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] rounded-lg overflow-hidden'}>
            <div className={'h-[54.8px] border-b border-[#EAEAEA] flex justify-between p-2 items-center'}>
                <h4 className={'text-xl font-bold'}>#Discuss</h4>
            </div>
            <TagHome text={'What was your win this week?'} href={'/'} commentCount={'16'}/>
        </div>
    )
}

export default TagsHome
