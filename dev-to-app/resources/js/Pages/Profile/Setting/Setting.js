import React, {Fragment, useEffect} from "react";
import Layout from "@/Pages/Layout/Layout";
import {Head, Link} from "@inertiajs/inertia-react";
import {usePage} from "@inertiajs/inertia-react";

function Setting() {
    const { auth } = usePage().props;

    useEffect(() => {
        console.log(auth);
    });

    return (
        <Fragment>
            <Head title="Settings - DEV Community" />
            <div className={"font-['Segoe_UI'] min-h-screen flex bg-[#F5F5F5]"}>
                <div className={'w-[1024px] mx-auto'}>
                    <h1 className={'pt-7 text-3xl text-[#090909] font-bold'}>
                        Settings for <Link className={'text-[#3B49DF]'} href={`/${auth?.user?.username}`}>@{auth?.user?.username}</Link>
                    </h1>
                    <div className={'flex flex-wrap bg-red-300 min-h-[300px] mt-5'}>
                        <div className={'sm:w-full w-[30%] min-h-[100px] bg-green-500'}>

                        </div>
                        <div className={'sm:w-full w-[70%] min-h-[300px] bg-yellow-400'}>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Setting.layout = page => <Layout children={page} title="Settings - DEV Community" />;

export default Setting;
