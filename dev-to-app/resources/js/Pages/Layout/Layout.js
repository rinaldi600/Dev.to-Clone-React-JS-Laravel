import React, {Fragment, lazy, Suspense} from "react";
import {Link} from "@inertiajs/inertia-react";
import ButtonLogInSignUp from "@/Pages/Layout/Button-LogIn-And-SignUp/ButtonLogInSignUp";
import {useDispatch } from 'react-redux'
import {show} from "@/features/Navbar/NavbarSlice";
import BgProfile from '../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import DetailUser from "@/Pages/Layout/DetailUser/DetailUser";

const MobileNavbarLazy = lazy(() => import('./Mobile-Navbar/Mobile-Navbar'));

function Layout({children}) {

    const dispatch = useDispatch();

    const showMobileNavbar = () => {
        dispatch(show());
    };

    return (
        <Fragment>
            <div className={`h-[56px] font-['Segoe_UI'] bg-white shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)]`}>
                <div className={'max-w-[1280px] h-full mx-auto'}>
                    <div className={'w-full flex items-center relative justify-between h-full'}>

                        {/*Right Side Navbar*/}
                        <div className={'flex lg:justify-start justify-between w-full lg:w-max gap-4'}>
                            <div className={'flex items-center gap-2'}>
                                <div onClick={showMobileNavbar} className={'lg:hidden cursor-pointer hover:bg-[#EBECFC] rounded-lg w-[40px] h-[40px] flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-[24px] hover:text-[#5D66C4] h-[24px]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                    </svg>
                                </div>
                                <Link href={'/'} className={'w-[50px] h-[40px]'}>
                                    <img className={'w-full h-full'} src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt=""/>
                                </Link>
                            </div>

                            <div>
                                <div className={'h-[40px] m-0 lg:relative lg:w-[420px] lg:block flex items-center w-max overflow-hidden'}>
                                    <input type="text" className={'w-[100%] focus:border-2 lg:block hidden border-[#A3A3A3] h-full focus:z-50 border-transparent rounded-lg focus:border-[#3B49DF] focus:ring-0'} placeholder={'Search...'}/>
                                    <Link href={'/search'} className={'lg:absolute w-[40px] h-full lg:h-[32px] rounded-lg lg:top-1/2 lg:right-0 lg:translate-x-[-10%] lg:translate-y-[-50%] hover:bg-[#EBECFC] flex lg:hidden items-center justify-center cursor-pointer'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-[#2F3AB2]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                        </svg>
                                    </Link>
                                    <button className={'lg:absolute w-[40px] h-full lg:h-[32px] rounded-lg lg:top-1/2 lg:right-0 lg:translate-x-[-10%] hidden lg:translate-y-[-50%] hover:bg-[#EBECFC] lg:flex items-center justify-center cursor-pointer'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-[#2F3AB2]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/*Left Side Navbar*/}
                        <div className={''}>
                            <div className={'lg:block hidden'}>
                                {/*<ButtonLogInSignUp/>*/}
                            </div>
                            <div className={'relative'}>
                                <DetailUser/>
                            </div>
                        </div>

                        <div className={'absolute top-[100%] p-2 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] right-0 bg-white w-full md:w-[250px] rounded-lg h-[100px]'}>
                            <Link className={'flex flex-col p-2 w-full rounded-lg hover:bg-[#EBECFC]'} href={'/profile'}>
                                <span className={'text-base text-[#404040] font-medium'}>Rinaldi Hendrawan</span>
                                <small className={'text-sm text-[#707070]'}>@rinaldi600</small>
                            </Link>
                            <div className={'bg-[#D6D6D7] w-full h-[1px] mt-1.5'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <MobileNavbarLazy/>
            </Suspense>
            <div>
                {children}
            </div>
            <div className={"min-h-[233px] p-2 font-['Segoe_UI'] flex justify-center items-center bg-[#E5E5E5]"}>
                <div className={""}>
                    <div className={'flex gap-2 justify-center'}>
                        <Link className={'text-sm font-medium text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >DEV Community 👩‍💻👨‍💻 </Link>
                        <p className={'text-sm text-[#404040]'}> — <span>A constructive and inclusive social network
                            for software developers. With you every step of your journey.</span></p>
                    </div>
                    <div className={'w-[75%] mx-auto mt-2'}>
                        <ul className={'marker:text-[#575757] flex flex-wrap mx-auto gap-1 justify-center items-center list-disc list-inside'}>
                            <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Home</Link>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Listings</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Podcasts</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Videos</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Tags</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >FAQ</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Forem Shop</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Sponsors</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >About</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >About</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Contact</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >Guides</Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >
                                    Software comparisons
                                </Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >
                                    Code of Product
                                </Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className={'text-sm text-[#3B49DF] hover:underline hover:decoration-solid'} href={'/'} >
                                    Term of use
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={'w-[44%] mx-auto font-[Segoe_UI] mt-3 text-[#404040] text-center text-sm'}>
                        <p>
                            Built on <Link href={'/'} className={'text-[#5662E0]'}>Forem</Link> -
                            the <Link href={'/'} className={'text-[#5662E0]'}>open source</Link> software that powers
                            <Link href={'/'} className={'text-[#5662E0]'}> DEV</Link> and other inclusive communities.
                            Made with love and <Link href={'/'} className={'text-[#5662E0]'}>Ruby on Rails. </Link>
                            DEV Community 👩‍💻👨‍💻
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Layout
