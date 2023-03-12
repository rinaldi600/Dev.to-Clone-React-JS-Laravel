import React, {Fragment, useEffect, Suspense, useState} from "react";
import Layout from "@/Pages/Layout/Layout";
import {Head, Link} from "@inertiajs/inertia-react";
import {usePage} from "@inertiajs/inertia-react";

const LeftMenu = React.lazy(() => import('@/Pages/Profile/Setting/LeftMenuSetting/LeftMenu'));

function Setting() {
    const { auth } = usePage().props;
    const [leftNavbar, showLeftNavbar] = useState(false);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function () {
            setWidthWindow(window.innerWidth);
        });
        return () => {
           window.removeEventListener('resize', function () {
               setWidthWindow(window.innerWidth);
           });
        }
    });

    const showNavbarLeft = () => {
        if (leftNavbar) {
            showLeftNavbar(false)
        } else {
            showLeftNavbar(true)
        }
    };

    return (
        <Fragment>
            <Head title="Settings - DEV Community" />
            <div className={"font-['Segoe_UI'] min-h-screen flex bg-[#F5F5F5]"}>
                <div className={'w-[1024px] mx-auto'}>
                    <h1 className={'pt-7 mt-7 p-4 break-words lg:p-0 text-3xl text-[#090909] font-bold'}>
                        Settings for <Link className={'text-[#3B49DF]'} href={`/${auth?.user?.username}`}>@{auth?.user?.username}</Link>
                    </h1>
                    <div className={'flex flex-wrap lg:flex-nowrap lg:gap-4 min-h-[300px] mt-2 lg:mt-5'}>
                        <div className={'w-full lg:w-[20%] p-4 lg:p-0 min-h-[100px]'}>
                            <div onClick={showNavbarLeft} className={'h-[30px] lg:hidden mb-4 bg-white cursor-pointer w-[30px] flex justify-center items-center rounded-lg'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </div>
                            <Suspense fallback={<div>Loading</div>}>
                                <LeftMenu widthWindow={widthWindow} modalShow={leftNavbar}/>
                            </Suspense>
                        </div>
                        <div className={'w-full p-2 lg:w-[80%] min-h-[300px]'}>
                            <div className={'w-full flex flex-col flex-wrap justify-center pl-7 gap-2 bg-white min-h-[144px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                                <button className={'w-[239px] min-h-[40px] bg-[#0A3E4A] font-medium text-white rounded-lg'}>Connect Forem Account</button>
                                <button className={'w-[239px] min-h-[40px] bg-[#1DA1F2] font-medium text-white rounded-lg'}>Connect Twitter Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Setting.layout = page => <Layout children={page} title="Settings - DEV Community" />;

export default Setting;
