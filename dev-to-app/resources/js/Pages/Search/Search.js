import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Head, Link } from "@inertiajs/inertia-react";

function Search({q}) {

    useEffect(() => {
        console.log(q);
    })

    return (
        <>
            <Head title={`Search Results for ${q} - DEV Community`} />
            <div className="min-h-screen bg-[#F5F5F5] pt-5 font-['Segoe_UI']">
                <div className="max-w-[1150px] min-h-[45px] mx-auto">
                    <div className="w-full min-h-[45px] flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-[#090909]">
                            Search results for web
                        </h1>
                        <div className="flex items-center gap-2 text-base">
                            <Link className="p-2 rounded-lg font-bold hover:bg-white hover:text-[#3B49DF]" method="get" as="button" type="button">Most Relevant</Link>
                            <Link className="p-2 rounded-lg text-[#575757] hover:text-[#3B49E1] hover:bg-white" method="get" as="button" type="button">Newest</Link>
                            <Link className="p-2 rounded-lg text-[#575757] hover:bg-white hover:text-[#3B49E1]" method="get" as="button" type="button">Oldest</Link>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-400 max-w-[1150px] min-h-screen mx-auto">

                </div>
            </div>
        </>
    )
}

Search.layout = page => <Layout children={page} title="Welcome" />
export default Search;
