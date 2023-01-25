import React from "react";
import Trending from "@/Pages/Home/Trendings/Trending/Trending";

function Trendings() {
    return (
        <div className={'mt-3 min-h-max border-b-2 border-[#CCCCCC]'}>
            <h4 className={'font-bold text-sm text-[#171717] font-[Consolas]'}>trending guides/resources</h4>
            <Trending href={'/'} text={'Ultimate ChatGPT Resource Guide - ChatGPT Tutorial'}/>
            <Trending href={'/'} text={'Master Notifications With ChatGPT, React and NodeJS 🧨'}/>
            <Trending href={'/'} text={'JavaScript Frameworks - Heading into 2023'}/>
            <Trending href={'/'} text={'The Difference Between ChatGPT and GPT-3'}/>
        </div>
    )
}

export default Trendings;
