import React from "react";
import Layout from "@/Pages/Layout/Layout";

function LayoutCreateAndCreate({children}) {
    return (
        <div className={"min-h-[787.3px] font-['Segoe_UI'] flex items-center bg-[#F5F5F5]"}>
            <div className={'w-full'}>
                <div className={'max-w-[640px] p-12 shadow-[0_1px_3px_0px_rgba(0,0,0,0.02),0_0_0_1px_rgba(27,31,35,0.15)] rounded-lg mx-auto min-h-[755.3px] bg-white'}>
                    <div className={'w-full'}>
                        <h1 className={'sm:text-center text-3xl font-bold break-words'}>
                            Welcome to DEV Community 👩‍💻👨‍💻
                        </h1>
                        <p className={'sm:text-center text-[#404040] text-base'}>
                            DEV Community 👩‍💻👨‍💻 is a community of 1,001,084 amazing developers
                        </p>
                        <button className={'w-full bg-[#000000] font-medium flex flex-wrap items-center justify-center text-base mt-3 rounded-lg bg-red-300 min-h-[48px]'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 role="img" aria-hidden="true"
                                 className="crayons-icon inline fill-white">
                                <path
                                    d="M11.752 6.657c.828 0 1.867-.56 2.486-1.307.56-.677.969-1.623.969-2.568 0-.129-.012-.257-.036-.362-.922.035-2.03.618-2.696 1.4-.525.596-1.004 1.53-1.004 2.487 0 .14.024.28.035.326.059.012.152.024.245.024zM8.834 20.78c1.132 0 1.634-.759 3.046-.759 1.436 0 1.75.736 3.011.736 1.238 0 2.066-1.144 2.848-2.265.876-1.284 1.238-2.544 1.261-2.603-.082-.023-2.451-.992-2.451-3.711 0-2.358 1.867-3.42 1.972-3.502-1.237-1.774-3.116-1.82-3.63-1.82-1.389 0-2.52.84-3.233.84-.77 0-1.786-.794-2.988-.794-2.288 0-4.61 1.89-4.61 5.462 0 2.218.863 4.564 1.925 6.082.91 1.284 1.705 2.334 2.849 2.334z"></path>
                            </svg>
                            <span className={'inline break-words text-white'}>Continue with Apple</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

LayoutCreateAndCreate.layout = page => <Layout children={page} title="Welcome" />;

export default LayoutCreateAndCreate;


