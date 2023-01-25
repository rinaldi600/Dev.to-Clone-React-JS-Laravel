import React from "react";
import Recently from "@/Pages/Home/RecentlyQueried/Recently/Recently";

function Recentlys() {
    return (
        <div className={'mt-3 min-h-max border-b-2 border-[#CCCCCC]'}>
            <h4 className={'font-bold text-sm text-[#171717] font-[Consolas]'}>recently queried</h4>
            <Recently text={'JavaScript Shift'} href={'/'}/>
            <Recently text={'Prototypical Inheritance'} href={'/'}/>
            <Recently text={'Learn Python for Free'} href={'/'}/>
            <Recently text={'Vscode Vim'} href={'/'}/>
        </div>
    )
}

export default Recentlys;
