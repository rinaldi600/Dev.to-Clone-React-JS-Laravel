import React, {Fragment, lazy, Suspense, useEffect} from "react";
import {Link, usePage, useForm} from "@inertiajs/inertia-react";
import ButtonLogInSignUp from "@/Pages/Layout/Button-LogIn-And-SignUp/ButtonLogInSignUp";
import {useDispatch, useSelector} from 'react-redux'
import {show} from "@/features/Navbar/NavbarSlice";
import ProfileNavigation from "@/Pages/Layout/ProfileNavigation/ProfileNavigation";
import DetailUser from "@/Pages/Layout/DetailUser/DetailUser";
import { close } from "@/features/NavigationForUser/NavigationForUserSlice";
import SearchPost from "./SearchPost/SearchPost";

const MobileNavbarLazy = lazy(() => import('./Mobile-Navbar/Mobile-Navbar'));

function Layout({children}) {

    const dispatch = useDispatch();
    const navbar = useSelector(state => state.navbar.value);
    const navbarForUser = useSelector(state => state.navigationForUser.value);
    const { auth } = usePage().props;

    const { data, post, transform} = useForm({
        session_id : '',
        hash : '',
        remember: false,
    });

    useEffect(() => {
       if (auth?.user === null && localStorage.getItem('remember_me')) {
           const rememberMe = JSON.parse(localStorage.getItem('remember_me'));
           transform((data) => ({
               ...data,
               session_id : rememberMe?.session_id,
               hash : rememberMe?.hash,
           }));
           post('/remember_me_user')
       }
    });

    const showMobileNavbar = () => {
        dispatch(show());
    };

    const closeProfileNavigation = () => {
        if (navbarForUser) {
            dispatch(close())
        }
    }

    return (
        <Fragment>
            <div onClick={closeProfileNavigation} className={`${navbar ? 'overflow-hidden fixed w-full' : ''} h-[56px] font-['Segoe_UI'] bg-white shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)]`}>
                <div className={'max-w-[1280px] h-full mx-auto'}>
                    <div className={'w-full flex items-center relative justify-between h-full'}>

                        {/*Right Side Navbar*/}
                        <div className={'flex lg:justify-start justify-between w-full lg:w-max gap-4'}>
                            <div className={'flex items-center gap-2'}>
                                <div onClick={showMobileNavbar} className={'md:hidden cursor-pointer hover:bg-[#EBECFC] rounded-lg w-[40px] h-[40px] flex items-center justify-center'}>
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
                                <SearchPost/>
                            </div>

                        </div>

                        {/*Left Side Navbar*/}
                        <div>
                            {
                                auth?.user?.name ?
                                    <div className={'relative'}>
                                        <DetailUser dataUser={auth?.user}/>
                                    </div>
                                    :
                                    <div className={'lg:block hidden'}>
                                        <ButtonLogInSignUp/>
                                    </div>
                            }
                        </div>

                        {/*  Profile Navigation  */}
                        <ProfileNavigation dataUser={auth?.user}/>
                    </div>
                </div>
            </div>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <MobileNavbarLazy/>
            </Suspense>
            <div onClick={closeProfileNavigation} className={`${navbar ? 'overflow-hidden' : ''}`}>
                {children}
            </div>
            <div className={`${navbar ? 'hidden overflow-hidden' : 'min-h-[233px]'} p-2 font-['Segoe_UI'] flex justify-center items-center bg-[#E5E5E5]`}>
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
