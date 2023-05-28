import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Head, Link } from "@inertiajs/inertia-react";
import moment from 'moment';
import 'moment/locale/id';
import ProfileCreator from "./ProfileCreator/ProfileCreator";

function SeePost({detailPost}) {

    const tagsPost = JSON.parse(detailPost.tags);

    useEffect(() => {
        const imgContent =  [].slice.call(document.getElementsByTagName("img")).splice(4);
        const usernamePost = detailPost.users[0]?.username;
        for (const img of imgContent) {
            if (img.src.includes(usernamePost, 0)) {
                img.src = img.src.replace(usernamePost, '/');
            } else {
                console.log("TEST");
            }
        }
        console.log(detailPost);
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
                        <div className="lg:w-[59%] bg-white shadow-[0_1px_3px_0px_rgba(0,0,0,0.02),0_0px_0px_1px_rgba(27,31,35,0.15)] rounded-lg overflow-hidden w-[89%]">

                            <div className="min-h-fit">
                                <div className="overflow-hidden">
                                    <img className="w-[100%] max-h-[400px] object-cover" src={detailPost.cover} alt="Cover Post Content" />
                                </div>
                                <div className="p-6">
                                    <div className="flex pl-8 items-center gap-2">
                                        <div>
                                            <img className="rounded-full w-[40px] h-[40px]" src={detailPost.users[0].profile_image} alt="Profile Image" />
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
                                                tagsPost.map((tag) => (
                                                    <Link href={`/t/${tag}`} className="min-h-[32px] hover:bg-[#EBECFC] p-2 cursor-pointer rounded-lg hover:border hover:border-[#DFE0F9]">#{tag}</Link>
                                                ))
                                            }
                                        </div>
                                        <div dangerouslySetInnerHTML={{__html: detailPost.content}}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="lg:hidden w-full min-h-[100px] bg-red-700">
                                <ProfileCreator />
                            </div>
                            {/* Comment */}
                            <div className="w-full min-h-[100px] bg-green-700"></div>
                        </div>
                        <div className="lg:w-[29%] w-[0%] rounded-lg overflow-hidden bg-pink-400">
                            <ProfileCreator/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

SeePost.layout = page => <Layout children={page} title="Welcome" />
export default SeePost;
