import React, {Fragment, Suspense} from "react";
import Layout from "@/Pages/Layout/Layout";
import {Head} from "@inertiajs/inertia-react";
import BgProfileDemo from '../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg';

const Organization = React.lazy(() => import('./Organization/Organization'));
const NextContent = React.lazy(() => import('../Home/Contents/NextContent/NextContent'));

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
                        <div className={'min-h-[100px] mt-2 lg:w-[35%] w-full'}>
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
                            <div className={'min-h-[104px] p-2 mt-3 overflow-hidden bg-[#FAFAFA] rounded-lg shadow-[0_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                                <div className={'h-[48px] flex items-center border-b border-[#F5F5F5]'}>
                                    <h1 className={'font-bold text-base text-[#242424]'}>Skills/Languages</h1>
                                </div>
                                <div className={'min-h-[56px] flex items-center'}>
                                    <p>JavaScript, HTML, CSS</p>
                                </div>
                            </div>
                            <div className={'min-h-max flex flex-col gap-4 p-2 mt-3 overflow-hidden bg-[#FAFAFA] rounded-lg shadow-[0_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                                <div className={'flex items-center gap-4'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="text-[#404040] fill-[#404040]">
                                        <title id="akwcqsnyaop4ru3pd39igrap9fimsyaa">Post</title>
                                        <path
                                            d="M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v12h4v4a3 3 0 01-3 3zm-1-5v2a1 1 0 002 0v-2h-2zm-2 3V4H4v15a1 1 0 001 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"></path>
                                    </svg>
                                    <p className={'text-[#404040] text-base'}>1291 posts published</p>
                                </div>
                                <div className={'flex items-center gap-4'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         role="img" aria-labelledby="afqz9iugctvwv6h9nev346y5xzkp921s"
                                         className="text-[#404040] fill-[#404040]"><title
                                        id="afqz9iugctvwv6h9nev346y5xzkp921s">Comment</title>
                                        <path
                                            d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                                    </svg>
                                    <p className={'text-[#404040] text-base'}>9220 comments written</p>
                                </div>
                            </div>
                        </div>
                        <div className={'min-h-[400px] lg:w-[65%] w-full mb-3'}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <NextContent detailUserCreate={{
                                    name : {
                                        first : 'Rinaldi',
                                        last: 'Hendrawan'
                                    },
                                    picture : {
                                        medium : 'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                                    }
                                }} text={'Daily Routine of a Texan Software Developer'}/>
                                <NextContent detailUserCreate={{
                                    name : {
                                        first : 'Rinaldi',
                                        last: 'Hendrawan'
                                    },
                                    picture : {
                                        medium : 'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                                    }
                                }} text={'Daily Routine of a Texan Software Developer'}/>
                                <NextContent detailUserCreate={{
                                    name : {
                                        first : 'Rinaldi',
                                        last: 'Hendrawan'
                                    },
                                    picture : {
                                        medium : 'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                                    }
                                }} text={'Daily Routine of a Texan Software Developer'}/>
                                <NextContent detailUserCreate={{
                                    name : {
                                        first : 'Rinaldi',
                                        last: 'Hendrawan'
                                    },
                                    picture : {
                                        medium : 'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                                    }
                                }} text={'Daily Routine of a Texan Software Developer'}/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

ProfileUser.layout = page => <Layout children={page} title="Welcome" />;

export default ProfileUser;
