import {Link} from "@inertiajs/inertia-react";
import BgProfile from "../../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import { useSelector, useDispatch } from 'react-redux'
import { show, close } from '../../../features/NavigationForUser/NavigationForUserSlice';
import React from "react";

function DetailUser({dataUser}) {
    const navigationForUser = useSelector(state => state.navigationForUser.value);
    const dispatch = useDispatch();

    const test = () => {
        if (navigationForUser) {
            dispatch(close())
        } else {
            dispatch(show());
        }
    };

    return (
        <div className={'flex gap-2 items-center'}>

            <Link className={'sm:hidden text-base flex items-center justify-center font-medium hover:bg-[#3B49DF] hover:text-white hover:underline hover:decoration-1 text-[#3B49DF] w-[113.812px] h-[39.6px] border border-[#3B49DF] rounded-lg'} href={'/new'} >
                Create Post
            </Link>

            <Link className={'w-[40px] h-[40px] rounded-lg flex items-center justify-content overflow-hidden hover:bg-[#EBECFC]'} href={'/notifications'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" role="img"
                     aria-labelledby="a6wmv400n2ks0yabdxkc9jcdfhut9vie" className="crayons-icon hover:fill-[#2F3AB2] text-center mx-auto">
                    <path
                        d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>
            </Link>

            <div onClick={test} className={'w-[40px] h-[40px] hover:bg-[#EBECFC] rounded-full flex items-center justify-center overflow-hidden cursor-pointer'}>
                <img src={ dataUser?.profile_image !== '' ? dataUser?.profile_image : BgProfile } className={'w-[32px] h-[32px] rounded-full'} alt="Profile Picture"/>
            </div>
        </div>
    )
}

export default DetailUser;
