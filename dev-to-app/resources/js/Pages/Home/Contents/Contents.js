import React from "react";
import {Link} from "@inertiajs/inertia-react";
import ImageProfile from '../../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import TagContent from "@/Pages/Home/Contents/TagContent/TagContent";

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

            <div className={'mt-2 w-full p-2'}>
                <div className={'rounded-lg bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] overflow-hidden'}>
                    <div className={'w-full max-h-[273.235px] bg-yellow-500 overflow-hidden'}>
                        <img className={'w-full h-full'} src='https://res.cloudinary.com/practicaldev/image/fetch/s--x5TIXS6B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jxc9uzhsads1z932whnz.jpg' alt="Cover"/>
                    </div>
                    <div className={'min-h-[242px] sm:pr-3 sm:pl-3 pr-9 pl-9 pt-7'}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'w-[32px] h-[32px] rounded-full overflow-hidden'}>
                                <img className={'w-full h-full'} src={ImageProfile} alt="Profile"/>
                            </div>
                            <div className={'text-sm'}>
                                <p className={'font-medium text-[#090909]'}>Rinaldi Hendrawan</p>
                                <p className={'text-[#525252]'}>Jan 27</p>
                            </div>
                        </div>
                        <div className={'pl-9 pt-2 pr-9'}>
                            <Link href={'/'} className={'text-2xl font-bold hover:text-[#2F3AB2] sm:text-sm'}>
                                20 Killer JavaScript One-Liners That’ll Save You Hours of Coding 🤯🔥
                            </Link>
                            <div className={'flex mt-2 flex-wrap sm:gap-0.5 gap-3 text-sm text-[#3D3D3D]'}>
                                <TagContent href={'/'} tag={'#webdev'}/>
                                <TagContent href={'/'} tag={'#tailwindcss'}/>
                                <TagContent href={'/'} tag={'#react'}/>
                                <TagContent href={'/'} tag={'#html'}/>
                            </div>
                            <div className={'mt-2'}>
                                <Link href={'/'} className={'bg-[#F6F6F6] flex items-center p-2 rounded-lg w-fit text-sm text-[#090909] h-[32px]'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img"
                                         aria-labelledby="a7k1mf1ubrqpeq80huhvbuog7bq780k1" className="crayons-icon">
                                        <title id="a7k1mf1ubrqpeq80huhvbuog7bq780k1">Reactions</title>
                                        <path
                                            d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                                    </svg>
                                    <span>48 comments</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contents
