import {Link} from "@inertiajs/inertia-react";
import React from "react";
import {useSelector} from "react-redux";

function ProfileNavigation() {
    const navigationForUser = useSelector(state => state.navigationForUser.value);

    return (
        <div className={`${navigationForUser ? 'block' : 'hidden'} absolute top-[100%] p-2 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] right-0 bg-white w-full md:w-[250px] rounded-lg min-h-[100px]`}>
            <Link className={'flex flex-col p-2 w-full rounded-lg hover:bg-[#EBECFC]'} href={'/profile'}>
                <span className={'text-base text-[#404040] font-medium'}>Rinaldi Hendrawan</span>
                <small className={'text-sm text-[#707070]'}>@rinaldi600</small>
            </Link>
            <div className={'bg-[#D6D6D7] w-full h-[1px] mt-1.5'}>

            </div>
            <div className={'pt-2 w-full text-[#424242] grid'}>
                <Link href={'/dashboard'} className={'p-2 w-full rounded-lg hover:text-[#2F3AB2] hover:underline hover:decoration-[1.5px] hover:bg-[#EBECFC]'}>
                    Dashboard
                </Link>
                <Link href={'/new'} className={'p-2 w-full rounded-lg hover:text-[#2F3AB2] hover:underline hover:decoration-[1.5px] hover:bg-[#EBECFC]'}>
                    Create Post
                </Link>
                <Link href={'/readinglist'} className={'p-2 w-full rounded-lg hover:text-[#2F3AB2] hover:underline hover:decoration-[1.5px] hover:bg-[#EBECFC]'}>
                    Reading list
                </Link>
                <Link href={'/settings'} className={'p-2 w-full rounded-lg hover:text-[#2F3AB2] hover:underline hover:decoration-[1.5px] hover:bg-[#EBECFC]'}>
                    Settings
                </Link>
            </div>
            <div className={'bg-[#D6D6D7] w-full h-[0.5px] mt-1.5'}>

            </div>
            <div className={'pt-2 mt-1.5'}> </div>
            <Link href={'/signout_confirm'} className={'p-2 w-full rounded-lg hover:text-[#2F3AB2] hover:underline hover:decoration-[1.5px] hover:bg-[#EBECFC]'}>
                Sign Out
            </Link>
            <div className={'pb-2'}> </div>
        </div>
    )
}

export default ProfileNavigation
