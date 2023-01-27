import React from "react";
import {Link} from "@inertiajs/inertia-react";
import ImageProfile from '../../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg';

function Contents() {
    return (
        <div>
            <div className={'min-h-[43px] text-lg flex flex-wrap items-center gap-2'}>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Relevant
                </Link>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Latest
                </Link>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Top
                </Link>
            </div>

            <div className={'mt-2 w-full'}>
                <div className={'rounded-lg bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] min-h-[500px] overflow-hidden'}>
                    <div className={'w-full h-[273.235px] bg-yellow-500 overflow-hidden'}>
                        <img className={'w-full h-full'} src='https://res.cloudinary.com/practicaldev/image/fetch/s--x5TIXS6B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jxc9uzhsads1z932whnz.jpg' alt="Cover"/>
                    </div>
                    <div className={'min-h-[242px] pr-9 pl-9 pt-7'}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'w-[32px] h-[32px] rounded-full overflow-hidden'}>
                                <img className={'w-full h-full'} src={ImageProfile} alt="Profile"/>
                            </div>
                            <div className={'text-sm'}>
                                <p className={'font-medium text-[#090909]'}>Rinaldi Hendrawan</p>
                                <p className={'text-[#525252]'}>Jan 27</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contents
