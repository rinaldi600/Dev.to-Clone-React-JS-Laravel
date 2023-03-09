import React, {Fragment, useEffect} from "react";
import Layout from "@/Pages/Layout/Layout";
import {Head, Link} from "@inertiajs/inertia-react";
import {usePage} from "@inertiajs/inertia-react";
import LeftMenu from "@/Pages/Profile/Setting/LeftMenuSetting/LeftMenu";

function Setting() {
    const { auth } = usePage().props;

    useEffect(() => {
        console.log(auth);
    });

    const showNavbarLeft = () => {
        console.log("WORK");
    };

    return (
        <Fragment>
            <Head title="Settings - DEV Community" />
            <div className={"font-['Segoe_UI'] min-h-screen flex bg-[#F5F5F5]"}>
                <div className={'w-[1024px] mx-auto'}>
                    <h1 className={'pt-7 p-4 lg:p-0 text-3xl text-[#090909] font-bold'}>
                        Settings for <Link className={'text-[#3B49DF]'} href={`/${auth?.user?.username}`}>@{auth?.user?.username}</Link>
                    </h1>
                    <div className={'flex flex-wrap min-h-[300px] mt-2 lg:mt-5'}>
                        <div className={'w-full lg:w-[20%] p-4 lg:p-0 min-h-[100px]'}>
                            <div onClick={showNavbarLeft} className={'h-[30px] lg:hidden mb-4 bg-white cursor-pointer w-[30px] flex justify-center items-center rounded-lg'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </div>
                            <LeftMenu/>
                        </div>
                        <div className={'w-full lg:w-[80%] min-h-[300px] bg-yellow-400'}>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Setting.layout = page => <Layout children={page} title="Settings - DEV Community" />;

export default Setting;
