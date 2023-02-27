import Category from "@/Pages/Layout/Category/Category";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { close } from "@/features/Navbar/NavbarSlice";
import CardLoginAndSignUp from "@/Pages/Layout/CardLoginAndSignUp/CardLoginAndSignUp";
import {usePage} from "@inertiajs/inertia-react";

function MobileNavbar() {

    const [width, setWidth] = useState(0);
    const dispatch = useDispatch();
    const navbar = useSelector(state => state.navbar.value);
    const { auth } = usePage().props;

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setWidth(window.innerWidth)
        });
        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth);
            })
        }
    },[]);

    useEffect(() => {
        if (width >= 767.98) {
            dispatch(close());
        }
    });

    const closeMobileNavbar = () => {
        dispatch(close());
    };

    return (
        <div className={`fixed ${navbar ? 'z-50 ' : 'hidden'} font-['Segoe_UI'] inset-0 bg-[#848484]/75 md:hidden fixed overflow-hidden`}>
            <div className={'max-w-[282.2px] bg-white h-full overflow-y-scroll'}>
                <div className={'min-h-[56px] p-2 flex items-center justify-between'}>
                    <h1 className={'font-bold text-lg'}>DEV Community 👩‍💻👨‍💻</h1>
                    <div onClick={closeMobileNavbar} className={'w-[40px] h-[40px] hover:bg-[#EBECFC] flex rounded-lg cursor-pointer justify-center items-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-[24px] hover:text-[#2F3AB2] h-[24px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
                <div className={'min-h-max flex items-center justify-center'}>
                    {
                        auth?.user ?
                            ''
                            :
                            <div className={'w-[267.2px] min-h-max bg-[#FAFAFA] p-2 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.16)]'}>
                                <CardLoginAndSignUp/>
                            </div>
                    }
                </div>
                <div className={'mt-3'}>
                    <Category/>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar;
