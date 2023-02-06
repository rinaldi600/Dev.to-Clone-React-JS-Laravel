import React from "react";
import Layout from "@/Pages/Layout/Layout";
import LayoutCreateAndCreate from "@/Pages/LoginSignUp/LayoutSignAndCreate";
import {Head, Link} from "@inertiajs/inertia-react";

function SignUp({title}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={"mt-8 font-['Segoe_UI']"}>

                <label htmlFor="email" className={'text-base font-medium text-[#171717]'}>Email</label>
                <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                    <input name={'email'} id={'email'} type="text" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                </div>

                <div className={'mt-3'}> </div>

                <label htmlFor="email" className={'text-base font-medium text-[#171717]'}>Password</label>
                <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                    <input name={'email'} id={'email'} type="text" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                </div>

                <button className={'w-full bg-[#3B49DF] hover:bg-[#2F3AB2] gap-2 font-medium flex flex-wrap items-center justify-center text-base mt-2 rounded-lg min-h-[48px]'}>
                    <span className={'inline break-words text-white'}>Create Account</span>
                </button>

                <Link href={'/'} className={'text-[#3B49DF] text-center text-sm'}>
                    <p className={'mt-6'}>I forgot my password</p>
                </Link>
            </div>
        </>
    )
}

SignUp.layout = page => (
    <Layout title={'SigUp'}>
        <LayoutCreateAndCreate children={page} />
    </Layout>
);

export default SignUp;
