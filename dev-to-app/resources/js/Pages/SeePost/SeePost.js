import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Head } from "@inertiajs/inertia-react";

function SeePost({detailPost}) {

    useEffect(() => {
        console.log(detailPost);
    })

    return (
        <>
            <Head title={`${detailPost.title} - DEV Community`} />
            <div className="min-h-screen bg-[#F5F5F5]">
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
                        <div className="lg:w-[59%] w-[89%] bg-green-500">

                            <div className="bg-yellow-300 min-h-[100px]">
                                <div className="w-[100%] h-[500px] overflow-hidden">
                                    <img className="w-[100%] object-cover" src={detailPost.cover} alt="Cover Post Content" />
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="lg:hidden w-full min-h-[100px] bg-red-700"></div>
                            {/* Comment */}
                            <div className="w-full min-h-[100px] bg-green-700"></div>
                        </div>
                        <div className="lg:w-[29%] bg-pink-400">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

SeePost.layout = page => <Layout children={page} title="Welcome" />
export default SeePost;
