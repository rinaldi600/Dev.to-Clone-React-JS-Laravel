import { useEffect, useState, useRef } from "react";
import Layout from "../Layout/Layout";
import { Head, Link } from "@inertiajs/inertia-react";

function Search({q}) {

    const {
        pathname, search
    } = window.location;

    const [newURL, setNewURL] = useState('');
    const elementRefLink = useRef();

    useEffect(() => {
        if (newURL !== '') {
            elementRefLink.current.click();
        }
        setNewURL('');
    });

    const getURL = (e, urlInput) => {
        setNewURL(`${pathname}${search}${urlInput}`);
    };

    return (
        <>
            <Head title={`Search Results for ${q} - DEV Community`} />
            <div className="min-h-screen bg-[#F5F5F5] pt-5 font-['Segoe_UI']">
                <div className="max-w-[1150px] mx-auto">
                    <div className="w-full min-h-[45px] sm:p-2 gap-2 flex justify-between items-center">
                        <h1 className="text-3xl sm:text-base break-words font-bold text-[#090909]">
                            Search results for web
                        </h1>
                        <div className="flex flex-wrap sm:justify-center items-center gap-2 text-base">
                            <Link className="sm:text-sm p-2 rounded-lg font-bold hover:bg-white hover:text-[#3B49DF]" method="get" as="button" type="button">Most Relevant</Link>
                            <Link className="sm:text-sm p-2 rounded-lg text-[#575757] hover:text-[#3B49E1] hover:bg-white" method="get" as="button" type="button">Newest</Link>
                            <Link className="sm:text-sm p-2 rounded-lg text-[#575757] hover:bg-white hover:text-[#3B49E1]" method="get" as="button" type="button">Oldest</Link>
                        </div>
                    </div>
                    <div className="flex pt-6 max-w-[1150px] justify-center flex-wrap mx-auto">
                        <div className="max-h-[500px] w-[300px]">
                            <Link href={newURL} ref={elementRefLink}></Link>
                            <button onClick={(e) => getURL(e, '&filters=class_name:Article')} className="bg-white p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] font-bold text-left" type="button">Post</button>
                            <button onClick={(e) => getURL(e, '&filters=class_name:PodcastEpisode')} className="p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left" type="button">Podcast</button>
                            <button onClick={(e) => getURL(e, '&filters=class_name:User')} className="p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left" type="button">People</button>
                            <button onClick={(e) => getURL(e, '&filters=class_name:Organization')} className="p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left" type="button">Organizations</button>
                            <button onClick={(e) => getURL(e, '&filters=class_name:Tag')} className="p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left" type="button">Tags</button>
                            <button onClick={(e) => getURL(e, '&filters=class_name:Comment')} className="p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left" type="button">Comments</button>
                            <button onClick={(e) => getURL(e, '&filters=MY_POSTS')} className="p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left" type="button">My Post Only</button>
                        </div>
                        <div className="bg-green-400 min-h-screen w-[845px]">
                            <h1>Content Post</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Search.layout = page => <Layout children={page} title="Welcome" />
export default Search;
