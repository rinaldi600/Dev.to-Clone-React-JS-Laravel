import React, {Fragment} from "react";
import LayoutCreateAndCreate from "@/Pages/LoginSignUp/LayoutSignAndCreate";
import Layout from "@/Pages/Layout/Layout";

function SignIn() {
    return (
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

            <div className={'w-[143.275px] min-h-[24px] rounded-lg hover:bg-[#F5F5F5] mt-3 flex items-center justify-center gap-2 p-0.5 flex-wrap'}>
                <input type="checkbox" name={'check'} className={'checked:bg-[#3B49DF] ring-0 checked:border-none focus:outline-none focus:ring-0 w-[18px] h-[18px] rounded-md border border-[#D4D4D4]'}/>
                <p className={'text-base text-[#171717]'}>Remember Me</p>
            </div>

            <button className={'w-full bg-[#3B49DF] hover:bg-[#2F3AB2] gap-2 font-medium flex flex-wrap items-center justify-center text-base mt-2 rounded-lg min-h-[48px]'}>
                <span className={'inline break-words text-white'}>Continue</span>
            </button>

        </div>
    )
}

SignIn.layout = page => (
    <Layout title={'Sign'}>
        <LayoutCreateAndCreate children={page} />
    </Layout>
);

export default SignIn;
