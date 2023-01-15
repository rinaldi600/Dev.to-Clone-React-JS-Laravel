import React, {Fragment} from "react";

function Layout({children}) {
    return (
        <Fragment>
            <div className={'h-[56px] bg-white shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)]'}>
                <div className={'max-w-[1280px] h-full mx-auto'}>
                    <div className={'w-full flex items-center h-full bg-yellow-400'}>

                        {/*Right Side Navbar*/}
                        <div className={'flex gap-4'}>
                            <div className={'w-[50px] h-[40px]'}>
                                <img className={'w-full h-full'} src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt=""/>
                            </div>
                            <div>
                                <div className={'h-[40px] w-[420px] bg-blue-400'}>
                                    {/*<input type="text" className={'max-w-[100%] h-full'} placeholder={'Search...'}/>*/}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {children}
        </Fragment>
    )
}

export default Layout
