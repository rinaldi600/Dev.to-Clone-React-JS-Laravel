import React, {Fragment, Suspense, lazy} from "react";
import Layout from "@/Pages/Layout/Layout";
import {Head} from "@inertiajs/inertia-react";
import BgProfileDemo from '../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg';

const Organization = React.lazy(() => import('./Organization/Organization'));
function ProfileUser({user}) {

    return (
        <Fragment>
            <Head title={`${user?.name} - DEV Community`} />
            <div className={"font-['Segoe_UI'] min-h-screen bg-[#F5F5F5]"}>
                <div className={'min-h-[527.2px] relative flex flex-col'}>
                    <div className={`h-[130px] bg-[#15202A]`}>

                    </div>
                    <div className={'xl:w-[992px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] flex justify-center w-full min-h-[400px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-md bg-white mx-auto'}>
                        <div className={'bg-[#15202A] p-2 w-[120px] h-[120px] rounded-full overflow-hidden absolute top-[10px] left-[50%] translate-y-[-50%] translate-x-[-50%]'}>
                            <img src={BgProfileDemo} className={'w-full h-full rounded-full'} alt="Picture Profile"/>
                        </div>
                        <div className={'mx-auto w-full mt-[100px] pb-8'}>
                            <div className={'w-full border-b border-[#EFEFEF]'}>
                                <h1 className={'font-extrabold break-words text-center text-2xl lg:text-3xl text-[#090909]'}>{user?.name}</h1>
                                <p className={'text-center text-[#717171]'}>{user?.username}</p>
                                <p className={'text-[#242424] text-center text-lg mt-2.5 mb-3'}>A Canadian software developer who thinks he’s funny.</p>
                            </div>
                            <div className={'mx-auto w-full mx-auto mt-3'}>
                                <p className={'font-medium text-center text-[#717171]'}>Education</p>
                                <p className={'text-center text-[#717171]'}>Mount Allison University</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'min-h-[300px] w-full flex justify-center'}>
                    <div className={'w-[992px] flex sm:flex-wrap gap-4 justify-center'}>
                        <div className={'min-h-[100px] lg:w-[35%] w-full'}>
                            <div className={'min-h-[240px] overflow-hidden bg-[#FAFAFA] rounded-lg shadow-[0_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                                <div className={'h-[48px] p-2 border-b border-[#F5F5F5]'}>
                                    <h1 className={'font-bold text-base text-[#242424]'}>Organizations</h1>
                                </div>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Organization nameOrganization={'The Dev Team'} urlBanner={'https://res.cloudinary.com/practicaldev/image/fetch/s--mbsgKaXh--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png'}/>
                                    <Organization nameOrganization={'Byte Sized'} urlBanner={'https://res.cloudinary.com/practicaldev/image/fetch/s--cBsLILBj--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/865/652f7998-32a8-4fd9-85ca-dd697d2a9ee9.png'}/>
                                    <Organization nameOrganization={'CodeNewBie'} urlBanner={'https://res.cloudinary.com/practicaldev/image/fetch/s--qt_66fM4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2167/a575e4d1-42a8-471a-ab8a-a9240b002aa8.png'}/>
                                </Suspense>
                            </div>
                        </div>
                        <div className={'min-h-[400px] lg:w-[65%] w-full bg-green-400'}>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

ProfileUser.layout = page => <Layout children={page} title="Welcome" />;

export default ProfileUser;
