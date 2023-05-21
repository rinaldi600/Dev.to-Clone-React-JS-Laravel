import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Head } from "@inertiajs/inertia-react";

function SeePost({detailPost}) {

    useEffect(() => {
        console.log(detailPost);
    })

    return (
        <>
            <Head title={`${detailPost.dPost.title} - DEV Community`} />
            <div className="min-h-screen bg-[#F5F5F5]">
                <div className="max-w-[1280px] min-h-[100px] bg-red-300 mx-auto"></div>
            </div>
        </>
    )
}

SeePost.layout = page => <Layout children={page} title="Welcome" />
export default SeePost;
