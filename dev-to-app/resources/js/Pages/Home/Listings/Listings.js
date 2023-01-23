import React from "react";
import {Link} from "@inertiajs/inertia-react";
import List from "@/Pages/Home/Listings/List/List";

function Listings() {
    return (
        <div className={'w-[325.377px] min-h-max bg-[#FAFAFA] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] rounded-lg overflow-hidden'}>
            <div className={'h-[54.8px] border-b border-[#EAEAEA] flex justify-between p-2 items-center'}>
                <h4 className={'text-xl font-bold'}>Listings</h4>
                <Link className={'text-[#3B49E1] text-sm font-medium'} href={'/'}>
                    See All
                </Link>
            </div>
            <List href={'/'} text={'Open source APM: OpenTelemetry traces, metrics, and logs'} category={'collabs'}/>
            <List href={'/'} text={'A Next.js RESTful API Starter for building your next SaaS app'} category={'products'}/>
            <List href={'/'} text={'Free ReactJS Coding Challenges: Build Functionality for Responsive UI'} category={'education'}/>
            <List href={'/'} text={'100 Days Data Science Bootcamp Free'} category={'education'}/>
            <List href={'/'} text={'Junior MERN stack developer looking for job  '} category={'forhire'}/>
            <div className={'min-h-[45px] p-2 grid items-center border-b border-[#EAEAEA] hover:bg-white'}>
                <Link href={'/'} className={'text-[#464040] hover:text-[#2F3AB2] text-center font-medium text-sm'}>
                    Create a Listing
                </Link>
            </div>
        </div>
    )
}

export default Listings;
