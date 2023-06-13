import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import moment from 'moment';
import 'moment/locale/id';
import ProfileCreator from "./ProfileCreator/ProfileCreator";
import CommentBox from "./CommentBox/CommentBox";

function SeePost({detailPost}) {

    const tagsPost = JSON.parse(detailPost.tags);
    const { auth } = usePage().props;

    useEffect(() => {

    })

    return (
        <>
            <Head title={`${detailPost.title} - DEV Community`} />
            <div className="min-h-screen p-2 bg-[#F5F5F5] font-['Segoe_UI']">
                <div className="max-w-[1280px] min-h-[100px] mx-auto">
                    <div className="w-full flex flex-wrap justify-center gap-2 min-h-[400px]">
                        <div className="md:w-[9%] hidden md:grid justify-center items-center">
                            <div className="w-[64px] h-[63px] grid justify-center items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" class="crayons-icon fill-[#3D3D3D]">
                                <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                                </svg>
                                <span className="text-[#575757] text-center">1</span>
                            </div>
                        </div>
                        <div className="lg:w-[59%] bg-white rounded-lg overflow-hidden w-[89%]">

                            <div className="min-h-fit border border-[#EAEAEA]">
                                <div className="overflow-hidden">
                                    <img className="w-[100%] max-h-[400px] object-cover" src={detailPost.cover} alt="Cover Post Content" />
                                </div>
                                <div className="p-6">
                                    <div className="flex pl-8 items-center gap-2">
                                        <div>
                                            {
                                                detailPost.users[0].profile_image === '' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                :
                                                <img className="rounded-full w-[40px] h-[40px]" src={detailPost.users[0].profile_image} alt="Profile Image" />
                                            }
                                        </div>
                                        <div>
                                            <p className="text-[#404040] font-bold text-base">{detailPost.users[0].name}</p>
                                            <p className="text-xs text-[#717171]">{moment(detailPost?.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                        </div>
                                    </div>
                                    <div className="content p-6 pl-8 pt-12">
                                        <h1 className="text-[#171717] pb-4 text-5xl font-extrabold break-words">{detailPost.title}</h1>
                                        <div className="flex pb-8 flex-wrap">
                                            {
                                                tagsPost !== null ?
                                                    tagsPost.map((tag) => (
                                                        <Link href={`/t/${tag}`} className="min-h-[32px] hover:bg-[#EBECFC] p-2 cursor-pointer rounded-lg hover:border hover:border-[#DFE0F9]">#{tag}</Link>
                                                    ))
                                                    :
                                                    ''

                                            }
                                        </div>
                                        <div dangerouslySetInnerHTML={{__html: detailPost.content}}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comment */}
                            <div className="mx-auto pt-8 min-h-[100px] lg:w-[85%] w-[89%]">
                                <h2 className="text-[#242424] font-bold text-2xl">Top comments (1)</h2>
                                <div className="w-full pt-8">
                                    <div className="flex gap-2">
                                        <div className={`${auth?.user?.profile_image === '' ? 'flex items-center justify-center' : ''} w-[32px] h-[32px] rounded-full overflow-hidden`}>
                                            {
                                                auth?.user?.profile_image === '' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                :
                                                <img className="w-full h-full" src={auth?.user?.profile_image ?? `https://res.cloudinary.com/practicaldev/image/fetch/s--RmY55OKL--/c_limit,f_auto,fl_progressive,q_auto,w_256/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png`} alt="Profile User" />
                                            }
                                        </div>
                                        <div className="w-[90%]">
                                            <CommentBox idPost={detailPost?.id_post} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="lg:hidden w-full pt-3 min-h-[100px]">
                                <ProfileCreator detailUser={detailPost.users[0]} />
                            </div>
                        </div>
                        <div className="lg:w-[29%] w-[0%] rounded-lg overflow-hidden">
                            <ProfileCreator detailUser={detailPost.users[0]}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

SeePost.layout = page => <Layout children={page} title="Welcome" />
export default SeePost;
