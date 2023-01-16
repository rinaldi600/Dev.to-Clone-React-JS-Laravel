import React, {Fragment} from "react";

function Layout({children}) {
    return (
        <Fragment>
            <div className={`h-[56px] font-['Segoe_UI'] bg-white shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)]`}>
                <div className={'max-w-[1280px] h-full mx-auto'}>
                    <div className={'w-full flex items-center justify-between h-full bg-yellow-400'}>

                        {/*Right Side Navbar*/}
                        <div className={'flex gap-4'}>
                            <div className={'w-[50px] h-[40px]'}>
                                <img className={'w-full h-full'} src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt=""/>
                            </div>
                            <div>
                                <div className={'h-[40px] m-0 lg:relative lg:w-[420px] lg:block flex items-center w-max overflow-hidden'}>
                                    <input type="text" className={'w-[100%] focus:border-2 lg:block hidden border-[#A3A3A3] h-full focus:z-50 border-transparent rounded-lg focus:border-[#3B49DF] focus:ring-0'} placeholder={'Search...'}/>
                                    <div className={'lg:absolute w-[40px] h-full lg:h-[32px] rounded-lg lg:top-1/2 lg:right-0 lg:translate-x-[-10%] lg:translate-y-[-50%] hover:bg-[#EBECFC] flex items-center justify-center cursor-pointer'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-[#2F3AB2]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Left Side Navbar*/}
                        <div className={''}>

                        </div>

                    </div>
                </div>
            </div>
            {children}
        </Fragment>
    )
}

export default Layout
