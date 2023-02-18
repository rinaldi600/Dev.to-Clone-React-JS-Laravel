import React from "react";
import Layout from "@/Pages/Layout/Layout";
import AuthLogintype from "@/Pages/LoginSignUp/AuthLoginType/AuthLoginType";

function LayoutCreateAndCreate({children}) {
    return (
        <>
            <div className={"min-h-[787.3px] p-2 font-['Segoe_UI'] flex items-center bg-[#F5F5F5]"}>
                <div className={'w-full'}>
                    <div className={'max-w-[640px] p-12 shadow-[0_1px_3px_0px_rgba(0,0,0,0.02),0_0_0_1px_rgba(27,31,35,0.15)] rounded-lg mx-auto min-h-[755.3px] bg-white'}>
                        <div className={'w-full'}>
                            <h1 className={'text-center text-3xl font-bold break-words'}>
                                Welcome to DEV Community 👩‍💻👨‍💻
                            </h1>
                            <p className={'text-center text-[#404040] text-base'}>
                                DEV Community 👩‍💻👨‍💻 is a community of 1,001,084 amazing developers
                            </p>
                            <div className={'mt-6'}>
                                <AuthLogintype/>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

LayoutCreateAndCreate.layout = page => <Layout children={page} title="Welcome" />;

export default LayoutCreateAndCreate;


