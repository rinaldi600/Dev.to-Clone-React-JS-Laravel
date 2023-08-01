import React, { useEffect, useState, useRef, Suspense } from "react";
import Layout from "../Layout/Layout";
import { Head, Link } from "@inertiajs/inertia-react";

const NextContent = React.lazy(() => import('../Home/Contents/NextContent/NextContent'));

function Search({q, dataFromQuery}) {

    const {
        pathname, search
    } = window.location;

    const [newURL, setNewURL] = useState('');
    const [prevURL, setPrevURL] = useState('');
    const elementRefLink = useRef();
    const urlParams = new URLSearchParams(search);

    useEffect(() => {
        console.log(dataFromQuery);
        console.log(typeof dataFromQuery);
        setPrevURL(window.location.search);
        if (newURL !== '') {
            elementRefLink.current.click();
        }
        setNewURL('');
    });

    const getURL = (e, urlInput, urlInput2) => {
        if (prevURL !== '') {
            const prevParams = new URLSearchParams(prevURL);
            if ((prevParams.get('filters') === null || prevParams.get('filters') !== null) && urlInput !== undefined) {
                setNewURL(`${pathname}?q=${urlParams.get('q')}${urlInput === undefined ? '' : urlInput}`);
            }
            if (((prevParams.get('sort_by') === null && prevParams.get('sort_direction') === null) || (prevParams.get('sort_by') !== null && prevParams.get('sort_direction') !== null)) && urlInput2 !== undefined) {
                setNewURL(`${pathname}?q=${urlParams.get('q')}${urlInput2 === undefined ? '' : urlInput2}`);
            }
            if (prevParams.get('filters') !== null && urlInput2 !== undefined) {
                setNewURL(`${pathname}?q=${urlParams.get('q')}&filters=${prevParams.get('filters')}${urlInput2 === undefined ? '' : urlInput2}`);
            }
            if ((prevParams.get('sort_by') !== null && prevParams.get('sort_direction') !== null) && urlInput !== undefined) {
                setNewURL(`${pathname}?q=${urlParams.get('q')}${urlInput === undefined ? '' : urlInput}&sort_by=${urlParams.get('sort_by')}&sort_direction=${urlParams.get('sort_direction')}`);

            }
        }
    };

    return (
        <>
            <Head title={`Search Results for ${q} - DEV Community`} />
            <div className="min-h-screen bg-[#F5F5F5] pt-5 font-['Segoe_UI']">
                <div className="max-w-[1150px] mx-auto">
                    <div className="w-full min-h-[45px] sm:p-2 gap-2 flex justify-between items-center">
                        <h1 className="text-3xl sm:text-base break-words font-bold text-[#090909]">
                            Search results for {q}
                        </h1>
                        <div className="flex flex-wrap sm:justify-center items-center gap-2 text-base">

                            <Link href={`/search?q=${urlParams.get('q')}${urlParams.get('filters') !== null ? `&filters=${urlParams.get('filters')}` : ''}`} className={`${urlParams.get('q') !== null && urlParams.get('sort_direction') === null ? 'bg-white font-bold' : ''} sm:text-sm p-2 rounded-lg text-[#575757] hover:bg-white hover:text-[#3B49E1]`}>
                                Most Relevant
                            </Link>

                            <button onClick={(e) => getURL(e, undefined,'&sort_by=published_at&sort_direction=desc')} className={`${urlParams.get('sort_direction') === 'desc' ? 'bg-white font-bold' : ''} sm:text-sm p-2 rounded-lg text-[#575757] hover:bg-white hover:text-[#3B49E1]`}>
                                Newest
                            </button>

                            <button onClick={(e) => getURL(e, undefined, '&sort_by=published_at&sort_direction=asc')} className={`${urlParams.get('sort_direction') === 'asc' ? 'bg-white font-bold' : ''} sm:text-sm p-2 rounded-lg text-[#575757] hover:bg-white hover:text-[#3B49E1]`}>
                                Oldest
                            </button>

                        </div>
                    </div>
                    <div className="flex pt-6 max-w-[1150px] justify-center flex-wrap mx-auto">
                        <div className="sm:flex sm:w-full sm:overflow-y-hidden sm:overflow-x-scroll max-h-[500px] w-[300px]">
                            <Link href={newURL} ref={elementRefLink}></Link>

                            <button onClick={(e) => getURL(e, '&filters=class_name:Article')} className={`${urlParams.get('filters') === 'class_name:Article' || (urlParams.get('q') !== null && urlParams.get('filters') === null) ? 'bg-white font-bold' : ''} p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left`} type="button">Post</button>

                            <button onClick={(e) => getURL(e, '&filters=class_name:PodcastEpisode')} className={`${urlParams.get('filters') === 'class_name:PodcastEpisode' ? 'bg-white font-bold' : ''} p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left`} type="button">Podcast</button>

                            <button onClick={(e) => getURL(e, '&filters=class_name:User')} className={`${urlParams.get('filters') === 'class_name:User' ? 'bg-white font-bold' : ''} p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left`} type="button">People</button>

                            <button onClick={(e) => getURL(e, '&filters=class_name:Organization')} className={`${urlParams.get('filters') === 'class_name:Organization' ? 'bg-white font-bold' : ''} p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left`} type="button">Organizations</button>

                            <button onClick={(e) => getURL(e, '&filters=class_name:Tag')} className={`${urlParams.get('filters') === 'class_name:Tag' ? 'bg-white font-bold' : ''} p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left`} type="button">Tags</button>

                            <button onClick={(e) => getURL(e, '&filters=class_name:Comment')} className={`${urlParams.get('filters') === 'class_name:Comment' ? 'bg-white font-bold' : ''} p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left`} type="button">Comments</button>

                            <button onClick={(e) => getURL(e, '&filters=MY_POSTS')} className={`${urlParams.get('MY_POSTS') === 'MY_POSTS' ? 'bg-white font-bold' : ''} p-2 rounded-lg w-[90%] hover:text-[#3B49DF] text-[#090909] text-left`} type="button">My Post Only</button>

                        </div>
                        <div className="min-h-screen w-[845px]">
                            {

                                typeof dataFromQuery === 'object' && dataFromQuery.hasOwnProperty('result') ?
                                    <>
                                        <div className="rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] bg-white w-full min-h-[152px] flex justify-center items-center">
                                        {dataFromQuery.result}
                                        </div>
                                    </>
                                :
                                    <>
                                    {
                                        dataFromQuery.length > 0 ?
                                        dataFromQuery.map((post) => (
                                            <Suspense fallback={<div>Loading</div>}>
                                                <NextContent countComment={post?.comments.length} detailPost={post} detailUserCreate={post?.users[0]} text={post?.title}/>
                                            </Suspense>
                                        ))
                                        :
                                        <>
                                            <div className="rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] bg-white w-full min-h-[152px] flex justify-center items-center">
                                                No results match that query
                                            </div>
                                        </>
                                    }
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Search.layout = page => <Layout children={page} title="Welcome" />
export default Search;
