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
                <div className="max-w-[1280px] min-h-[100px] bg-red-300 mx-auto">
                    <div className="w-full flex flex-wrap justify-center gap-2 min-h-[400px]">
                        <div className="md:w-[9%] bg-blue-500">

                        </div>
                        <div className="lg:w-[59%] w-[89%] bg-green-500">

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
